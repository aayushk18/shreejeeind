"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-krishna-blue py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          We're here to answer any questions you have about our products and manufacturing capabilities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm text-saffron shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Factory Location</h3>
                  <p className="text-gray-600">
                    F-368, Sector 63,<br />
                    Noida, Uttar Pradesh 201301<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm text-saffron shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h3>
                  <p className="text-gray-600 mb-2">Call us for immediate assistance or sales inquiries.</p>
                  <a href="tel:+9199625178997" className="text-krishna-blue font-bold text-lg hover:underline block">
                    +91 96251 78997
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm text-saffron shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email Address</h3>
                  <p className="text-gray-600 mb-2">Drop us an email anytime and we will reply within 24 hours.</p>
                  <a href="mailto:shreejeeindustriesnoida@gmail.com" className="text-krishna-blue font-bold hover:underline break-all">
                    shreejeeindustriesnoida@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm text-saffron shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/919625178997?text=${encodeURIComponent("Hello Shree Jee Industries, I would like to know more about your packaging products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-sm"
              >
                <MessageCircle className="h-6 w-6" />
                Chat with us on WhatsApp
              </a>
            </div>

            <div className="mt-6 flex gap-4 items-center justify-center lg:justify-start">
              <span className="text-gray-700 font-semibold mr-2">Follow us:</span>
              <a
                href="https://www.linkedin.com/company/shreejee-ind/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5]/10 hover:bg-[#0077b5] text-[#0077b5] hover:text-white p-3 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/shreejee_ind/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e1306c]/10 hover:bg-[#e1306c] text-[#e1306c] hover:text-white p-3 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white"
          >
            {/* Embedded Google Map pointing to Sector 63, Noida */}
            <iframe


              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.3377887053753!2d77.38957253862948!3d28.620899207563934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc18a299acb%3A0x9ffd28d38b71bcac!2sShree%20Jee%20Industries!5e0!3m2!1sen!2sin!4v1781695944013!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Jee Industries Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
