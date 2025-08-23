export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-pink-600">Next MART</span> — your trusted online store. We’re passionate about providing quality products at affordable prices, making online shopping simple and enjoyable for everyone.
        </p>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎯 Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">To create a seamless shopping experience with a wide range of products, secure payments, and reliable delivery — all in one place.</p>
        </div>

        {/* Values */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">💡 Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Customer-first approach</li>
            <li>Quality and reliability</li>
            <li>Transparency and trust</li>
            <li>Continuous improvement</li>
          </ul>
        </div>

        {/* Story */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📖 Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in <span className="font-semibold">2025</span>, Next MART started with a simple idea — making online shopping accessible and enjoyable for everyone. Today, we continue to grow with our amazing community of customers and partners.
          </p>
        </div>

        {/* Footer Thanks */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-gray-700">
            Thank you for choosing <span className="text-pink-600">Next MART</span> 🚀
          </p>
          <p className="text-sm text-gray-500 mt-2">Together, let’s make shopping smarter and simpler.</p>
        </div>
      </div>
    </div>
  );
}
