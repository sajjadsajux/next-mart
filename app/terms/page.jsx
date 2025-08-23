export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Terms of Service</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          By using <span className="font-semibold text-pink-600">Next MART</span>, you agree to the following terms and conditions. Please read them carefully before using our services.
        </p>

        {/* Use of Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📌 Use of Our Services</h2>
          <p className="text-gray-600 leading-relaxed">You agree not to misuse our services, attempt unauthorized access, or violate any laws while using our platform. Misconduct may result in suspension or termination of your account.</p>
        </div>

        {/* Purchases */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛒 Purchases</h2>
          <p className="text-gray-600 leading-relaxed">All purchases made through Next MART are subject to product availability, accurate pricing, and our refund policy. We reserve the right to limit or cancel orders if necessary.</p>
        </div>

        {/* Disclaimer */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">⚖️ Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed">While we strive to provide accurate and updated information, Next MART is not responsible for any damages caused by reliance on content or third-party services.</p>
        </div>

        {/* Effective Date */}
        <p className="text-gray-500 text-center mt-8">Effective date: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
