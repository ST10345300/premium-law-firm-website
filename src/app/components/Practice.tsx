import { Link } from "react-router";
import { Building2, Users, Scale, Gavel, FileText, Shield, Briefcase, Home as HomeIcon, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Practice() {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Expert guidance on mergers, acquisitions, corporate governance, and compliance matters.",
      services: [
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Securities Compliance",
        "Business Formation",
      ],
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate legal support for divorce, custody, and family-related matters.",
      services: [
        "Divorce & Separation",
        "Child Custody",
        "Adoption Services",
        "Prenuptial Agreements",
      ],
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      description: "Protecting your innovations, trademarks, patents, and creative works.",
      services: [
        "Patent Registration",
        "Trademark Protection",
        "Copyright Law",
        "IP Litigation",
      ],
    },
    {
      icon: Gavel,
      title: "Criminal Defense",
      description: "Vigorous defense representation for criminal charges and legal proceedings.",
      services: [
        "Criminal Trial Defense",
        "Appeals",
        "Plea Negotiations",
        "White Collar Crime",
      ],
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Comprehensive employment law services for both employers and employees.",
      services: [
        "Employment Contracts",
        "Wrongful Termination",
        "Discrimination Cases",
        "Workplace Disputes",
      ],
    },
    {
      icon: HomeIcon,
      title: "Real Estate Law",
      description: "Legal expertise in property transactions, disputes, and real estate matters.",
      services: [
        "Property Transactions",
        "Title Disputes",
        "Lease Agreements",
        "Zoning Issues",
      ],
    },
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
            <h1 className="text-5xl lg:text-6xl mb-6">Practice Areas</h1>
            <p className="text-xl text-[#F5EFE0] max-w-3xl mx-auto">
              Comprehensive legal expertise across multiple practice areas to serve your diverse needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br p-8 rounded-2xl border hover:shadow-xl transition-shadow"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)',
                  borderColor: '#D4B87C'
                }}
              >
                <area.icon className="size-12 text-bronze mb-4" />
                <h3 className="text-2xl mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                <ul className="space-y-2 mb-6">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                      <ArrowRight className="size-4 text-bronze flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-bronze hover:gap-3 transition-all"
                >
                  Get consultation
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-gray-900">Comprehensive Legal Expertise</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our attorneys bring decades of combined experience across all major practice areas.
                We stay current with evolving laws and regulations to provide the most effective
                legal representation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether your matter requires litigation, negotiation, or strategic counsel, our team
                has the skills and experience to guide you to the best possible outcome.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1607778914885-787b06728b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Professional law library and courtroom"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Legal Assistance?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our experienced attorneys are ready to help with your legal needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-full hover:bg-bronze-dark transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
