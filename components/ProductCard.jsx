import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-500 flex flex-col justify-between">
      <div>
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image src={product.image || "/placeholder.png"} alt={product.name} width={300} height={200} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        </div>

        <h2 className="text-xl font-bold mb-2 ">{product.name}</h2>

        <p className="text-gray-800 mb-2">{product.description}</p>

        <p className="text-green-600 font-semibold text-xl">${product.price}</p>
      </div>

      <div className="mt-4">
        <Link href={`/products/${product.id}`}>
          <button className="w-full group/btn relative px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-300/50">
            <span className="relative z-10 font-semibold">Details</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </Link>
      </div>
    </div>
  );
}
