import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@blackwellattorneys.com", "info@blackwellattorneys.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Legal Street, Suite 500", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    },
  ];

  const services = [
    "Corporate Law",
    "Family Law",
    "Intellectual Property",
    "Criminal Defense",
    "Real Estate Law",
    "Employment Law",
    "Personal Injury",
    "Litigation",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5EFE0] via-white to-[#F5EFE0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900">
              Get in <span className="text-bronze">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Schedule a consultation with our expert legal team. We're here to help you navigate your legal challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-6 text-gray-900">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="size-8 text-green-600" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-colors resize-none"
                      placeholder="Please describe your legal matter..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-bronze text-white px-8 py-4 rounded-full hover:bg-bronze-dark transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="size-5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-6 text-gray-900">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="bg-gradient-to-br from-[#F5EFE0] to-white p-6 rounded-xl border border-gold-light"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-bronze text-white p-3 rounded-lg">
                        <info.icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-lg text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border border-gray-300 overflow-hidden">
                <div className="text-center text-gray-500">
                  <MapPin className="size-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Legal Street, New York, NY 10001</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much does a consultation cost?",
                answer: "Initial consultations are complimentary for most practice areas. We'll discuss your case and provide an honest assessment of how we can help.",
              },
              {
                question: "How long does it take to get a response?",
                answer: "We strive to respond to all inquiries within 24 hours during business days. Urgent matters are prioritized.",
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment arrangements for qualifying cases. We'll work with you to find a solution that fits your budget.",
              },
              {
                question: "What should I bring to my first consultation?",
                answer: "Bring any relevant documents, contracts, correspondence, or evidence related to your case. A list of questions you'd like to discuss is also helpful.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gold-light"
              >
                <h3 className="text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
