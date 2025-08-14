import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreatorOS - Build Your Creator Empire",
  description: "The ultimate platform for creators to build, grow, and monetize their digital empire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CO</span>
                </div>
                <span className="text-2xl font-bold gradient-text">CreatorOS</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                <a href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</a>
                <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </a>
              </nav>
            </div>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CO</span>
                  </div>
                  <span className="text-2xl font-bold">CreatorOS</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Empowering creators to build, grow, and monetize their digital empire with cutting-edge tools and insights.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 CreatorOS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}