import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Managing Partner",
      specialty: "Corporate Law",
      image: "https://images.unsplash.com/photo-1662104935541-aa5b6e02886d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "With over 20 years of experience in corporate law, Sarah leads our M&A practice and has successfully closed deals worth over $2 billion.",
      email: "s.mitchell@blackwellattorneys.co.za",
      linkedin: "#",
    },
    {
      name: "Dr. James Chen",
      role: "Senior Partner",
      specialty: "Intellectual Property",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "A former patent examiner, James brings deep technical expertise to IP matters. He holds a Ph.D. in Electrical Engineering and has secured over 500 patents for clients.",
      email: "j.chen@blackwellattorneys.co.za",
      linkedin: "#",
    },
    {
      name: "Maria Rodriguez",
      role: "Partner",
      specialty: "Family Law",
      image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "Maria's compassionate approach and fierce advocacy have helped hundreds of families through difficult transitions. She specializes in complex custody and high-net-worth divorces.",
      email: "m.rodriguez@blackwellattorneys.co.za",
      linkedin: "#",
    },
    {
      name: "Michael O'Brien",
      role: "Partner",
      specialty: "Criminal Defense",
      image: "https://images.unsplash.com/photo-1662104935762-707db0439ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "A former prosecutor with a 95% acquittal rate, Michael is known for his aggressive trial tactics and unwavering commitment to protecting clients' rights.",
      email: "m.obrien@blackwellattorneys.co.za",
      linkedin: "#",
    },
    {
      name: "Emily Thompson",
      role: "Senior Associate",
      specialty: "Employment Law",
      image: "https://images.unsplash.com/photo-1733348137479-2e726d326d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "Emily represents both employers and employees in complex workplace disputes. She's recognized for her innovative approaches to conflict resolution.",
      email: "e.thompson@blackwellattorneys.co.za",
      linkedin: "#",
    },
    {
      name: "David Nkosi",
      role: "Senior Associate",
      specialty: "Real Estate Law",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "David has facilitated over $500 million in commercial and residential real estate transactions. His expertise includes zoning, development, and property disputes.",
      email: "d.nkosi@blackwellattorneys.co.za",
      linkedin: "#",
    },
    {
      name: "Amara Okafor",
      role: "Associate",
      specialty: "Immigration Law",
      image: "https://images.unsplash.com/photo-1736939623985-90002e1f48c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "Fluent in five languages, Amara helps individuals and families navigate complex immigration matters with cultural sensitivity and expert knowledge.",
      email: "a.okafor@blackwellattorneys.co.za",
      linkedin: "#",
    },
    {
      name: "Robert Van Der Berg",
      role: "Associate",
      specialty: "Tax Law",
      image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "A certified public accountant and attorney, Robert provides comprehensive tax planning and dispute resolution services for businesses and high-net-worth individuals.",
      email: "r.vanderberg@blackwellattorneys.co.za",
      linkedin: "#",
    },
  ];

  const leadership = [
    {
      name: "Jennifer Williams",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "Jennifer oversees the firm's operations, ensuring exceptional client service and efficient case management across all practice areas.",
    },
    {
      name: "Thomas Anderson",
      role: "Director of Client Relations",
      image: "https://images.unsplash.com/photo-1613496701765-97267d26e3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=800",
      bio: "Thomas leads our client engagement initiatives and ensures every client receives personalized attention throughout their legal journey.",
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
            <h1 className="text-5xl lg:text-6xl mb-6">Meet Our Team</h1>
            <p className="text-xl text-[#F5EFE0] max-w-3xl mx-auto">
              Expert attorneys committed to delivering exceptional legal representation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-6 text-gray-900">World-Class Legal Expertise</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team comprises highly skilled attorneys with diverse backgrounds and specializations.
              We are united by our commitment to excellence, integrity, and achieving the best possible
              outcomes for our clients. With over 150 years of combined legal experience, we bring
              unparalleled expertise to every case we handle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Attorneys</h2>
            <p className="text-lg text-gray-600">Dedicated professionals ready to serve you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br p-6 rounded-2xl border hover:shadow-xl transition-all group"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)',
                  borderColor: '#D4B87C'
                }}
              >
                {/* Profile Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-bronze mb-1">{member.role}</p>
                  <p className="text-xs text-gray-600">{member.specialty}</p>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Contact */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t" style={{ borderColor: '#D4B87C' }}>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-bronze hover:text-bronze-dark transition-colors"
                    title="Email"
                  >
                    <Mail className="size-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-bronze hover:text-bronze-dark transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Leadership Team</h2>
            <p className="text-lg text-gray-600">Guiding our firm's vision and operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border hover:shadow-xl transition-shadow"
                style={{ borderColor: '#D4B87C' }}
              >
                <div className="flex items-start gap-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-bronze mb-3">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always looking for talented attorneys and legal professionals to join our growing firm.
            If you're passionate about delivering exceptional legal services, we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@blackwellattorneys.co.za"
            className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-full hover:bg-bronze-dark transition-colors"
          >
            <Mail className="size-5" />
            careers@blackwellattorneys.co.za
          </a>
        </div>
      </section>
    </div>
  );
}
