'use strict';

const generate = require('nanoid/generate')
var shell = require('shelljs')
const fs = require('fs')
const path = require('path')
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
  shell,
  fs,
  path
};
