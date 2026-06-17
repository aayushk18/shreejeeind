"use client";

import { motion } from "framer-motion";
import { Target, MapPin, Award } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-krishna-blue py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Shree Jee Industries</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Delivering strength and reliability through premium corrugated paper manufacturing since inception.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Founding Vision</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Shree Jee Industries was founded with a singular vision: to revolutionize the packaging industry by providing high-quality, reliable, and affordable corrugated paper solutions. Named after Lord Krishna, our company embodies the principles of truth, dedication, and excellence in every aspect of our business.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand that packaging is the silent ambassador of your brand. That's why our state-of-the-art facility is equipped with advanced technology to produce liner and fluted paper that meets the rigorous demands of modern logistics and retail.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center shadow-inner"
          >
            {/* Placeholder for factory image */}
            <div className="text-gray-400 flex flex-col items-center">
              <Award className="h-16 w-16 mb-4 text-saffron opacity-50" />
              <span className="font-medium text-lg">Manufacturing Excellence</span>
            </div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Award className="h-8 w-8 text-krishna-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
            <p className="text-gray-600">Uncompromising standards in raw material selection and manufacturing processes.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Target className="h-8 w-8 text-krishna-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
            <p className="text-gray-600">Consistent product performance and dependable supply chains for bulk orders.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <MapPin className="h-8 w-8 text-krishna-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Affordability</h3>
            <p className="text-gray-600">Competitive pricing without sacrificing the structural integrity of our paper.</p>
          </motion.div>
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-krishna-blue rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl"
        >
          <div className="mb-8 md:mb-0 md:mr-8 max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-saffron">Our Facility</h2>
            <p className="text-lg text-blue-100 mb-6">
              Strategically located in Sector 63, Noida, our manufacturing unit is perfectly positioned to serve the NCR region and beyond with exceptional speed and efficiency.
            </p>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-saffron" />
              <span className="font-medium text-white">F-368, Sector 63, Noida 201301</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-white text-krishna-blue px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Get Directions
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
