import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/footer/footer";
import Hero from "@/app/components/home/Hero";
import Navbar from "./components/navbar/navbar";


export const metadata: Metadata = {
  title: "Matrix Real Estate",
  description: " Find your dream home with Matrix Real Estate - Your trusted partner in property buying, selling, and renting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
