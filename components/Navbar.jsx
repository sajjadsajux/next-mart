"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <div className="text-xl font-bold">
        <Link href="/">Next MART</Link>
      </div>

      <div className="flex gap-4">
        <Link href="/products">Products</Link>

        {session ? (
          <>
            <Link href="/dashboard/add-product">Add Product</Link>
            <button onClick={() => signOut({ callbackUrl: "/" })} className="bg-red-500 text-white px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
