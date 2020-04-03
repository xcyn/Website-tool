module.exports = app => {
  const { router, controller } = app;
  router.get('/getUuid', controller.home.getUuid)
  router.get('/pageConfig/getPageId', controller.pageConfig.getPageId)
  router.get('/pageConfig/getPageComponentList', controller.pageConfig.getPageComponentList)
  router.get('/pageConfig/getPageconfigList', controller.pageConfig.getPageconfigList)
  router.post('/pageConfig/savePageconfigList', controller.pageConfig.savePageconfigList)
  router.put('/pageConfig/updatePageconfigList', controller.pageConfig.updatePageconfigList)
  router.get('/pageConfig/getPageComponentDatas', controller.pageConfig.getPageComponentDatas)
  router.get('/pageConfig/getPageCommonData', controller.pageConfig.getPageCommonData)
};