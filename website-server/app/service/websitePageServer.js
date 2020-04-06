'use strict';

const LogType = 'websitePageServer:';
module.exports = app => {
  class websitePageServer extends app.Service {
    async queryPages(pageData) {
      try {
        const data = await app.model.WebsitePages.find().skip(+ (pageData.currentPage-1) * pageData.pageSize).limit(+pageData.pageSize) || {}
        const pageTotal = await app.model.WebsitePages.find().count()
        return {
          data,
          pageTotal
        };
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async queryPageOne(pageData) {
      try {
        const query = await app.model.WebsitePages.findOne(pageData) || {}
        return query;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async savePages(saveData) {
      try {
        const ins = new app.model.WebsitePages(saveData);
        const data = await ins.save()
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async release(pageId) {
      try {
        const data = await app.model.WebsitePages.updateOne({
          pageId
        }, {$set: { status: 1 }})
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
    async deletePages(removeData) {
      try {
        const data = await app.model.WebsitePages.remove(removeData)
        return data;
      } catch(err) {
        app.logger.error(LogType, err);
        throw err;
      }
    }
  }
  return websitePageServer;
};