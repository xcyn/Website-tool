'use strict';

// 解决跨域问题
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// 集成mongodb
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// 链接阿里node
exports.alinode = {
  enable: true,
  package: 'egg-alinode',
};
