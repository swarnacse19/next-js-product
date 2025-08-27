"use client"
import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 text-xl font-bold text-red-800">
              <Link href="/">MyShop</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-red-800">
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-red-800"
              >
                Products
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-red-800">
                Login
              </Link>
              <Link
                href="/dashboard/add-product"
                className="text-gray-700 hover:text-red-800"
              >
                Dashboard
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-red-800 focus:outline-none"
              >
                {/* Icon */}
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-3 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-red-800">
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-red-800"
            >
              Products
            </Link>
            <Link
              href="/login"
              className="block text-gray-700 hover:text-red-800"
            >
              Login
            </Link>
            <Link
              href="/add-product"
              className="block text-gray-700 hover:text-red-800"
            >
              Add Product
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
