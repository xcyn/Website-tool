const targetUser = db.getUser('xiongchuanyu');
if (!targetUser) {
  db.createUser(
    {
      user: "xiongchuanyu",
      pwd: "123456",
      roles: [
        { "role": "clusterAdmin", "db": "admin" },
        { "role": "dbAdminAnyDatabase", "db": "admin" },
        { "role": "userAdminAnyDatabase", "db": "admin" },
        { "role": "readWriteAnyDatabase", "db": "admin" }
      ],
    }
  );
}
