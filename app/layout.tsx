import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Arte Arte Arte.",
  description: "Soirées culturelles à Nice, Côte d'Azur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen bg-[#3C14FF] flex items-center justify-end">
          <img
            src="/artelogo.svg"
            alt="Arte Logo"
            className="w-screen sm:w-2/3 h-auto pl-8"
          />
        </div>

        <div className="h-screen grid grid-cols-1 sm:grid-cols-2 border-t-half border-b-half border-white">
          {/* Left Column (Image) */}
          <div className="flex items-center justify-center">
            <img
              src="/apero.png"
              alt="Image"
              className="w-full h-auto max-w-md" // Adjust size as needed
            />
          </div>

          {/* Right Column (Text) */}
          <div className="flex flex-col items-start justify-center px-8">
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

        <div className="h-screen grid grid-cols-1 sm:grid-cols-2">
          {/* Left Column (Text) */}
          <div className="flex flex-col items-start justify-center px-8">
            <h1 className="text-white text-4xl sm:text-6xl font-bold text-center sm:text-left mb-4">
              Share stories, and connect.
            </h1>
            <p className="text-xl text-white text-start sm:text-left">
              Art, music, design, and literature.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="flex items-center justify-center">
            <img
              src="/apero.png"
              alt="Image"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
