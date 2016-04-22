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

requirejs(['jquery', 'requestor', 'events', 'utils', 'renderer', 'logger'], function ($, requestor, events, utils, renderer, logger) {
  logger.debug('app.js loaded');
});
