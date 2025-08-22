export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6 max-w-md">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>

      <a href="/" className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow hover:bg-green-700 transition">
        Back to Home
      </a>
    </div>
  );
}
