import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";


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
        className=" scroll-smooth"
        
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
