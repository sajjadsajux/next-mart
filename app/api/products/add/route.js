import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const db = await connectDB();
    const data = await req.json(); // full data from frontend

    // Validate required fields
    if (!data.name || !data.description || !data.price) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // Ensure numeric fields are properly typed
    data.price = parseFloat(data.price);
    data.stock = data.stock ? parseInt(data.stock) : 0;

    // Ensure createdAt is a Date object
    data.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();

    // Insert full data object into MongoDB
    const result = await db.collection("products").insertOne(data);

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
  }
}
