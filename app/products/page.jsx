import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Product 1", desc: "This is a great product.", price: 49.99 },
    { id: 2, name: "Product 2", desc: "This is a great product.", price: 59.99 },
    { id: 3, name: "Product 3", desc: "This is a great product.", price: 39.99 },
    { id: 4, name: "Product 4", desc: "This is a great product.", price: 29.99 },
  ];

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
