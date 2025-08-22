import { connectDB } from "@/lib/mongodb";

export async function GET(req) {
  try {
    const db = await connectDB();
    const url = new URL(req.url);
    const uploadedBy = url.searchParams.get("uploadedBy");

    if (!uploadedBy) {
      return new Response(JSON.stringify({ error: "Missing uploadedBy parameter" }), { status: 400 });
    }

    const products = await db.collection("products").find({ "uploadedBy.email": uploadedBy }).sort({ createdAt: -1 }).toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
}
