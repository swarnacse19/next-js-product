import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    img: "/wirelessh.jpeg",
    price: 120,
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    img: "/smartw.jpeg",
    price: 250,
    description: "A stylish smartwatch with fitness tracking and notifications."
  },
  {
    id: 3,
    name: "Gaming Mouse",
    img: "/mouse.jpg",
    price: 60,
    description: "Ergonomic gaming mouse with customizable RGB lighting."
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    img: "/keyboard.jpeg",
    price: 150,
    description: "Durable mechanical keyboard with blue switches."
  },
  {
    id: 5,
    name: "4K Monitor",
    img: "/monitor.jpg",
    price: 400,
    description: "Ultra HD 4K monitor with stunning color accuracy."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    img: "/speaker.jpeg",
    price: 90,
    description: "Portable Bluetooth speaker with deep bass and long battery life."
  }
];


function Highlights() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Top Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-40 h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700 font-medium mb-2">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
