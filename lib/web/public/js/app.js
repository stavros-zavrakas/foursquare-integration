// requirejs.config({
//   jquery: '/public/js/bower_components/jquery/dist/jquery'
// });

require.config({
  paths: {
    jquery: '/public/js/bower_components/jquery/dist/jquery',
    requestor: '/public/js/requestor',
    logger: '/public/js/logger'
  }
});

requirejs(['jquery', 'requestor', 'logger'], function ($, requestor, logger) {
  logger.info('app.js loaded');

  var req = new requestor();

  var endpoint = 'https://api.foursquare.com/v2/venues/search?near=london&oauth_token=Y2CRTQ21QSNSV0OK0EYF0I3XE2TNAXLGJA4Z4ASUPEJCX4ZG&v=20160421';
  req.get(endpoint, function (res) {
    logger.info(res);
  });
});
