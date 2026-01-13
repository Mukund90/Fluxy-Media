import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919833427316";
  const message = encodeURIComponent("Hi! I'm interested in learning more about your Meta Ads services for interior designers.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 bg-card text-foreground text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
