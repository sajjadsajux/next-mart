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
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <input type="text" name="name" placeholder="Product Name" className="p-2 border rounded" required />
        <input type="text" name="description" placeholder="Description" className="p-2 border rounded" required />
        <input type="number" name="price" placeholder="Price" className="p-2 border rounded" required />
        <input type="text" name="image" placeholder="Image URL" className="p-2 border rounded" />
        <input type="text" name="category" placeholder="Category" className="p-2 border rounded" />
        <input type="number" name="stock" placeholder="Stock" className="p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Add Product
        </button>
      </form>
    </div>
  );
}
