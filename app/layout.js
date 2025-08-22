// app/layout.jsx
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Mart",
  description: "Buy everything you want",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}  antialiased`}>
        <ClientLayout>
          {children} <ToastContainer></ToastContainer>
        </ClientLayout>
      </body>
    </html>
  );
}
