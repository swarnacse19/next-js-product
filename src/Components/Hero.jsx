"use client"
import React from "react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[670px]">
      {/* Background Image */}
      <Image
        src="/hero.jpeg"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-6 md:px-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-xl">
          Welcome to MyShop
        </h1>
        <p className="text-lg md:text-2xl text-red-200 mb-6 max-w-lg">
          Discover amazing products at the best prices
        </p>
        <a
          href="/products"
          className="bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition font-semibold"
        >
          Explore Products
        </a>
      </div>
    </section>
  )
}
