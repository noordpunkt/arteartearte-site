"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useState, useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isInView, setIsInView] = useState(false);
  const [bubbleText, setBubbleText] = useState("Billets");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const triggerPosition = 200; // Adjust this based on when the animation should start
      if (scrollPosition > triggerPosition) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text toggle effect for the bubble
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbleText((prevText) => (prevText === "Billets" ? "Tickets" : "Billets"));
    }, 6000); // 6-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Hero Section */}
        <div className="h-screen bg-[#3C14FF] flex items-center justify-end">
          {/* "Billets" Bubble */}
          <a
            href="https://www.eventbrite.fr/e/apero-culturel-arte-arte-arte-tickets-1064830670199?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="fixed top-4 left-4 w-44 h-44 flex items-center justify-center text-white font-bold text-2xl z-50"
              style={{
                backgroundImage: "url('/billets.svg')", // Path to your SVG file
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
              }}
            >
              {bubbleText}
            </div>
          </a>
          <img
            src="/artelogo.svg"
            alt="Arte Logo"
            className="w-screen sm:w-2/3 h-auto pl-8"
          />
        </div>

        {/* Art and Music Section */}
        <div className="h-1/2 sm:h-screen grid grid-cols-1 sm:grid-cols-2">
          {/* Left Column (Text) */}
          <div className="flex flex-col items-start justify-center px-8">
            <h1 className="text-white text-4xl sm:text-6xl font-bold text-center sm:text-left mt-12">
              Art & Beats.
            </h1>
            <p className="text-xl text-white text-start sm:text-left">
              Ambient music and art performances & talks.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="flex items-center justify-center">
            <img
              src="/disco.svg"
              alt="Music"
              className="w-full p-12 animate-spin-slow"
            />
          </div>
        </div>

        {/* Apero Section */}
        <div className="h-1/2 sm:h-screen grid grid-cols-1 sm:grid-cols-2 bg-[#FF63DD]">
          {/* Left Column (Image with Animation) */}
          <div
            className={`flex items-center justify-center transition-transform duration-700 ${isInView ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <img
              src="/vin.svg"
              alt="Apero"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="flex flex-col items-start justify-center px-8 pb-12">
            <h1 className="text-white text-4xl sm:text-6xl font-bold text-center sm:text-left mb-4">
              Apéro au cœur de Nice.
            </h1>
            <p className="text-xl text-white text-start sm:text-left">
              Assiette de Fromages et Charcuteries.
              <br />
              Buvette sur place.
            </p>
          </div>
        </div>

        {/* Connections Section */}
        <div className="h-screen flex flex-col bg-[#15121e] justify-center items-center">
          <div className="flex flex-col sm:flex-row w-full sm:w-1/2 p-12 items-start">
            {/* Plug Icon */}
            <div className="mb-6">
              <img
                src="/connections.svg"
                alt="connections"
                className="w-16 mr-6 sm:w-44"
              />
            </div>
            {/* Text Section */}
            <div>
              <h1 className="text-white text-4xl sm:text-6xl font-bold text-left sm:text-left mb-4">
                Make connections.
              </h1>
              <p className="text-xl text-white text-start sm:text-left">
                Un rendez-vous mensuel au cœur de Nice où les artistes se réunissent pour
                se connecter, partager et s&apos;inspirer. A monthly gathering in the
                heart of Nice where artists come together to connect, share, and inspire.
              </p>
            </div>
          </div>
        
        </div>
        {children}
      {/* Footer */}
      <footer className="w-full bg-[#0f0e18] text-center text-white py-24">
        <p className="text-sm sm:text-base">
          © Copyright 2024/2025. Arte Arte Arte. 45 Avenue Georges Clemenceau, Nice, France.
        </p>
      </footer>
      </body>
    </html>
  );
}