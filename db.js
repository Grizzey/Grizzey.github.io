const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://grizzey:KGoDEhgi0J8CAh7M@cluster0.idmps6k.mongodb.net/test";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('test');
    const movies = database.collection('users');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);