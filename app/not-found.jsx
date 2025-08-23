import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-7xl font-extrabold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">Oops! Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">Sorry, the page you’re looking for doesn’t exist or may have been moved.</p>

      <div className="flex gap-4">
        <Link href="/" className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow hover:scale-105 transition">
          🏠 Back to Home
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-gray-200 text-gray-800 text-lg rounded-lg shadow hover:scale-105 transition">
          📩 Contact Support
        </Link>
      </div>
    </div>
  );
}
