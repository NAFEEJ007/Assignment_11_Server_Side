const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const database = client.db("serviceReviewDB");
    const services = database.collection("services");

    // Update Electrical
    const res1 = await services.updateOne(
      { serviceTitle: "Home Electrical Repair" },
      { $set: { serviceImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" } }
    );
    console.log("Electrical update:", res1.modifiedCount);

    // Update Plumbing
    const res2 = await services.updateOne(
      { serviceTitle: "Plumbing & Pipe Fitting" },
      { $set: { serviceImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop" } }
    );
    console.log("Plumbing update:", res2.modifiedCount);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
