import { Building2, Users, FileText, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function Cases() {
  const caseStudies = [
    {
      category: "Corporate Law",
      icon: Building2,
      title: "Multi-Million Dollar Merger",
      client: "TechCorp International",
      challenge: "Complex cross-border merger involving regulatory approvals across three jurisdictions.",
      solution: "Coordinated legal strategy with international partners, navigated regulatory requirements, and structured deal to maximize tax efficiency.",
      outcome: "Successfully completed $250M merger within 6 months, 20% faster than industry average.",
      stats: [
        { label: "Deal Value", value: "$250M" },
        { label: "Time Saved", value: "20%" },
      ],
    },
    {
      category: "Intellectual Property",
      icon: FileText,
      title: "Patent Infringement Victory",
      client: "InnovateTech Solutions",
      challenge: "Major competitor copying proprietary technology, threatening market position.",
      solution: "Built comprehensive IP case, documented infringement, and pursued aggressive litigation strategy.",
      outcome: "Won $15M settlement and permanent injunction, protecting client's market share.",
      stats: [
        { label: "Settlement", value: "$15M" },
        { label: "Market Share Protected", value: "100%" },
      ],
    },
    {
      category: "Family Law",
      icon: Users,
      title: "Complex Custody Resolution",
      client: "Private Client",
      challenge: "High-conflict custody dispute involving international relocation concerns.",
      solution: "Mediation-focused approach with child welfare experts, developed comprehensive parenting plan.",
      outcome: "Achieved amicable custody agreement prioritizing children's best interests, avoiding lengthy trial.",
      stats: [
        { label: "Resolution Time", value: "3 months" },
        { label: "Trial Avoided", value: "Yes" },
      ],
    },
    {
      category: "Criminal Defense",
      icon: Shield,
      title: "White-Collar Defense",
      client: "Corporate Executive",
      challenge: "Federal fraud charges with potential 10+ year sentence.",
      solution: "Comprehensive defense strategy, negotiated with prosecutors, presented mitigating evidence.",
      outcome: "Reduced charges to misdemeanor, probation instead of prison time.",
      stats: [
        { label: "Sentence Reduction", value: "95%" },
        { label: "Prison Time", value: "0 years" },
      ],
    },
  ];

  const achievements = [
    { icon: CheckCircle, value: "10,000+", label: "Cases Won" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Building2, value: "$500M+", label: "Client Value Secured" },
    { icon: Users, value: "5,000+", label: "Satisfied Clients" },
  ];

  const practiceAreas = [
    { name: "Corporate Law", count: 3200 },
    { name: "Family Law", count: 2800 },
    { name: "Intellectual Property", count: 1500 },
    { name: "Criminal Defense", count: 1200 },
    { name: "Real Estate", count: 800 },
    { name: "Employment Law", count: 500 },
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
              Our <span className="text-bronze">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real results for real clients. Explore how we've helped individuals and businesses achieve their legal goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <achievement.icon className="size-8 text-gold mx-auto mb-3" />
                <div className="text-4xl mb-2 text-gold">{achievement.value}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Featured Case Studies</h2>
            <p className="text-lg text-gray-600">Detailed examples of our successful cases</p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#F5EFE0] to-white p-8 rounded-2xl border border-gold-light"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <caseStudy.icon className="size-8 text-bronze" />
                      <span className="text-sm text-bronze uppercase tracking-wide">{caseStudy.category}</span>
                    </div>
                    
                    <h3 className="text-3xl mb-4 text-gray-900">{caseStudy.title}</h3>
                    
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <h4 className="text-sm text-gray-900 mb-1">Client</h4>
                        <p>{caseStudy.client}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-900 mb-1">Challenge</h4>
                        <p>{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-900 mb-1">Solution</h4>
                        <p>{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-900 mb-1">Outcome</h4>
                        <p className="text-amber-700">{caseStudy.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-amber-200 self-start">
                    <h4 className="text-sm text-gray-900 mb-4 uppercase tracking-wide">Key Metrics</h4>
                    <div className="space-y-4">
                      {caseStudy.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-3xl text-bronze mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Area Distribution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Cases by Practice Area</h2>
            <p className="text-lg text-gray-600">Our experience across different legal domains</p>
          </div>

          <div className="space-y-6">
            {practiceAreas.map((area, index) => {
              const maxCount = Math.max(...practiceAreas.map(a => a.count));
              const percentage = (area.count / maxCount) * 100;
              
              return (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gold-light"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-900">{area.name}</span>
                    <span className="text-bronze">{area.count} cases</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-[#F5EFE0]0 to-amber-600 h-full rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Excellence Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Professional courtroom setting"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-gray-900">Excellence in Every Case</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our commitment to excellence extends beyond the courtroom. We combine deep legal expertise
                with innovative strategies to achieve exceptional outcomes for our clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're facing a complex corporate transaction, family law matter, or criminal defense
                case, our experienced team is ready to fight for your rights and protect your interests.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
              "Blackwell Attorneys's expertise and dedication transformed what seemed like an impossible situation into a remarkable success. Their strategic approach and attention to detail made all the difference."
            </p>
            <div>
              <p className="text-gray-900">— Michael Thompson</p>
              <p className="text-sm text-gray-600">CEO, Fortune 500 Company</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
