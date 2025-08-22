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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div>
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-sm" />
            ) : (
              <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-6xl">📦</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 text-yellow-500">
                <span>★★★★☆</span>
                <span className="text-sm text-gray-500">(4.2 • 127 reviews)</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                Brand: <span className="text-gray-800">{product.brand}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Condition: <span className="text-gray-800">{product.condition}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Stock: <span className="text-gray-800">{product.stock}</span>
              </p>
            </div>

            {/* Price */}
            <div>
              <p className="text-gray-500 text-sm">Price</p>
              <p className="text-3xl font-bold text-green-600">${product.price}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-1">🚚</div>
                <p className="font-medium text-gray-800">Free Shipping</p>
                <p className="text-sm text-gray-500">On orders over $50</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-1">🔒</div>
                <p className="font-medium text-gray-800">Secure Payment</p>
                <p className="text-sm text-gray-500">100% protected</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-1">↩️</div>
                <p className="font-medium text-gray-800">Easy Returns</p>
                <p className="text-sm text-gray-500">30-day policy</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button className="px-3 py-1 hover:bg-gray-100">-</button>
                  <span className="px-5 py-1 border-l border-r">1</span>
                  <button className="px-3 py-1 hover:bg-gray-100">+</button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">🛒 Add to Cart</button>
                <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">❤️ Wishlist</button>
              </div>

              <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">⚡ Buy Now</button>
            </div>

            {/* Uploader Info */}
            {/* <p className="text-gray-500 text-sm mt-4">
              Uploaded by:{" "}
              <span className="text-gray-800">
                {product.uploadedBy?.name} ({product.uploadedBy?.email})
              </span>
            </p> */}
            <p className="text-gray-400 text-xs">Uploaded at: {new Date(product.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
