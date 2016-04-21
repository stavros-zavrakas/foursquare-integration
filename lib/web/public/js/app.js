require.config({
  paths: {
    jquery: '/public/js/bower_components/jquery/dist/jquery',
    events: '/public/js/events',
    requestor: '/public/js/requestor',
    logger: '/public/js/logger'
  }
});

requirejs(['jquery', 'requestor', 'events', 'logger'], function ($, requestor, events, logger) {
  logger.debug('app.js loaded');
});
