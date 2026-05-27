import { Link } from "react-router";
import { Building2, Users, Scale, Gavel, ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  const serviceIcons = [
    { icon: Building2, label: "Corporate Law" },
    { icon: Gavel, label: "Legal Counsel" },
    { icon: Users, label: "Client Focus" },
    { icon: Scale, label: "Justice" },
  ];

  const services = [
    {
      icon: Building2,
      title: t("services.corporate"),
      description: t("services.corporate.desc"),
    },
    {
      icon: Users,
      title: t("services.family"),
      description: t("services.family.desc"),
    },
    {
      icon: Scale,
      title: t("services.ip"),
      description: t("services.ip.desc"),
    },
    {
      icon: Gavel,
      title: t("services.criminal"),
      description: t("services.criminal.desc"),
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechCorp",
      content: "Blackwell Attorneys provided exceptional guidance through our corporate merger. Their expertise made a complex process seamless.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "Entrepreneur",
      content: "The intellectual property team protected my innovations with remarkable efficiency. I couldn't ask for better representation.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Private Client",
      content: "Their family law team handled my case with sensitivity and professionalism. Truly grateful for their support.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Card-based design with gold gradient background */}
      <section className="relative min-h-screen overflow-hidden p-8 lg:p-16" style={{ background: 'linear-gradient(to bottom right, #B8922A, #9B7935, #8B6914)' }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>

        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[700px]">
            {/* Left Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight"
                >
                  {t("home.hero.title1")}<br />{t("home.hero.title2")}<br />
                  <span className="text-bronze">{t("home.hero.title3")}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base text-gray-600 mb-8 leading-relaxed max-w-md"
                >
                  {t("home.hero.description")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-3 rounded-full hover:bg-bronze-dark transition-colors"
                  >
                    {t("home.hero.consult")}
                  </Link>
                  <button className="inline-flex items-center gap-2 text-gray-900 px-8 py-3 hover:text-bronze transition-colors">
                    {t("home.hero.explore")}
                    <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              </div>

              {/* Trusted By */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex flex-wrap gap-8 text-gray-400 items-center">
                  <span className="text-lg">FactFix</span>
                  <span className="text-lg">Probiz</span>
                  <span className="text-lg">MeetHub</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image and Service Icons */}
            <div className="relative bg-gradient-to-br from-amber-50 to-white p-8 lg:p-12" style={{ backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)' }}>
              {/* Lady Justice Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-full flex items-center justify-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1687289133469-b2a07a13b78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=1000"
                  alt="Professional legal excellence and justice"
                  className="h-[500px] w-auto object-contain relative z-10"
                />

                {/* Floating Service Icons */}
                <div className="absolute top-8 right-8 flex gap-3">
                  {serviceIcons.map((service, index) => (
                    <motion.div
                      key={service.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="w-12 h-12 rounded-full bg-white border-2 border-bronze flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      title={service.label}
                    >
                      <service.icon className="size-6 text-bronze" />
                    </motion.div>
                  ))}
                </div>

                {/* Service List */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute top-24 right-8 space-y-3"
                >
                  {services.map((service, index) => (
                    <div
                      key={service.title}
                      className="flex items-start gap-2 text-sm"
                    >
                      <ArrowRight className="size-4 text-bronze mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-tight">{service.title}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute bottom-8 right-8 flex gap-8"
                >
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">{t("home.stats.cases").split(' ')[0]}<br />{t("home.stats.cases").split(' ')[1]}</div>
                    <div className="text-3xl text-gray-900">10K+</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">{t("home.stats.satisfied").split(' ')[0]}<br />{t("home.stats.satisfied").split(' ')[1]}</div>
                    <div className="text-3xl text-gray-900">98%</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Practice Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal services tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br p-8 rounded-2xl border hover:shadow-xl transition-shadow group"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)',
                  borderColor: '#D4B87C'
                }}
              >
                <service.icon className="size-12 text-bronze mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-bronze text-sm hover:gap-3 transition-all"
                >
                  {t("services.learn")}
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-gray-900">Why Choose Blackwell Attorneys?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 25 years of experience, we've built a reputation for excellence and client satisfaction.
              </p>
              <div className="space-y-4">
                {[
                  "Expert legal team with diverse specializations",
                  "Client-focused approach to every case",
                  "Proven track record of successful outcomes",
                  "Transparent communication throughout",
                  "Competitive and fair pricing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="size-6 text-bronze flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1595846416120-3a7354ed7d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Professional legal consultation meeting"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Client Testimonials</h2>
            <p className="text-lg text-gray-600">What our clients say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br p-8 rounded-2xl border"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)',
                  borderColor: '#D4B87C'
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">{t("common.getStarted")}</h2>
          <p className="text-lg text-gray-300 mb-8">
            {t("common.consultation")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-full hover:bg-bronze-dark transition-colors"
          >
            {t("common.contactUs")}
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
