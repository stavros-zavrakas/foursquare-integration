'use strict';

define(['requestor', 'logger'], function (requestor, logger) {
  logger.debug('models.js loaded');

  var req = new requestor();
    
  function Foursquare(opts) {
    opts = opts || {};

    this.endpoint = opts.endpoint || 'https://api.foursquare.com/v2';
    this.version = opts.version || 20160421;
  }

  Foursquare.prototype.getSearch = function (query, callback) {
    query = query || {};

    if (!query) {
      logger.error('query parameter is mandatory');
      throw new TypeError('query is mandatory param', 'models.js');
    } else if (!query.oauth_token) { // jshint ignore:line
      logger.error('oauth_token parameter is mandatory');
      throw new TypeError('query.oauth_token is mandatory param', 'models.js');
    } 

    var params = {
      near: query.near || 'london',
      oauth_token: query.oauth_token, // jshint ignore:line
      v: this.version
    };

    var endpoint = this.endpoint + '/venues/search';

    req.get(endpoint, params, callback);
  };

  return {
    foursquare: Foursquare
  };
});
