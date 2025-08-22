"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlay */}
        <div
          className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.4) 0%, transparent 60%)`,
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-lg opacity-20 animate-bounce transform rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-indigo-400 opacity-25 transform rotate-12 animate-spin" style={{ animationDuration: "10s" }}></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center container mx-auto">
          {/* Main Heading */}
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">NEXT Mart</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
              Discover the <span className="text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text font-semibold">future of shopping</span> with cutting-edge products that transform your lifestyle
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Link href="/products">
                <button className="group relative px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-300">
                  <span className="relative z-10">Explore Products</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
              </Link>

              <Link href="/about">
                <button className="group px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:border-white/60 focus:outline-none focus:ring-4 focus:ring-white/20">
                  Learn More
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Feature highlights */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="w-8 h-8 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">🚚</div>
                <h3 className="text-lg font-semibold mb-2 text-white">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">Lightning-fast shipping worldwide</p>
              </div>

              <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="w-8 h-8 mx-auto mb-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">🛡️</div>
                <h3 className="text-lg font-semibold mb-2 text-white">Secure Shopping</h3>
                <p className="text-gray-300 text-sm">Your data is protected</p>
              </div>

              <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="w-8 h-8 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">⭐</div>
                <h3 className="text-lg font-semibold mb-2 text-white">Premium Quality</h3>
                <p className="text-gray-300 text-sm">Only the best products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
}
