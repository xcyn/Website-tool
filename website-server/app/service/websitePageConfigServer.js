'use strict';

const LogType = 'websitePageConfigServer:';
module.exports = app => {
  // 统一版本维护
  const findData= {pageId: 1}
  class websitePageConfigServer extends app.Service {
    async queryComponents() {
      try {
        const query = await app.model.WebsitePageConfigs.findOne(findData) || {}
        app.logger.error(LogType, '测试err');
        return query.config;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async queryPageConfig() {
      try {
        const query = await app.model.WebsitePageConfigs.findOne(findData) || {}
        return query.pageConfig;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async queryPageComponentsData() {
      try {
        const query = await app.model.WebsitePageConfigs.findOne(findData)
        return query.pageData;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async saveComponents(saveData) {
      try {
        const ins = new app.model.WebsitePageConfigs(saveData);
        const data = await ins.save()
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async updateComponents(upData) {
      try {
        const data = await app.model.WebsitePageConfigs.updateOne(findData, upData)
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
  }
  return websitePageConfigServer;
};
