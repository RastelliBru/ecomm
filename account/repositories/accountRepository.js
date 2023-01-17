import { MongoClient } from "mongodb";


const client = new MongoClient("mongodb://mongouser:123456789@localhost:27017");

async function getUsersCollection(client) {
  const database = client.db("accounts");
  const usersCollection = database.collection('users')
  return usersCollection;
}

export async function saveAccount(account) {
  await client.connect();
  const usersCollection = await getUsersCollection(client);
  await usersCollection.insertOne(account);
  setTimeout(() => {client.close()}, 1500)
  await client.close();
}
