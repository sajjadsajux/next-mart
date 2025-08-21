// app/products/[id]/page.jsx
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function ProductPage({ params }) {
  const db = await connectDB();
  const { id } = params;

  // Validate the ID
  if (!ObjectId.isValid(id)) {
    return <p className="text-center text-xl mt-20">Invalid product ID</p>;
  }

  // find product by its MongoDB ObjectId
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <p className="text-center text-xl mt-20">Product not found</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <img src={product.image} alt={product.name} className="w-96 h-96 object-cover mb-6 rounded" />
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="mb-4 text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 mb-6">${product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
    </div>
  );
}
