import { MongoClient } from "mongodb";

async function databaseConnect() {
  const connectionURL = "mongodb://mongouser:123456789@mongodb:27017";
  const connection = new MongoClient(connectionURL);
  await connection.connect();
  const database = connection.db("accounts");

  return database.collection("users");
}

export async function saveAccount(account) {
  const collection = await databaseConnect();
  await collection.insertOne(account);
}
