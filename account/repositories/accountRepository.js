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
  await client.close();
}

export async function findUserByEmail(email) {
  await client.connect();
  const usersCollection = await getUsersCollection(client);
  const user = await usersCollection.findOne({ email });
  await client.close();
  return user;
}

export {client}
