'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const websitePageSchema = new Schema({
    pageId: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
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
    status: {
      type: Number,
      default: 0
    },
  });

  return mongoose.model('websitePages', websitePageSchema);
};
