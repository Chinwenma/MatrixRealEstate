"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#E9EBF8] py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-rose-600">Matrix</span>Estate
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Crafting Seamless Real Estate Experiences
            </p>

            <div className="mt-4 flex space-x-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-700 hover:text-rose-600 transition" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-700 hover:text-rose-600 transition" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-700 hover:text-rose-600 transition" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-rose-600 transition" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-rose-600">About</Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-rose-600">Properties</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-600">Contant</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-rose-600">FAQ</Link></li>
              <li><Link href="#" className="hover:text-rose-600">Career</Link></li>
              <li><Link href="#" className="hover:text-rose-600">Videos</Link></li>
              <li><Link href="/properties" className="hover:text-rose-600">Our Homes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="mailto:hi@propertypulse.com" className="hover:text-rose-600">
                  matrixestate@sample.com
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-600">Twitter Support</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2023 Hello, PropertyPulse</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link href="#" className="hover:text-rose-600">Privacy</Link>
            <Link href="#" className="hover:text-rose-600">Terms of Agreement</Link>
            <Link href="#" className="hover:text-rose-600">Licenses</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
