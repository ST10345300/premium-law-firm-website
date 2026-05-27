import { Link } from "react-router";
import { Building2, TrendingUp, Users, Award, ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";

export function Clients() {
  const clientCategories = [
    {
      icon: Building2,
      title: "Fortune 500 Companies",
      description: "Trusted legal partner for major corporations across industries",
      count: "150+",
    },
    {
      icon: TrendingUp,
      title: "Startups & Scale-ups",
      description: "Supporting innovative businesses from inception to growth",
      count: "500+",
    },
    {
      icon: Users,
      title: "Private Clients",
      description: "Personalized legal services for individuals and families",
      count: "2000+",
    },
    {
      icon: Award,
      title: "Government Entities",
      description: "Legal counsel for public sector and regulatory matters",
      count: "50+",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechCorp Global",
      company: "Technology",
      content: "Blackwell Attorneys provided exceptional guidance through our corporate merger. Their expertise made a complex process seamless. The team's attention to detail and strategic thinking were invaluable.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "Founder & CEO",
      company: "InnovateLabs",
      content: "The intellectual property team protected my innovations with remarkable efficiency. I couldn't ask for better representation. Their proactive approach saved us from potential disputes.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Private Client",
      company: "Family Law",
      content: "Their family law team handled my case with sensitivity and professionalism. Truly grateful for their support during a difficult time. They exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      role: "CFO",
      company: "FinanceFirst Inc.",
      content: "Outstanding corporate counsel that understands our business needs. The team is responsive, knowledgeable, and delivers results consistently.",
      rating: 5,
    },
    {
      name: "Dr. Amanda Williams",
      role: "Healthcare Administrator",
      company: "MedCare Solutions",
      content: "Navigating healthcare regulations is complex, but Blackwell Attorneys made it manageable. Their expertise in medical law is unmatched.",
      rating: 5,
    },
    {
      name: "Robert Johnson",
      role: "Entrepreneur",
      company: "Retail Ventures",
      content: "From business formation to contract negotiations, Blackwell Attorneys has been our trusted advisor. Their strategic legal guidance helped us scale successfully.",
      rating: 5,
    },
  ];

  const industryLogos = [
    "FactFix",
    "Probiz",
    "MeetHub",
    "TechCorp",
    "InnovateLabs",
    "FinanceFirst",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(to bottom right, #B8922A, #9B7935, #8B6914)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl mb-6">Our Clients</h1>
            <p className="text-xl text-[#F5EFE0] max-w-3xl mx-auto">
              Trusted by leading organizations and individuals worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diverse clientele across industries and sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br rounded-2xl border"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)',
                  borderColor: '#D4B87C'
                }}
              >
                <category.icon className="size-12 text-bronze mx-auto mb-4" />
                <div className="text-4xl text-bronze mb-2">{category.count}</div>
                <h3 className="text-xl mb-3 text-gray-900">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">
            {industryLogos.map((logo, index) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Client Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br p-8 rounded-2xl border hover:shadow-lg transition-shadow"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)',
                  borderColor: '#D4B87C'
                }}
              >
                <Quote className="size-8 text-bronze mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t pt-4" style={{ borderColor: '#D4B87C' }}>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-bronze mt-1">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1687289133469-b2a07a13b78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Scales of justice representing legal excellence"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-gray-900">Building Lasting Partnerships</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our clients are more than case numbers—they're valued partners. We build long-term
                relationships based on trust, transparency, and exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From Fortune 500 corporations to individual clients, we provide the same level of
                dedication and expertise to every matter we handle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Join Our Valued Clients</h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience the same exceptional legal service that our clients trust
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-full hover:bg-bronze-dark transition-colors"
          >
            Get Started Today
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
