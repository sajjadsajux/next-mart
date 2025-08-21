import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Please add MONGODB_URI in your .env.local");

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Reuse client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, just create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectDB() {
  const client = await clientPromise;
  return client.db("nextMartDB"); // 👈 your database name
}
