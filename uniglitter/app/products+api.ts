import { MongoClient, ServerApiVersion } from "mongodb";
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

const products: Omit<Product, '_id'>[] = [
  {
    name: "Example Product 1",
    description: "This is the first example product description.",
    price: 19.99,
    category_id: "category-1",
    images: ["image1a.jpg", "image1b.jpg"],
    stock_quantity: 50,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "Example Product 2",
    description: "This is the second example product description.",
    price: 29.99,
    category_id: "category-2",
    images: ["image2a.jpg", "image2b.jpg"],
    stock_quantity: 100,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "Example Product 3",
    description: "This is the third example product description.",
    price: 39.99,
    category_id: "category-3",
    images: ["image3a.jpg", "image3b.jpg"],
    stock_quantity: 75,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "Example Product 4",
    description: "This is the fourth example product description.",
    price: 49.99,
    category_id: "category-4",
    images: ["image4a.jpg", "image4b.jpg"],
    stock_quantity: 150,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "Example Product 5",
    description: "This is the fifth example product description.",
    price: 59.99,
    category_id: "category-5",
    images: ["image5a.jpg", "image5b.jpg"],
    stock_quantity: 200,
    created_at: new Date(),
    updated_at: new Date()
  }
];



export async function GET(request: Request) {

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
    const database = client.db("UG_Database");
    const collection = database.collection("products");

    /* // Insert the product documents
    const result = await collection.insertMany(products);
    console.log(`Successfully inserted ${result.insertedCount} products`);
    client.close() */

    // Query the collection (e.g., find all documents)
    
    //const documents = await collection.find({}).toArray();
    const pipeline = [
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

    const results = await collection.aggregate(pipeline).toArray();

    return Response.json(results);

  } catch (err) {
    console.error(err);
  }
  //return Response.json({I : 'made it'});
}




