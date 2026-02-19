const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
dns.setDefaultResultOrder('ipv4first');

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://adhil21:Adhil2104@cluster0.k6hic2g.mongodb.net/testing?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB!");
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Ping successful!");
  } catch(err) {
    console.error("❌ Error:", err.message);
  } finally {
    await client.close();
  }
}

run();