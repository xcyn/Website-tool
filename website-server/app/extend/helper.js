'use strict';

const generate = require('nanoid/generate');
var shell = require('shelljs')
module.exports = {
  getUuid: () => {
    return generate('01234567890', 8);
  },
  res: ({ status = 200, errmsg = '', data = null }) => {
    return {
      status,
      errmsg,
      data
    }
  },
  shell: shell
};
