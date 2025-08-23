"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("🎉 Your message has been sent!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto py-20 px-6 min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">Contact Us</h1>
        <p className="mb-10 text-center text-gray-600 max-w-md mx-auto">Have questions or need help? Fill out the form below and we’ll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input type="email" placeholder="you@example.com" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Message</label>
            <textarea placeholder="Write your message here..." className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" rows={5} required></textarea>
          </div>

          <button type="submit" disabled={loading} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 disabled:opacity-60">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
