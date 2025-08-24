"use client"
import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">MyShop</h2>
            <p className="text-gray-400">
              Your one-stop shop for amazing products at the best prices.  
              Quality and satisfaction guaranteed.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/products" className="hover:text-white">Products</Link>
              </li>
              <li className="mb-2">
                <Link href="/login" className="hover:text-white">Login</Link>
              </li>
              <li className="mb-2">
                <Link href="/dashboard/add-product" className="hover:text-white">Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p>Email: support@myshop.com</p>
            <p>Phone: +880 1234 567890</p>
            <p>Address: Barishal, Bangladesh</p>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
