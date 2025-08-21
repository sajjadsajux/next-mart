"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button onClick={() => signIn("google", { callbackUrl: "/products" })} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Sign in with Google
      </button>
    </div>
  );
}
