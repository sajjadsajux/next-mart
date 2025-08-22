"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products uploaded by logged-in user
  useEffect(() => {
    if (!session) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products?uploadedBy=${session.user.email}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [session]);

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!session) return <p className="p-6">Please login to see your products.</p>;
  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Products</h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No products uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition">
                {/* Image */}
                <div className="mb-4">{product.image ? <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" /> : <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-4xl rounded-xl">📦</div>}</div>

                {/* Product Info */}
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <p className="text-green-600 font-bold text-lg">${product.price}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-3">
                  <Link href={`/products/${product._id}`} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition">
                    View
                  </Link>
                  <button onClick={() => handleDelete(product._id)} className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
