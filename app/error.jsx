"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <html>
      <body className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
        <p className="text-gray-700 mb-6">We’re sorry, an unexpected error occurred.</p>
        <div className="flex gap-4">
          <button onClick={() => reset()} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Try Again
          </button>
          <button onClick={() => router.push("/")} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Go Home
          </button>
        </div>
      </body>
    </html>
  );
}
