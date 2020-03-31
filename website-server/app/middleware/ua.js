module.exports = (options, app) => {
  return async function uaMiddleware(ctx, next) {
    const ua = ctx.get('user-agent') || '';
    await next();
  }
};