'use strict';

module.exports = appInfo => {
  let config = {};

  // 服务采用 7011 端口
  config.cluster = {
    listen: {
      port: 7013,
    },
  };

  config.keys = appInfo.name + '_websiteTool';

  config.middleware = [
    'ua'
  ];

  config.ua = {
    ua: [
      /Baiduspider/i,
    ]
  };

  return config;
};
