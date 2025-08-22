"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/latest")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Featured Products</h2>
          <p className="text-center text-gray-600">Check out our latest products handpicked for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col overflow-hidden">
              {/* Image */}
              <div className="relative">
                {product.image ? <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-105" /> : <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-4xl">📦</div>}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                <p className="font-bold text-lg text-green-600 mb-4">${product.price}</p>

                {/* Button */}
                <Link href={`/products/${product._id}`} className="mt-auto">
                  <button className="w-full px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl hover:scale-105 hover:shadow-lg focus:outline-none">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
