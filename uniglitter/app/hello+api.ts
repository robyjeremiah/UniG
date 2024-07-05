import { MongoClient, ServerApiVersion } from "mongodb";
import Constants from 'expo-constants';



export async function GET(request: Request) {
  //const uri = "mongodb+srv://robyjeremiah:testpassword@uniglitter.negfqt5.mongodb.net/?retryWrites=true&w=majority&appName=UniGlitter";
  //const uri = Constants.expoConfig?.extra?.database;
  //const uri: string = process.env.EXPO_PUBLIC_DB_ ?? '' // no error
  const uri: string = process.env.EXPO_PUBLIC_DB_!
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Get the database and collection
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");

    // Query the collection (e.g., find all documents)
    const documents = await collection.find({}).toArray();
    const pipeline = [
      {
        $project: {
            _id: 1,
            plot: 1,
            genres: 1,
            runtime: 1,
            cast: 1,
            poster: 1,
            title: 1,
            fullplot: 1,
            languages: 1,
            released: 1,
            directors: 1,
            rated: 1,
            awards: 1,
            lastupdated: 1,
            year: 1,
            imdb: 1,
            countries: 1,
            type: 1,
            tomatoes: 1,
            num_mflix_comments: 1
        }
    },
    {
        $limit: 5 // Limit the number of documents returned to 10
    }
    ];

    console.log('documents:');

    const results = await collection.aggregate(pipeline).toArray();
    let jsonData = results.map(item => JSON.stringify(item))
    // Log each document with formatted JSON
    /* results.forEach(document => {
      console.log(JSON.stringify(document, null, 5) + "\n ");
    }); */
    //const jsonString = JSON.stringify(results);
    return Response.json(JSON.stringify(results));

  } catch (err) {
    console.error(err);
  }

  //return Response.json({hello: 'world' });
}
