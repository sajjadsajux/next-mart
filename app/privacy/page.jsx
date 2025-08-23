export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-center text-gray-600 mb-10">
          At <span className="font-semibold text-pink-600">Next MART</span>, your privacy matters to us. This policy explains how we handle your personal information.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📌 Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect your <span className="font-medium">name, email address, and order details</span>
              to provide better shopping experiences and customer support.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">⚙️ How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">Your data is used to process orders, improve our website, personalize recommendations, and keep you updated about offers.</p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔒 Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">We use industry-standard security measures to protect your personal information. However, no method of transmission is 100% secure, so we cannot guarantee absolute safety.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t pt-6 text-center">
          <p className="text-gray-500 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600 mt-2">
            Have questions? Contact us at{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              support@nextmart.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
