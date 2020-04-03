'use strict';
module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // ctx.app.emit('error', err, ctx);
      const status = err.status || 500;
      ctx.body = { 
        status,
        errmsg: err
      };
    }
  };
};
