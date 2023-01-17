import { MongoClient } from "mongodb";

const connectionURL = "mongodb://mongouser:123456789@mongodb_accounts:27017";
const connection = new MongoClient(connectionURL);

async function getUsersCollection() {
  await connection.connect();
  const database = connection.db("accounts");
  return database.collection("users");
}

export async function saveAccount(account) {
  const collection = await getUsersCollection();
  await collection.insertOne(account);
  //await connection.close();
}
