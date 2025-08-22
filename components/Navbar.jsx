"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="navbar  container mx-auto">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/products">Products</Link>
            </li>
            {session && (
              <li>
                <a>Dashboard</a>
                <ul className="p-2">
                  {/* <li>
                    <Link href="/dashboard">Overview</Link>
                  </li> */}
                  <li>
                    <Link href="/dashboard/add-product">Add Product</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/my-products">My Products</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/orders">Orders</Link>
                  </li>
                </ul>
              </li>
            )}
            <div className="divider"></div>
            {session ? (
              <>
                <li>
                  <span className="text-sm opacity-70">Welcome, {session.user?.name?.split(" ")[0] || "User"}</span>
                </li>
                <li>
                  <button onClick={() => signOut({ callbackUrl: "/" })} className="text-error">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl">
          NEXT MART
        </Link>
      </div>
      {/* desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/products">Products</Link>
          </li>

          {mounted && session && (
            <li tabIndex={0} className="dropdown dropdown-hover relative">
              <button className=" ">Dashboard</button>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-1">
                <li>
                  <Link href="/dashboard">Overview</Link>
                </li>
                <li>
                  <Link href="/dashboard/add-product">Add Product</Link>
                </li>
                <li>
                  <Link href="/dashboard/my-products">My Products</Link>
                </li>
                <li>
                  <Link href="/dashboard/orders">Orders</Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {session ? (
          <div className="flex items-center gap-3">
            <span className="text-sm opacity-70 hidden md:block">Welcome, {session.user?.name?.split(" ")[0] || "User"}</span>
            <button onClick={() => signOut({ callbackUrl: "/" })} className="btn btn-outline btn-error btn-sm">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
