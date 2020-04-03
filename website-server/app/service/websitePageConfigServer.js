'use strict';


module.exports = app => {
  class websitePageConfigServer extends app.Service {
    async queryPageConfigs() {
      try {
        const query = await app.model.WebsitePageConfigs.find()
        return query;
      } catch(err) {
        throw err;
      }
    }
    async queryPageConfigOne(findData = {pageId: 1}) {
      try {
        const query = await app.model.WebsitePageConfigs.findOne({pageId: +findData.pageId})
        return query.config;
      } catch(err) {
        throw err;
      }
    }
    async savePageConfigs(saveData) {
      try {
        const ins = new app.model.WebsitePageConfigs(saveData);
        const data = await ins.save()
        return data;
      } catch(err) {
        throw err;
      }
    }
    async updatePageConfigs(findData, upData) {
      try {
        const data = await app.model.WebsitePageConfigs.updateOne(findData, upData)
        return data;
      } catch(err) {
        console.log('err', err)
        throw err;
      }
    }
  }
  return websitePageConfigServer;
};
