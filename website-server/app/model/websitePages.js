'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const websitePageSchema = new Schema({
    id: {
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
    }
  });

  return mongoose.model('websitePages', websitePageSchema);
};
