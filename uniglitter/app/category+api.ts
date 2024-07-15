import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import Constants from 'expo-constants';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  images: string[];
  stock_quantity: number;
  created_at: Date;
  updated_at: Date;
}

interface Category {
  _id: ObjectId;
  name: string;
  description: string;
  parent_category_id: string | null;
}


export async function GET(request: Request) {
  const uri: string = process.env.EXPO_PUBLIC_DB_!;
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
    const database = client.db("UG_Database");
    const collection = database.collection("categories");

    // Query the collection (e.g., find all documents)
    const categories = await collection.find({}).toArray();
    /* const pipeline = [
      {
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          price: 1,
          category_id: 1,
          images: 1,
          stock_quantity: 1,
          created_at: 1,
          updated_at: 1
        }
      },
    ];
    const results = await collection.aggregate(pipeline).toArray(); */
    return Response.json(categories);

  } catch (err) {
    
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to connect to the database' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
    
