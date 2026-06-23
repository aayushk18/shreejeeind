import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-krishna-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <img src="/logo.png" alt="Shree Jee Industries" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white leading-tight">Shree Jee</span>
                <span className="text-xl font-semibold text-saffron tracking-wider">INDUSTRIES</span>
              </div>
            </Link>
            <p className="text-blue-100 mb-6">
              Quality Corrugation, Built for Every Business. Providing premium liner and fluted paper across India.
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/company/shreejee-ind/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white text-blue-100 hover:text-krishna-blue p-2.5 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/shreejee_ind/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white text-blue-100 hover:text-krishna-blue p-2.5 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-saffron">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-blue-100 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/why-choose-us" className="text-blue-100 hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/industries" className="text-blue-100 hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-saffron">Services</h3>
            <ul className="space-y-3">
              <li className="text-blue-100">Liner Paper</li>
              <li className="text-blue-100">Fluted Paper</li>
              <li className="text-blue-100">Bulk Orders</li>
              <li className="text-blue-100">Fast Delivery</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-saffron">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-saffron shrink-0 mt-1" />
                <span className="text-blue-100">F-368, Sector 63, Noida 201301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-saffron shrink-0" />
                <span className="text-blue-100">9625178997</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-saffron shrink-0" />
                <a href="mailto:shreejeeindustriesnoida@gmail.com" className="text-blue-100 hover:text-white transition-colors break-all">
                  shreejeeindustriesnoida@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-krishna-blue-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Shree Jee Industries. All rights reserved.
          </p>
          <div className="text-sm text-blue-200">
            Designed for excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
