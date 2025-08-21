import Link from "next/link";

export default function ProductHighlights() {
  const products = [
    { id: 1, name: "Product 1", desc: "This is a great product.", price: 49.99 },
    { id: 2, name: "Product 2", desc: "This is a great product.", price: 59.99 },
    { id: 3, name: "Product 3", desc: "This is a great product.", price: 39.99 },
    { id: 4, name: "Product 4", desc: "This is a great product.", price: 29.99 },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow rounded p-4 text-center">
              <h3 className="font-bold text-xl mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.desc}</p>
              <p className="font-semibold mb-2">${product.price}</p>
              <Link href={`/products/${product.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
