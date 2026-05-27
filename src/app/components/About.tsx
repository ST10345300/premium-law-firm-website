import { Users, Target, Award, Heart, Briefcase, Scale, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export function About() {
  const values = [
    {
      icon: Scale,
      title: "Integrity",
      description: "We uphold the highest ethical standards in every case we handle.",
    },
    {
      icon: Heart,
      title: "Client-Centered",
      description: "Your success and satisfaction are at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in legal representation and service delivery.",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Over 25 years of proven expertise across diverse practice areas.",
    },
  ];

  const team = [
    {
      name: "Robert Harrison",
      role: "Senior Partner",
      specialty: "Corporate Law",
      image: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
    },
    {
      name: "Jennifer Morrison",
      role: "Managing Partner",
      specialty: "Family Law",
      image: "https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
    },
    {
      name: "Michael Chen",
      role: "Partner",
      specialty: "Intellectual Property",
      image: "https://images.unsplash.com/photo-1665224752561-85f4da9a5658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
    },
    {
      name: "Sarah Williams",
      role: "Partner",
      specialty: "Criminal Defense",
      image: "https://images.unsplash.com/photo-1665224752136-4dbe2dfc8195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
    },
  ];

  const milestones = [
    { year: "2001", event: "Blackwell Attorneys founded" },
    { year: "2005", event: "Expanded to 20+ attorneys" },
    { year: "2010", event: "Opened second office" },
    { year: "2015", event: "Reached 5,000 cases handled" },
    { year: "2020", event: "Recognized as top law firm" },
    { year: "2026", event: "Over 10,000 successful cases" },
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
              About <span className="text-bronze">Blackwell Attorneys</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A legacy of legal excellence spanning over two decades, dedicated to serving our clients with integrity and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2001, Blackwell Attorneys was built on a simple yet powerful principle: to provide exceptional legal services with unwavering integrity and personalized attention.
                </p>
                <p>
                  What started as a small practice has grown into a leading law firm with over 50 expert attorneys, serving clients across multiple practice areas. Our growth reflects our commitment to excellence and the trust our clients place in us.
                </p>
                <p>
                  Today, we continue to uphold the values that shaped our foundation while embracing innovation to better serve our clients in an ever-evolving legal landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1702628771524-25d5174e919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Professional law office interior"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gold-light text-center hover:shadow-xl transition-shadow"
              >
                <value.icon className="size-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our history</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-8"
              >
                <div className="bg-bronze text-white px-6 py-3 rounded-full min-w-24 text-center">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gradient-to-r from-[#F5EFE0] to-white p-6 rounded-xl border border-gold-light">
                  <p className="text-gray-900">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gold-light hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-sm text-bronze mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Team Button */}
          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-full hover:bg-bronze-dark transition-colors"
            >
              View Full Team
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="size-16 text-bronze mx-auto mb-6" />
          <h2 className="text-4xl mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            To provide exceptional legal services that empower our clients to achieve their goals, 
            while maintaining the highest standards of integrity, professionalism, and client care.
          </p>
        </div>
      </section>
    </div>
  );
}
