"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") router.push("/login");
  if (!session) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const data = {
      name: form.name.value,
      description: form.description.value,
      price: form.price.value,
      image: form.image.value,
      category: form.category.value,
      stock: form.stock.value,
      brand: form.brand.value,
      condition: form.condition.value,
      uploadedBy: {
        email: session.user?.email,
        name: session.user?.name,
      },
      createdAt: new Date().toISOString(),
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

      toast.success("Product Uploaded Successfully !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
        transition: Bounce,
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 relative">
      {/* Fullscreen Overlay Spinner */}
      {loading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50">
          <svg className="animate-spin h-12 w-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>
      )}

      {/* Main Form */}
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">Add Product</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input type="text" name="name" placeholder="Product Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />

          <textarea name="description" placeholder="Description" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows={3} required />

          <div className="flex flex-col md:flex-row gap-4">
            <input type="number" name="price" placeholder="Price" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="number" name="stock" placeholder="Stock" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input type="url" name="image" placeholder="Image URL" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <input type="text" name="category" placeholder="Category" className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>

          <input type="text" name="brand" placeholder="Brand" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />

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

          <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
