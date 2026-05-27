import { Building2, Users, FileText, Shield, Scale, Gavel, Home, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Comprehensive legal support for businesses of all sizes, from startups to established corporations.",
      features: [
        "Business formation and structuring",
        "Mergers and acquisitions",
        "Corporate governance",
        "Contract negotiation and drafting",
        "Compliance and regulatory matters",
      ],
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate guidance through family legal matters with sensitivity and expertise.",
      features: [
        "Divorce and separation",
        "Child custody and support",
        "Adoption services",
        "Prenuptial agreements",
        "Estate planning",
      ],
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      description: "Protecting your innovations, creative works, and brand identity with precision.",
      features: [
        "Patent applications and prosecution",
        "Trademark registration and protection",
        "Copyright registration",
        "IP litigation",
        "Licensing agreements",
      ],
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Vigorous defense of your rights with experienced and dedicated legal counsel.",
      features: [
        "White-collar crime defense",
        "DUI and traffic violations",
        "Assault and battery defense",
        "Drug-related offenses",
        "Appeals and post-conviction relief",
      ],
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Expert guidance for all your real estate transactions and property matters.",
      features: [
        "Residential and commercial transactions",
        "Lease negotiations",
        "Property disputes",
        "Zoning and land use",
        "Title examination",
      ],
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Protecting employee rights and advising employers on workplace legal matters.",
      features: [
        "Employment contracts",
        "Discrimination claims",
        "Wrongful termination",
        "Wage and hour disputes",
        "Workplace harassment",
      ],
    },
    {
      icon: Scale,
      title: "Personal Injury",
      description: "Fighting for fair compensation for victims of accidents and negligence.",
      features: [
        "Auto accidents",
        "Medical malpractice",
        "Slip and fall cases",
        "Product liability",
        "Wrongful death claims",
      ],
    },
    {
      icon: Gavel,
      title: "Litigation",
      description: "Skilled representation in civil litigation across various practice areas.",
      features: [
        "Commercial litigation",
        "Contract disputes",
        "Business torts",
        "Appeals",
        "Alternative dispute resolution",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5EFE0] via-white to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900">
              Our <span className="text-bronze">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive legal solutions across multiple practice areas, tailored to meet your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F5EFE0] to-white p-8 rounded-2xl border border-gold-light hover:shadow-xl transition-shadow"
              >
                <service.icon className="size-12 text-bronze mb-4" />
                <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ArrowRight className="size-4 text-bronze flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-bronze hover:gap-3 transition-all"
                >
                  Get started
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Process</h2>
            <p className="text-lg text-gray-600">How we work with you to achieve the best results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", description: "We listen to your needs and assess your case" },
              { step: "02", title: "Strategy Development", description: "We create a tailored legal strategy for your situation" },
              { step: "03", title: "Implementation", description: "We execute the plan with precision and expertise" },
              { step: "04", title: "Resolution", description: "We work towards the best possible outcome for you" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl text-bronze mb-4">{item.step}</div>
                <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Office Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-gray-900">State-of-the-Art Legal Practice</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our modern facilities and experienced team provide the perfect environment for
                delivering exceptional legal services. We combine traditional legal values with
                innovative approaches to meet your needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our well-equipped offices to our cutting-edge legal research tools, we ensure
                that every case receives the attention and resources it deserves.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Modern law office interior"
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
            Contact us today to discuss how we can help with your legal needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
