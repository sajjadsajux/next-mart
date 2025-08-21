import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <h3 className="font-bold text-xl mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.desc}</p>
      <p className="font-semibold mb-2">${product.price}</p>
      <Link href={`/products/${product.id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Details</button>
      </Link>
    </div>
  );
}
