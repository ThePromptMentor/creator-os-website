
import "./globals.css";
import React from "react";

export const metadata = {
  title: "CreatorOS - Scale Your Creator Business",
  description: "The all-in-one platform for creators to manage, grow, and monetize their content. Build your creator empire with powerful tools and analytics.",
  keywords: "creator platform, content management, creator tools, monetization, analytics, creator economy",
  openGraph: {
    title: "CreatorOS - Scale Your Creator Business",
    description: "The all-in-one platform for creators to manage, grow, and monetize their content.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            svg.w-6, svg.text-blue-600, svg.text-purple-600, svg.text-green-600 {
              width: 24px !important; 
              height: 24px !important;
              max-width: 24px !important; 
              max-height: 24px !important;
            }
            .w-12 {
              width: 48px !important; 
              height: 48px !important;
              display: flex !important; 
              align-items: center !important;
              justify-content: center !important;
            }
          `}
        </style>
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
          <div className="container h-16 flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CO</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CreatorOS
              </span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="/features" className="hover:text-blue-600 transition-colors duration-200">
                Features
              </a>
              <a href="/pricing" className="hover:text-blue-600 transition-colors duration-200">
                Pricing
              </a>
              <a href="/about" className="hover:text-blue-600 transition-colors duration-200">
                About
              </a>
              <a href="/contact" className="hover:text-blue-600 transition-colors duration-200">
                Contact
              </a>
              <div className="h-4 w-px bg-gray-300"></div>
              <a href="/login" className="hover:text-blue-600 transition-colors duration-200">
                Login
              </a>
              <a href="/join" className="btn-primary !px-6 !py-2 !text-sm">
                Get Started
              </a>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CO</span>
                  </div>
                  <span className="font-bold text-xl text-white">CreatorOS</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering creators worldwide with the tools and insights needed to build successful digital businesses.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Product */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="/integrations" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="/api" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="/guides" className="hover:text-white transition-colors">Guides</a></li>
                  <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/press" className="hover:text-white transition-colors">Press</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} CreatorOS. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
