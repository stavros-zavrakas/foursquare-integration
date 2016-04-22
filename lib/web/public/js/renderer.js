'use strict';

define(['logger'], function (logger) {
  logger.debug('renderer.js loaded');

  function buildVenueTile(name, address) {
    var template = '<a href="#" class="list-group-item">';
    template += '<h4 class="list-group-item-heading">%s1</h4>';
    template += '<p class="list-group-item-text">%s2</p>';
    template += '</a>';

    template = template.replace('%s1', name).replace('%s2', address);

    return template;
  }

  return {
    buildVenueTile: buildVenueTile
  };
});
