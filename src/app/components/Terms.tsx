import { motion } from "motion/react";
import { Shield, FileText, AlertCircle, Scale } from "lucide-react";

export function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: "By accessing and using the Blackwell Attorneys website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services."
    },
    {
      icon: Scale,
      title: "Legal Services",
      content: "The information provided on this website is for general informational purposes only and does not constitute legal advice. Each legal matter should be evaluated on its own merits. A formal attorney-client relationship is established only through a signed engagement letter."
    },
    {
      icon: Shield,
      title: "Confidentiality",
      content: "We maintain strict confidentiality of all client communications and information. However, confidentiality protections only apply after an attorney-client relationship has been formally established. Do not send confidential information until you have received confirmation of representation."
    },
    {
      icon: AlertCircle,
      title: "No Guarantee of Results",
      content: "While we strive to achieve the best possible outcomes for our clients, we cannot guarantee specific results. The outcome of any legal matter depends on many factors, including the specific facts and applicable law."
    }
  ];

  const terms = [
    {
      title: "1. Use of Website",
      points: [
        "This website is intended for informational purposes and to facilitate communication with potential and current clients.",
        "You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair our services.",
        "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense."
      ]
    },
    {
      title: "2. Intellectual Property",
      points: [
        "All content on this website, including text, graphics, logos, and images, is the property of Blackwell Attorneys or its content suppliers.",
        "You may not reproduce, distribute, or create derivative works from our content without express written permission.",
        "Our firm name, logo, and all related marks are trademarks of Blackwell Attorneys."
      ]
    },
    {
      title: "3. Attorney-Client Relationship",
      points: [
        "Visiting this website or contacting us does not create an attorney-client relationship.",
        "An attorney-client relationship is established only when we send you a written engagement letter and you sign and return it.",
        "We are not obligated to accept every case or representation opportunity presented to us."
      ]
    },
    {
      title: "4. Consultation and Fees",
      points: [
        "Initial consultations may be offered at no charge or at a reduced rate, as specified in our communications.",
        "Legal fees and billing arrangements will be clearly outlined in the engagement letter.",
        "You are responsible for all costs and expenses as outlined in your engagement letter."
      ]
    },
    {
      title: "5. Limitation of Liability",
      points: [
        "Blackwell Attorneys and its attorneys will not be liable for any indirect, consequential, or special damages arising from your use of this website.",
        "Our liability is limited to the extent permitted by applicable law.",
        "This website is provided 'as is' without warranties of any kind, express or implied."
      ]
    },
    {
      title: "6. External Links",
      points: [
        "Our website may contain links to third-party websites for your convenience.",
        "We do not endorse or assume responsibility for the content of external websites.",
        "Your use of third-party websites is at your own risk and subject to their terms and conditions."
      ]
    },
    {
      title: "7. Modifications",
      points: [
        "We reserve the right to modify these Terms and Conditions at any time.",
        "Changes will be effective immediately upon posting to this website.",
        "Your continued use of our services after changes are posted constitutes acceptance of the modified terms."
      ]
    },
    {
      title: "8. Governing Law",
      points: [
        "These Terms and Conditions are governed by the laws of the jurisdiction in which Blackwell Attorneys operates.",
        "Any disputes arising from these terms will be resolved in the courts of that jurisdiction.",
        "If any provision of these terms is found to be invalid, the remaining provisions will continue in full force."
      ]
    },
    {
      title: "9. Contact Information",
      points: [
        "For questions about these Terms and Conditions, please contact us using the information provided on our Contact page.",
        "We will respond to inquiries within a reasonable timeframe.",
        "Written communications should be sent to our main office address."
      ]
    }
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
            <h1 className="text-5xl lg:text-6xl mb-6">Terms & Conditions</h1>
            <p className="text-xl text-[#F5EFE0] max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-[#F5EFE0] mt-4">Last Updated: May 27, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Key Points Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Important Information</h2>
            <p className="text-lg text-gray-600">Key points you should understand</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
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
                <section.icon className="size-12 text-bronze mb-4" />
                <h3 className="text-2xl mb-4 text-gray-900">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl mb-6 text-gray-900">Complete Terms and Conditions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The following terms and conditions govern your use of Blackwell Attorneys's website and services.
              By continuing to access or use our services, you agree to be bound by these terms.
            </p>
          </div>

          <div className="space-y-8">
            {terms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl mb-4 text-bronze">{term.title}</h3>
                <ul className="space-y-3">
                  {term.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-bronze mt-1.5">•</span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-8 bg-gradient-to-br rounded-2xl border"
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #F5EFE0, #ffffff)',
              borderColor: '#D4B87C'
            }}
          >
            <h3 className="text-2xl mb-4 text-gray-900">Questions About Our Terms?</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about these Terms and Conditions,
              please don't hesitate to contact our office. We're here to help clarify
              any points and ensure you understand your rights and obligations.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong> legal@blackwellattorneys.co.za<br />
              <strong>Phone:</strong> +27 21 123 4567<br />
              <strong>Address:</strong> 123 Long Street, Cape Town, 8001
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
