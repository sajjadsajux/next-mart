export default function TermsPage() {
  return (
    <div className=" py-16 px-4 min-h-screen bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-center mb-12">Terms of Service</h1>
        <p className="mb-4 text-gray-600">By using Next MART, you agree to the following terms and conditions.</p>
        <h2 className="text-xl font-semibold mb-2">Use of Our Services</h2>
        <p className="mb-4 text-gray-600">You agree not to misuse our services or violate any laws while using our platform.</p>
        <h2 className="text-xl font-semibold mb-2">Purchases</h2>
        <p className="mb-4 text-gray-600">All purchases made through Next MART are subject to product availability and our refund policy.</p>
        <p className="text-gray-500">Effective date: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
