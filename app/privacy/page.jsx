export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="mb-4 text-gray-600">At Next MART, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.</p>
      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4 text-gray-600">We may collect your name, email, and order details to provide better services.</p>
      <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
      <p className="mb-4 text-gray-600">Your information is used for processing orders, improving our website, and sending updates.</p>
      <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
