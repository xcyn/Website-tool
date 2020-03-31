'use strict';

const generate = require('nanoid/generate');

module.exports = {
  getUuid: () => {
    return generate('01234567890', 8);
  },
};
