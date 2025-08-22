"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate form submit (you can replace with API call later)
    setTimeout(() => {
      setLoading(false);
      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto py-16 px-6 min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Contact Us</h1>
        <p className="mb-8 text-center text-gray-600">Have questions or need help? Fill out the form below and we’ll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" required />
          <textarea placeholder="Your Message" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" rows={5} required></textarea>

          <button type="submit" disabled={loading} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition disabled:opacity-60">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
