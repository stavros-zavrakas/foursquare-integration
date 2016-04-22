'use strict';

requirejs(['jquery', 'models', 'utils', 'renderer', 'logger'], function ($, models, utils, renderer, logger) {

  logger.info('events.js loaded');

  var $location = $('.her-location');
  var $results = $('.her-results');

  $('.her-search').click(function (e) {
    e.preventDefault();

    var location = $location.val();

    if (!location) {
      return alert('You have to type the location');
    }

    var foursquare = new models.foursquare();

    var query = {
      near: location,
      oauth_token: 'Y2CRTQ21QSNSV0OK0EYF0I3XE2TNAXLGJA4Z4ASUPEJCX4ZG'
    };

    foursquare.getSearch(query, function (res) {
      if (!res || !res.response) {
        alert('Error retrieving the places');
      }

      var venues = res.response.venues

      $results.html('');
      venues.forEach(function (venue) {
        var locStr = utils.buildLocationStr(venue.location);
        var tile = renderer.buildVenueTile(venue.name, locStr);
        $results.append(tile);
      });

    });
  });

});
