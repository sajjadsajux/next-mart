export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <p className="mb-4 text-gray-600">Have questions or need help? Reach out to us anytime.</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" required />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" required />
        <textarea placeholder="Your Message" className="p-2 border rounded" rows={4} required></textarea>
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
