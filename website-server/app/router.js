module.exports = app => {
  const { router, controller } = app;
  // 生成唯一pageId
  router.get('/pageConfig/getPageId', controller.pageConfig.getPageId)
  // 获取组件区配置
  router.get('/pageConfig/getPageConfList', controller.pageConfig.getPageConfList)
  // 保存页面全局配置数据
  router.post('/pageConfig/savePageConfList', controller.pageConfig.savePageConfList)
  // 更新页面全局配置数据
  router.put('/pageConfig/updatePageConfList', controller.pageConfig.updatePageConfList)
  // 获取布局区数据
  router.get('/pageConfig/getPageCpDatas', controller.pageConfig.getPageCpDatas)
  // 保存布局区数据
  router.post('/pageConfig/savePageCpDatas', controller.pageConfig.savePageCpDatas)
  // 更新布局区数据
  router.put('/pageConfig/updatePageCpDatas', controller.pageConfig.updatePageCpDatas)
  // 获取配置区域->页面配置数据
  router.get('/pageConfig/getPageComponentDatas', controller.pageConfig.getPageComponentDatas)
  // 获取配置区域->页面配置配置项
  router.get('/pageConfig/getPageCommonConfig', controller.pageConfig.getPageCommonConfig)
  // 获取配置区域->页面配置数据
  router.get('/pageConfig/getPageCommonData', controller.pageConfig.getPageCommonData)
  // 更新配置区域->页面配置数据
  router.put('/pageConfig/updatePageCommonData', controller.pageConfig.updatePageCommonData)
  // 更新配置区域->页面组件数据
  router.put('/pageConfig/updatePageComponentData', controller.pageConfig.updatePageComponentData)
};