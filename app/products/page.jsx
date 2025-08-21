import ProductCard from "../../components/ProductCard";
import { connectDB } from "@/lib/mongodb";

export default async function ProductsPage() {
  const db = await connectDB();
  const products = await db.collection("products").find().toArray();

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={{
                id: product._id?.toString(), // convert ObjectId to string
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
