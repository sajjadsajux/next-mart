import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SciC Store</h1>
        <p className="text-lg md:text-xl mb-6">Your one-stop shop for amazing products!</p>
        <Link href="/products">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200">Explore Products</button>
        </Link>
      </div>
    </section>
  );
}
