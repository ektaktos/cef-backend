'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const axios = require('axios');
module.exports = {
  index: async ctx => {
    const body = ctx.request.body;
    console.log(body);
    const url = 'https://api.buttondown.email/v1/subscribers';
    const options = {
      headers: {
        "Authorization": "Token 8a4790d3-e2a4-48f4-b607-e5c62d211ad6",
        "Content-Type": "application/json",
      }
    };
    const data = { email: body.email }
    await axios.post(url, data, options);
  }
};
