'use strict';

require.config({
  baseUrl: '/public/js',
  paths: {
    jquery: 'libs/jquery.min',
    events: 'events',
    requestor: 'requestor',
    utils: 'utils',
    renderer: 'renderer',
    logger: 'logger'
  }
});

requirejs(['events', 'logger'], function (events, logger) {
  logger.debug('app.js loaded');
});
