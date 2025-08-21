import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const db = await connectDB();
    const body = await req.json();

    const { name, description, price, image, category, stock } = body;

    if (!name || !description || !price) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const product = {
      name,
      description,
      price: parseFloat(price),
      image: image || "",
      category: category || "",
      stock: stock ? parseInt(stock) : 0,
      createdAt: new Date(),
    };

    const result = await db.collection("products").insertOne(product);

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
  }
}
