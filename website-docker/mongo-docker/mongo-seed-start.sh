#!/bin/sh

# TODO seed shell script retry seed mongoDB when conection timeout

# sleep for waiting mongod started
sleep 5

# add user
mongo -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} ${MONGODB_URL}/${ADMIN_DB} create-user.js

# seed data
mongo -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase ${ADMIN_DB} ${MONGODB_URL}/${DEFAULT_DB} seed-data.js