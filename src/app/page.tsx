"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Truck, ShieldCheck, CheckCircle } from "lucide-react";

export default function Home() {
  const highlights = [
    {
      title: "Liner Paper",
      description: "Premium quality liner boards with high burst strength and perfect finish.",
      icon: <Package className="h-8 w-8 text-saffron" />,
    },
    {
      title: "Fluted Paper",
      description: "Excellent runnability and compression strength for sturdy corrugated boxes.",
      icon: <CheckCircle className="h-8 w-8 text-saffron" />,
    },
    {
      title: "Bulk Orders",
      description: "Capable of handling high-volume requirements with consistent quality.",
      icon: <ShieldCheck className="h-8 w-8 text-saffron" />,
    },
    {
      title: "Fast Delivery",
      description: "Timely dispatch across NCR and India to keep your business moving.",
      icon: <Truck className="h-8 w-8 text-saffron" />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-krishna-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-saffron/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-krishna-blue font-semibold text-sm mb-6 border border-blue-100">
                Welcome to Shree Jee Industries
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Quality Corrugation, <br />
                <span className="text-krishna-blue">Built for Every Business</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Your trusted manufacturing partner for premium liner and fluted paper in Noida. We deliver strength, reliability, and excellence in every roll.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-saffron hover:bg-saffron-light text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg shadow-saffron/30 hover:shadow-xl hover:scale-105"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-gray-200 text-gray-700 hover:border-krishna-blue hover:text-krishna-blue px-8 py-4 rounded-full font-bold text-lg text-center transition-all hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square bg-gradient-to-tr from-krishna-blue/10 to-saffron/10 rounded-[2rem] border border-white shadow-2xl overflow-hidden relative flex items-center justify-center p-12">
                {/* A decorative abstract representation of paper rolls */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 rotate-12 opacity-80">
                  <div className="w-24 h-[120%] bg-white shadow-xl rounded-full border border-gray-100"></div>
                  <div className="w-24 h-[120%] bg-gray-50 shadow-xl rounded-full border border-gray-100 -mt-12"></div>
                  <div className="w-24 h-[120%] bg-krishna-blue/5 shadow-xl rounded-full border border-gray-100 -mt-24"></div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg relative z-10 border border-white max-w-sm text-center">
                  <h3 className="text-2xl font-bold text-krishna-blue mb-2">Premium Quality</h3>
                  <p className="text-gray-600">Manufacturing top-grade corrugated materials for diverse industrial needs.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <div className="w-24 h-1 bg-saffron mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-14 bg-krishna-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to upgrade your packaging?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Let's discuss your requirements and provide you with the best corrugated paper solutions.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-saffron hover:bg-saffron-light text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-black/20 hover:scale-105"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
