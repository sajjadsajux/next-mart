"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") router.push("/login");
  if (!session) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      description: form.description.value,
      price: form.price.value,
      image: form.image.value,
      category: form.category.value,
      stock: form.stock.value,
      brand: form.brand.value,
      condition: form.condition.value, // new field
      uploadedBy: {
        email: session.user?.email,
        name: session.user?.name,
      },
      createdAt: new Date().toISOString(), // ISO format
      status: "active",
    };

    try {
      const res = await fetch("/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Failed to add product");

      alert("Product added successfully");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Add Product</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md flex flex-col gap-6">
        {/* Product Name */}
        <input type="text" name="name" placeholder="Product Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />

        {/* Description */}
        <textarea name="description" placeholder="Description" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows={3} required />

        {/* Price & Stock in a row on large screens */}
        <div className="flex flex-col md:flex-row gap-4">
          <input type="number" name="price" placeholder="Price" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="number" name="stock" placeholder="Stock" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>

        {/* Image & Category */}
        <div className="flex flex-col md:flex-row gap-4">
          <input type="url" name="image" placeholder="Image URL" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="text" name="category" placeholder="Category" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        </div>

        {/* Brand */}
        <input type="text" name="brand" placeholder="Brand" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />

        {/* Condition */}
        <div>
          <p className="font-medium mb-2 text-gray-700">Condition:</p>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="condition" value="New" required className="accent-blue-500" />
              New
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="condition" value="Used" className="accent-blue-500" />
              Used
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="condition" value="Refurbished" className="accent-blue-500" />
              Refurbished
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Add Product
        </button>
      </form>
    </div>
  );
}
