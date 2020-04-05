'use strict';

const LogType = 'websiteComponentServer:';
module.exports = app => {
  class websiteComponentServer extends app.Service {
    async queryPageConfigs() {
      try {
        const query = await app.model.WebsiteComponents.find()
        return query;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async queryPageConfigOne(findData = {pageId: 1}) {
      try {
    
        const query = await app.model.WebsiteComponents.findOne({pageId: +findData.pageId}) || {}
        return query.component;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async queryPageComponentDatas(findData = {pageId: 1}) {
      try {
        const query = await app.model.WebsiteComponents.findOne({pageId: +findData.pageId})
        return query.componentData;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async savePageConfigs(saveData) {
      try {
        const ins = new app.model.WebsiteComponents(saveData);
        const data = await ins.save()
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async updatePageConfigs(upData) {
      try {
        const data = await app.model.WebsiteComponents.updateOne({
          pageId: upData.pageId
        }, upData)
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async queryPageCommonData(findData) {
      try {
        const query = await app.model.WebsiteComponents.findOne(findData) || {}
        return query.pageData;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async updatePageComponentData(upData) {
      try {
        const data = await app.model.WebsiteComponents.updateOne({
          pageId: upData.pageId
        }, {$set: { componentData: upData.data }})
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async updatePageCommonData(upData) {
      try {
        const data = await app.model.WebsiteComponents.updateOne({
          pageId: upData.pageId
        }, {$set: { pageData: upData.data }})
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
  }
  return websiteComponentServer;
};
