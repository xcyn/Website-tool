'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const websiteComponentSchema = new Schema({
    pageId: {
      type: Number,
      unique: true,
      required: true,
    },
    createTime: {
      type: Date,
      default: Date.now,
    },
    updateTime: {
      type: Date,
      default: Date.now,
    },
    component: {
      type: Array,
      default: []
    },
    componentData: {
      type: Object,
      default: {}
    },
    pageData: {
      type: Object,
      default: {}
    }
  });

  return mongoose.model('websiteComponents', websiteComponentSchema);
};
