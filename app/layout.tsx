import "./globals.css";
import React from "react";

export const metadata = {
  title: "CreatorOS",
  description: "Operate and scale your creator business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container h-14 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg">CreatorOS</a>
            <nav className="flex gap-5 text-sm text-gray-600">
              <a href="/join" className="hover:text-black">Join</a>
              <a href="/features" className="hover:text-black">Features</a>
              <a href="/pricing" className="hover:text-black">Pricing</a>
            </nav>
          </div>
        </header>
        <main className="flex-1 container py-10">
          {children}
        </main>
        <footer className="border-t">
          <div className="container py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} CreatorOS. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
