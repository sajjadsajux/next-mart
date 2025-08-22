import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectDB();
    const products = await db
      .collection("products")
      .find()
      .sort({ createdAt: -1 }) // latest first
      .limit(8) // only top 8
      .toArray();

    // Convert _id to string for Next.js
    const formatted = products.map((p) => ({
      _id: p._id.toString(),
      name: p.name,
      description: p.description,
      price: p.price,
      image: p.image || "",
      category: p.category || "",
      stock: p.stock || 0,
    }));

    return new Response(JSON.stringify(formatted), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
