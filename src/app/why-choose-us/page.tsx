"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Box, BadgeIndianRupee, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "In-House Manufacturing",
      description: "Our state-of-the-art facility in Noida is equipped with modern corrugation machinery, ensuring complete control over the production process from raw material to finished product.",
      icon: <Factory className="h-10 w-10 text-krishna-blue" />,
    },
    {
      title: "Stringent Quality Control",
      description: "Every batch undergoes rigorous testing for bursting strength, compression, and moisture levels to meet international packaging standards.",
      icon: <ShieldCheck className="h-10 w-10 text-krishna-blue" />,
    },
    {
      title: "Bulk Supply Capability",
      description: "With high production capacity, we effortlessly fulfill large volume orders for commercial and industrial clients without compromising on quality.",
      icon: <Box className="h-10 w-10 text-krishna-blue" />,
    },
    {
      title: "Competitive Pricing",
      description: "By eliminating middlemen and optimizing our manufacturing processes, we offer the best rates in the market, providing superior value for your investment.",
      icon: <BadgeIndianRupee className="h-10 w-10 text-krishna-blue" />,
    },
    {
      title: "Timely Delivery",
      description: "Our robust logistics network ensures fast and safe delivery across the NCR and all over India, keeping your supply chain uninterrupted.",
      icon: <Clock className="h-10 w-10 text-krishna-blue" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Page Header */}
      <div className="bg-gray-50 py-12 px-4 text-center border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-krishna-blue/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnering with Shree Jee Industries means choosing reliability, superior quality, and a commitment to your business's success.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 md:gap-8 bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
            >
              <div className="w-20 h-20 shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner">
                {reason.icon}
              </div>
              <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
