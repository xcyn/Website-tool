'use strict';

module.exports = appInfo => {
  let config = {};

  // 服务采用 7011 端口
  config.cluster = {
    listen: {
      port: 7013,
    },
  };

  const modeConfig = {
    mongo: {
      user: 'xiongchuanyu',
      password: encodeURIComponent('123456'),
      host: 'localhost',
      port: '27018',
      DB: 'website-docker',
      authSource: 'admin',
    },
  };

  config.mongoose = {
    client: {
      url: `mongodb://${modeConfig.mongo.user}:${modeConfig.mongo.password}@${modeConfig.mongo.host}:${modeConfig.mongo.port}/${modeConfig.mongo.DB}?authSource=${modeConfig.mongo.authSource}`,
        options: {
            useUnifiedTopology: true,
            useCreateIndex: true
        }
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

  // 处理前端error：missing csrf token
  config.security = {
    csrf: {
      enable: false,
    }
  };

  return config;
};
