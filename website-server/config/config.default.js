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
    'ua',
    'errorHandler'
  ];

  config.ua = {
    ua: [
      /Baiduspider/i,
    ]
  };

  config.cors = {
    origin: ctx => ctx.get('origin'),
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  return config;
};
