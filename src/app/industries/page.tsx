"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Coffee, Cpu, Pill, Store } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "E-commerce Packaging",
      description: "Durable, transit-safe corrugated solutions that protect goods from warehouse to doorstep. We understand the high-volume and high-durability needs of modern e-commerce.",
      icon: <ShoppingCart className="h-12 w-12 text-saffron" />,
    },
    {
      name: "FMCG & Food Industry",
      description: "Clean, reliable packaging materials suitable for Fast-Moving Consumer Goods. Our paper ensures your products remain safe and presentable on retail shelves.",
      icon: <Coffee className="h-12 w-12 text-saffron" />,
    },
    {
      name: "Electronics",
      description: "High-strength fluting and liners designed to provide maximum shock absorption for sensitive electronic devices and appliances during transit.",
      icon: <Cpu className="h-12 w-12 text-saffron" />,
    },
    {
      name: "Pharma",
      description: "Consistent and precise packaging materials that meet the strict compliance and safety standards required by the pharmaceutical industry.",
      icon: <Pill className="h-12 w-12 text-saffron" />,
    },
    {
      name: "Retail Boxes",
      description: "Premium finish liner paper that offers excellent printability, making your custom retail boxes stand out while maintaining structural integrity.",
      icon: <Store className="h-12 w-12 text-saffron" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Page Header */}
      <div className="bg-krishna-blue py-14 px-4 text-center relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-white" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing tailored corrugated paper solutions to power the supply chains of diverse sectors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-saffron group-hover:text-white transition-colors duration-300 [&>svg]:group-hover:text-white">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold text-krishna-blue mb-2">{industry.name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
