const { Client } = require("pg");

const connectionData = {
  user: "postgres",
  host: "localhost",
  database: "animal-adoption",
  password: "1234",
  port: 5432,
};
const adoptionClient = new Client(connectionData);
adoptionClient.connect();
module.exports= adoptionClient;

//host name : ec2-52-208-254-158.eu-west-1.compute.amazonaws.com
//username: acmtpiwsntllgb
//password: b0d4c901410b96a7fcd7cc52b37cd5906f769f08a881831f4aec556d4ec913f2 

