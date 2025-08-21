import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg flex flex-col justify-between">
      <div>
        <Image
          src={product.image || "/placeholder.png"} // fallback if empty
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-green-600 font-semibold">${product.price}</p>
      </div>
    </div>
  );
}
