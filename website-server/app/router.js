module.exports = app => {
  const { router, controller } = app;
  router.get('/getUuid', controller.home.getUuid)
};