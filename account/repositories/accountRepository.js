import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'

dotenv.config()

const client = new MongoClient(process.env.DATABASE_URL);

export async function getUsersCollection(client) {
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

export {client}
