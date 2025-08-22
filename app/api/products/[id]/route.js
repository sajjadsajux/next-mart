import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
  try {
    const db = await connectDB();
    const { id } = params; // product _id

    const result = await db.collection("products").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Product deleted" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to delete product" }), { status: 500 });
  }
}
