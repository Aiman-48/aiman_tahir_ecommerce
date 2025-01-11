import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CartProvider } from "@/contexts/CartContexts";

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
