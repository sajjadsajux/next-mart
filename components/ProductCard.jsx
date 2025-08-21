import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg flex flex-col justify-between">
      <div>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-green-600 font-semibold">${product.price}</p>
      </div>
      <Link href={`/products/${product.id}`}>Details</Link>
    </div>
  );
}
