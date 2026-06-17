import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919810645268"; // Including country code for India
  const message = encodeURIComponent("Hello, I would like to inquire about your paper products.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebd5b] hover:scale-110 transition-all z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-16 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
