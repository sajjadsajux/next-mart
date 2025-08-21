// app/components/ProductHighlights.jsx
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";

export default async function ProductHighlights() {
  const db = await connectDB();
  const products = await db
    .collection("products")
    .find()
    .sort({ createdAt: -1 }) // latest first
    .limit(4) // only 4 products
    .toArray();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id.toString()} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
              {product.image ? <img src={product.image} alt={product.name} className="h-48 w-full object-cover" /> : <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <p className="font-bold text-lg text-green-600">${product.price}</p>
                </div>
                <Link href={`/products/${product._id.toString()}`}>
                  <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 w-full">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
