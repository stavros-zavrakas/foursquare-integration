'use strict';

requirejs(['jquery', 'requestor', 'logger'], function ($, requestor, logger) {

  logger.info('events.js loaded');

  var $location = $('.her-location');

  $('.her-search').click(function(e) {
    e.preventDefault();

    var location = $location.val();

    if(!location) {
      return alert('You have to type the location');
    }

    var req = new requestor();

    var endpoint = 'https://api.foursquare.com/v2/venues/search';
    var query = {
      near: location,
      oauth_token:'Y2CRTQ21QSNSV0OK0EYF0I3XE2TNAXLGJA4Z4ASUPEJCX4ZG',
      v:20160421
    };

    req.get(endpoint, query, function (res) {
      logger.debug(res);
    });
  });

});
