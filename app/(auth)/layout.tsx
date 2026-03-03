import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Matrix Real Estate| Sign In",
  description: "Portfolio Project",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f0eee9] text-gray-900">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
