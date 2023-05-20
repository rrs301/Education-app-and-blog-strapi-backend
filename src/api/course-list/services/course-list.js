'use strict';

/**
 * course-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-list.course-list');
