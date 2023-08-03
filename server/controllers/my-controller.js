'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('content-owners')
      .service('myService')
      .getWelcomeMessage();
  },
});
