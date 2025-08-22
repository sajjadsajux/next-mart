import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} NEXT Mart. All rights reserved.</p>

        <div className="flex justify-center gap-6 mb-4">
          <Link href="/privacy" className="hover:text-blue-500 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-500 transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex justify-center gap-4 text-xl">
          <a href="#" className="hover:text-blue-600 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
