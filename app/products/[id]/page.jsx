"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

// For now, mock data
const products = [
  { id: 1, name: "Product 1", desc: "This is a great product.", price: 49.99 },
  { id: 2, name: "Product 2", desc: "This is a great product.", price: 59.99 },
  { id: 3, name: "Product 3", desc: "This is a great product.", price: 39.99 },
  { id: 4, name: "Product 4", desc: "This is a great product.", price: 29.99 },
];

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = parseInt(params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.desc}</p>
        <p className="text-2xl font-semibold mb-6">${product.price}</p>
        <Link href="/products">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Back to Products</button>
        </Link>
      </div>
    </div>
  );
}
