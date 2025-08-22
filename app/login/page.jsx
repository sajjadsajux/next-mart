"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Sign in to access your dashboard and manage your products</p>
        <button onClick={() => signIn("google", { callbackUrl: "/products" })} className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
          <img src="https://cdn-icons-png.flaticon.com/512/720/720255.png" alt="Google" className="w-6 h-6" />
          Sign in with Google
        </button>
        <p className="text-sm text-gray-500 mt-6">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
