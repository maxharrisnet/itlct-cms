'use strict';

/**
 * our-values service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-values.our-values');
