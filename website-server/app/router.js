module.exports = app => {
  const { router, controller } = app;
  router.get('/getUuid', controller.home.getUuid)
  router.get('/pageConfig/getPageId', controller.pageConfig.getPageId)
  router.get('/pageConfig/getPageconfigList', controller.pageConfig.getPageconfigList)
  router.get('/pageConfig/getPageComponentDatas', controller.pageConfig.getPageComponentDatas)
  router.get('/pageConfig/getPageCommonData', controller.pageConfig.getPageCommonData)
};