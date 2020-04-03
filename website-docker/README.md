## 依赖环境
+ docker、docker-compose
## 启动说明
+ docker-compose up 本地启动
+ docker-compose up -d # 后台启动
+ docker ps 查看 containers
+ docker exec -it `docker ps -f name=xxx -q` bash  进入docker
+ docker exec -it 094340a78222 bash  进入docker
+ docker kill name  关闭docker进程
+ docker-compose build --no-cache  清除docker缓存

## 参考文档
* dockerfile 官方文档
> https://docs.docker.com/engine/reference/builder/

* compose 官方文档
> https://docs.docker.com/compose/compose-file/

* mongod 启动命令官方文档
> https://docs.mongodb.com/manual/reference/program/mongod/

* mongodb客户端
> https://xclient.info/s/navicat-for-mongodb.html