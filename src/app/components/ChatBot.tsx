import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(
          "Hello! I'm Amber, your legal assistant. How can I help you today? You can ask about our services, book a consultation, or get general legal information."
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(false);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Greetings
    if (message.match(/hi|hello|hey|good morning|good afternoon/)) {
      return "Hello! Welcome to Blackwell Attorneys. I'm here to help you with any legal inquiries. What would you like to know?";
    }

    // Services
    if (message.match(/service|practice|area|help with/)) {
      return "We offer several legal services:\n\n• Corporate Law - Business and commercial matters\n• Family Law - Divorce, custody, and family issues\n• Intellectual Property - Patents, trademarks, copyrights\n• Criminal Defense - Legal representation for criminal cases\n• Employment Law - Workplace disputes and contracts\n• Real Estate Law - Property transactions and disputes\n\nWhich area interests you?";
    }

    // Consultation/Appointment
    if (message.match(/consult|appointment|book|schedule|meet/)) {
      return "I'd be happy to help you schedule a consultation! You can:\n\n1. Call us at (555) 123-4567\n2. Email us at legal@blackwellattorneys.com\n3. Visit our Contact page to fill out a form\n\nOur consultations typically last 30-60 minutes. Would you like me to provide more details about the consultation process?";
    }

    // Pricing/Fees
    if (message.match(/price|cost|fee|expensive|charge|rate/)) {
      return "Our fees vary depending on the type of legal service and complexity of your case. We offer:\n\n• Free initial consultations for most practice areas\n• Transparent pricing with no hidden fees\n• Flexible payment plans\n• Competitive rates\n\nFor a detailed quote, I recommend scheduling a consultation where we can discuss your specific needs. Would you like to book one?";
    }

    // Corporate Law
    if (message.match(/corporate|business|company|merger|acquisition/)) {
      return "Our Corporate Law team can assist with:\n\n• Mergers & Acquisitions\n• Corporate Governance\n• Securities Compliance\n• Business Formation\n• Contract Negotiations\n• Commercial Transactions\n\nWould you like to speak with one of our corporate law specialists?";
    }

    // Family Law
    if (message.match(/family|divorce|custody|child|marriage|prenup/)) {
      return "Our Family Law team provides compassionate support for:\n\n• Divorce & Separation\n• Child Custody & Support\n• Adoption Services\n• Prenuptial Agreements\n• Domestic Partnerships\n\nThese matters require sensitivity and expertise. Would you like to schedule a confidential consultation?";
    }

    // IP Law
    if (message.match(/intellectual property|patent|trademark|copyright|ip/)) {
      return "Our Intellectual Property team specializes in:\n\n• Patent Registration & Protection\n• Trademark Applications\n• Copyright Law\n• IP Litigation\n• Licensing Agreements\n\nProtecting your innovations is crucial. How can we help safeguard your intellectual property?";
    }

    // Criminal Defense
    if (message.match(/criminal|defense|charge|arrest|trial/)) {
      return "Our Criminal Defense attorneys provide vigorous representation for:\n\n• Criminal Trial Defense\n• Appeals\n• Plea Negotiations\n• White Collar Crime\n• DUI/DWI Defense\n\nIf you're facing criminal charges, time is critical. Would you like to speak with a defense attorney immediately?";
    }

    // Hours/Location
    if (message.match(/hour|open|location|address|where/)) {
      return "📍 Location: 123 Legal Street, Suite 500, New York, NY 10001\n\n⏰ Hours:\nMonday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed\n\nEmergency consultations available 24/7. How can I assist you further?";
    }

    // Contact
    if (message.match(/contact|email|phone|call|reach/)) {
      return "You can reach us at:\n\n📞 Phone: (555) 123-4567\n📧 Email: legal@blackwellattorneys.com\n📍 Address: 123 Legal Street, Suite 500, New York, NY 10001\n\nOur team typically responds within 24 hours. Would you like to leave a message?";
    }

    // Experience
    if (message.match(/experience|long|years|established/)) {
      return "Blackwell Attorneys has been serving clients for over 25 years! Our team includes:\n\n• 50+ expert attorneys\n• 10,000+ cases handled\n• 98% client satisfaction rate\n• Recognized by leading legal associations\n\nOur experience spans multiple practice areas. What type of legal expertise are you looking for?";
    }

    // Thanks
    if (message.match(/thank|thanks|appreciate/)) {
      return "You're very welcome! If you have any other questions or would like to schedule a consultation, feel free to ask. I'm here to help! 😊";
    }

    // Goodbye
    if (message.match(/bye|goodbye|see you|later/)) {
      return "Thank you for chatting with me! If you need any legal assistance in the future, don't hesitate to reach out. Have a great day! 👋";
    }

    // Default response
    return "I understand you're asking about that. For specific legal advice tailored to your situation, I recommend scheduling a consultation with one of our attorneys. They'll be able to provide detailed guidance.\n\nYou can also ask me about:\n• Our legal services\n• Booking a consultation\n• Contact information\n• Office hours and location\n\nWhat would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const response = getBotResponse(inputValue);
      addBotMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-bronze text-white p-4 rounded-full shadow-2xl hover:bg-bronze-dark transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle className="size-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border"
              style={{ borderColor: '#D4B87C' }}
            >
            {/* Header */}
            <div className="bg-gradient-to-r from-bronze to-bronze-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Amber</h3>
                  <p className="text-xs text-white/80">Legal Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-bronze text-white"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-bronze rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-bronze rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-bronze rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-bronze text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-bronze text-white p-2 rounded-full hover:bg-bronze-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="size-5" />
                </button>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
