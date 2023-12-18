'use strict';

/**
 * events-and-programs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-and-programs.events-and-programs');
