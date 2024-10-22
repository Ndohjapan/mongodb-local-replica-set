rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "192.168.0.237:27017" }, // replace the ip with your local ip
    { _id: 1, host: "192.168.0.237:27018" },
    { _id: 2, host: "192.168.0.237:27019" },
  ],
});
sleep(5000); // Wait for the replica set to initiate
