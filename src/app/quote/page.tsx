"use client";

import { motion } from "framer-motion";
import { Send, FileText } from "lucide-react";

export default function Quote() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your request. We will get back to you shortly!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="h-8 w-8 text-krishna-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Request a Quote</h1>
          <p className="text-lg text-gray-600">
            Fill out the form below with your requirements, and our team will get back to you with a competitive pricing estimate.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors"
                  placeholder="Your Company Pvt Ltd"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Product Type *</label>
              <select
                id="product"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors bg-white"
              >
                <option value="" disabled selected>Select a product...</option>
                <option value="liner">Liner Paper</option>
                <option value="fluted">Fluted Paper</option>
                <option value="both">Both</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity (Tons) *</label>
                <input
                  type="number"
                  id="quantity"
                  required
                  min="1"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors"
                  placeholder="e.g. 10"
                />
              </div>
              <div>
                <label htmlFor="gsm" className="block text-sm font-medium text-gray-700 mb-2">Required GSM (Optional)</label>
                <input
                  type="text"
                  id="gsm"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors"
                  placeholder="e.g. 120-150 GSM"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Specifications or Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-krishna-blue focus:border-krishna-blue outline-none transition-colors resize-none"
                placeholder="Any specific sizes, bursting strength requirements, or other details..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-krishna-blue hover:bg-krishna-blue-light text-white font-bold text-lg py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              <Send className="h-5 w-5" />
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
