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

function ProductDetails({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1 className="p-6 text-red-500">Product not found!</h1>;
  }

  return (
    <div className="min-h-screen mt-14 p-7 flex flex-col items-center">
      <img
        src={product.img}
        alt={product.name}
        className="w-64 h-64 object-cover mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-4">${product.price}</p>
      <p className="text-gray-600 max-w-md text-center">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
