const date = new Date();

const createTemplateParams = {
  condition: {
  },
  payload1: {
    id: 1,
    name: '❤️--Vue模板--❤️',
    createTime: date,
    updateTime: date,
    files: '/1/website-tool-template.zip',
    thumbnail: 'https://avatars3.githubusercontent.com/u/6128107',
  }
};

try {
  print('开始导入数据库数据..........')
  if (db.templates.find(createTemplateParams.condition).toArray().length === 0) {
    db.templates.insertOne(createTemplateParams.payload1);
    print('seed data: seed management success');
  }
  print('seed data: success');
} catch (e) {
  print('seed data: fail');
  print('seed data: error:');
  printjson(e);
}
