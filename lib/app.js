'use strict';

var logger = require('logfmt');
var http = require('http');
var throng = require('throng');
var cpus = require('os').cpus().length;

var concurrency = parseInt(process.env.CONCURRENCY, 10) || cpus;

http.globalAgent.maxSockets = Infinity;

var web = require('./web');

function start() {
  logger.log({
    type: 'info',
    msg: 'starting server',
    concurrency: concurrency
  });

  function createServer() {
    var server = http.createServer(web());

    server.listen(process.env.PORT, onListen);

    function onListen() {
      logger.log({ type: 'info', msg: 'listening', port: server.address().port });
    }

    function shutdown() {
      logger.log({ type: 'info', msg: 'shutting down' });
      server.close(function () {
        logger.log({ type: 'info', msg: 'exiting' });
        process.exit();
      });
    }
  }

  createServer();
}

throng({ workers: concurrency }, start);
