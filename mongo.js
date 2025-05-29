const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Example operation: Insert a document
    const doc = { name: "John Doe", age: 30 };
    const result = await collection.insertOne(doc);
    console.log(`New document inserted with _id: ${result.insertedId}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
