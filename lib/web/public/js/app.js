'use strict';

require.config({
  baseUrl: '/public/js',
  paths: {
    jquery: 'libs/jquery.min',
    events: 'events',
    requestor: 'requestor',
    logger: 'logger'
  }
});

requirejs(['jquery', 'requestor', 'events', 'logger'], function ($, requestor, events, logger) {
  logger.debug('app.js loaded');
});
