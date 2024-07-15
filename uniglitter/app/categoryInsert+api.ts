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

const categories = [
  {
    name: "Category 1",
    description: "This is the description for category 1.",
    parent_category_id: null // Top-level category
  },
  {
    name: "Category 2",
    description: "This is the description for category 2.",
    parent_category_id: null // Top-level category
  },
  {
    name: "Category 3",
    description: "This is the description for category 3.",
    parent_category_id: null // Top-level category
  },
  {
    name: "Category 4",
    description: "This is the description for category 4.",
    parent_category_id: null // Top-level category
  },
  {
    name: "Category 5",
    description: "This is the description for category 5.",
    parent_category_id: null // Top-level category
  }
];

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

    // Ensure unique index on name field
    await collection.createIndex({ name: 1 }, { unique: true });

    // Insert categories if they do not already exist
    for (const category of categories) {
      try {
        const existingCategory = await collection.findOne({ name: category.name });
        if (!existingCategory) {
          await collection.insertOne({
            _id: new ObjectId(),
            ...category
          });
          console.log(`Inserted category: ${category.name}`);
        } else {
          console.log(`Category with name ${category.name} already exists.`);
        }
      } catch (error) {
        console.error(`Error inserting category ${category.name}:`, error);
      }
    }

    client.close();

    return new Response(JSON.stringify({ message: 'Categories processed successfully' }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to connect to the database' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
