require("dotenv").config();
const mongoose = require("mongoose");
// mongoose.set("debug", true);
// mongoose.Promise = Promise;

const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //   client.close();
});

mongoose.connect(process.env.DB_URL);

module.exports.User = require("./user");
module.exports.Message = require("./message");
