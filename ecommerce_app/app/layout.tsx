import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";


import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CartProvider } from "../contexts/cartContexts";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <Head>
        {/* Add FontAwesome CDN link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-7b4cfe29d946345451b1c274f3c7adf8ecdc6ad7a6c47e9f80e5c91a90d420ee8"
          crossOrigin="anonymous"
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <div className="grid grid-rows-[auto] gap-20 min-h-screen w-full">
            {/* Row 1: Navbar */}
            <div className="row-span-1 bg-white w-full">
              <Navbar />
            </div>
            
            {/* Row 2: Main content */}
            <div className="row-span-1 bg-white w-full">
              {children}
            </div>
            
            {/* Row 3: Footer */}
            <div className="row-span-1 bg-gray-200 z-20">
              <Footer />
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
