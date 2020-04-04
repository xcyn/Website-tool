'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const websitePageConfigSchema = new Schema({
    createTime: {
      type: Date,
      default: Date.now,
    },
    updateTime: {
      type: Date,
      default: Date.now,
    },
    pageId: {
      type: Number,
      unique: true,
      required: true,
    },
    config: {
      type: Array,
      default: []
    },
    pageConfig: {
      type: Array,
      default: []
    }
  });

  return mongoose.model('websitePageConfigs', websitePageConfigSchema);
};
