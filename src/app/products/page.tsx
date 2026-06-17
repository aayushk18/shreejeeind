"use client";

import { motion } from "framer-motion";
import { Download, PackageOpen, Layers } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "Liner Paper",
      icon: <PackageOpen className="h-10 w-10 text-saffron" />,
      description: "Our Liner Paper is manufactured to provide superior burst strength and a smooth finish, making it the perfect outer layer for corrugated boxes.",
      features: [
        "High bursting strength (BF)",
        "Excellent printability",
        "Consistent GSM range",
        "Moisture resistant options available",
      ],
      specs: "Available in 100 to 250 GSM. Custom roll sizes on request.",
    },
    {
      title: "Fluted Paper",
      icon: <Layers className="h-10 w-10 text-saffron" />,
      description: "The core strength of any corrugated box. Our Fluted Paper offers exceptional crush resistance and runnability on high-speed corrugators.",
      features: [
        "Optimal compression strength",
        "Uniform thickness",
        "Compatible with B, C, and E flute profiles",
        "High ring crush test (RCT) values",
      ],
      specs: "Available in 80 to 150 GSM. Custom dimensions available.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          High-performance corrugated paper solutions designed for strength and durability.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              {/* Decorative background shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-krishna-blue/5 to-transparent rounded-bl-full"></div>
              
              <div className="mb-6 bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center relative z-10">
                {product.icon}
              </div>
              
              <h2 className="text-3xl font-bold text-krishna-blue mb-4">{product.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-saffron rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-semibold text-gray-900">Specifications:</span>{" "}
                <span className="text-gray-600">{product.specs}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Catalogue Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-krishna-blue to-krishna-blue-light rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Need More Technical Details?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Download our comprehensive product catalogue to explore full specifications, testing parameters, and compliance details.
            </p>
            <button className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-black/20 hover:scale-105 cursor-pointer">
              <Download className="h-5 w-5" />
              Download PDF Catalogue
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
