import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'

dotenv.config()

const client = new MongoClient(process.env.DATABASE_URL);

export async function getUsersCollection(client) {
  const database = client.db(process.env.MONGO_INITDB_DATABASE);
  const usersCollection = database.collection(process.env.DB_COLLECTION)
  return usersCollection;
}

export async function saveAccount(account) {
  await client.connect();
  const usersCollection = await getUsersCollection(client);
  await usersCollection.insertOne(account);
}

export async function findUserByEmail(email) {
  const usersCollection = await getUsersCollection(client);
  const user = await usersCollection.findOne({ email });
  return user;
}

export async function findAccountByEmail(email) {
  const collection = await getUsersCollection(client);
  const account = collection.findOne({ email });

  return account;
}


export async function existsAccountByEmail(email) {
    const account = await findAccountByEmail(email);

    return account !== null;
}

export {client}
