// components/ClientLayout.jsx
"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SessionProvider>
  );
}
