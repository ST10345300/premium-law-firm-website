import { motion } from "motion/react";
import { Lock, Eye, Shield, Database, UserCheck, Bell } from "lucide-react";

export function Privacy() {
  const highlights = [
    {
      icon: Lock,
      title: "Data Security",
      description: "We employ industry-standard security measures to protect your personal information from unauthorized access."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We are transparent about what information we collect and how we use it for legal services."
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Attorney-client privilege protects your communications once a formal relationship is established."
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      description: "You have the right to access, correct, or delete your personal information at any time."
    }
  ];

  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information that you provide directly to us, including your name, email address, phone number, postal address, and other contact details when you request consultations or use our services."
        },
        {
          subtitle: "Case Information",
          text: "When you engage our legal services, we collect detailed information relevant to your legal matter, including documents, correspondence, and case-specific details."
        },
        {
          subtitle: "Website Usage Data",
          text: "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on our site."
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Legal Services",
          text: "We use your information to provide legal services, communicate with you about your case, prepare legal documents, and represent your interests."
        },
        {
          subtitle: "Client Communication",
          text: "Your contact information is used to respond to inquiries, send appointment reminders, provide case updates, and share important legal information."
        },
        {
          subtitle: "Website Improvement",
          text: "Usage data helps us improve our website functionality, understand user needs, and enhance the overall user experience."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with legal obligations, enforce our terms, and protect our rights and the rights of others."
        }
      ]
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted third-party service providers who assist us in operating our business, such as IT support, document management, and billing services."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, court order, or legal process, or to protect our rights and the safety of our clients and staff."
        },
        {
          subtitle: "With Your Consent",
          text: "We may share information with other parties when you have given us explicit permission to do so."
        },
        {
          subtitle: "Never for Marketing",
          text: "We do not sell, rent, or share your personal information with third parties for their marketing purposes."
        }
      ]
    },
    {
      title: "4. Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Encryption",
          text: "Sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols."
        },
        {
          subtitle: "Access Controls",
          text: "Access to personal information is restricted to employees and service providers who need it to perform their job functions."
        },
        {
          subtitle: "Regular Audits",
          text: "We regularly review and update our security practices to ensure the ongoing protection of your information."
        }
      ]
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content: [
        {
          subtitle: "What We Use",
          text: "Our website uses cookies and similar technologies to enhance user experience, analyze site traffic, and remember your preferences."
        },
        {
          subtitle: "Types of Cookies",
          text: "We use essential cookies for website functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings."
        },
        {
          subtitle: "Your Choices",
          text: "You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality."
        }
      ]
    },
    {
      title: "6. Your Privacy Rights",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access your personal information and request corrections to any inaccurate data."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to legal and contractual obligations that require us to retain certain records."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of receiving marketing communications at any time by following the unsubscribe instructions in our emails or contacting us directly."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to request a copy of your personal information in a structured, commonly used format."
        }
      ]
    },
    {
      title: "7. Children's Privacy",
      content: [
        {
          subtitle: "Age Restriction",
          text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children."
        },
        {
          subtitle: "Parental Notice",
          text: "If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information."
        }
      ]
    },
    {
      title: "8. Changes to This Privacy Policy",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements."
        },
        {
          subtitle: "Notification",
          text: "We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
        },
        {
          subtitle: "Your Acceptance",
          text: "Your continued use of our services after changes are posted constitutes your acceptance of the updated Privacy Policy."
        }
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
            <h1 className="text-5xl lg:text-6xl mb-6">Privacy Policy</h1>
            <p className="text-xl text-[#F5EFE0] max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-[#F5EFE0] mt-4">Last Updated: May 27, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Our Privacy Commitment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to protecting your privacy and handling your information responsibly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
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
                <highlight.icon className="size-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl mb-3 text-gray-900">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Privacy Policy */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl mb-6 text-gray-900">Complete Privacy Policy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This Privacy Policy explains how Blackwell Attorneys collects, uses, discloses, and safeguards your
              information when you visit our website or use our legal services. Please read this policy carefully.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl mb-6 text-bronze">{section.title}</h3>
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border" style={{ borderColor: '#D4B87C' }}>
                      <h4 className="text-xl mb-3 text-gray-900">{item.subtitle}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
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
            <div className="flex items-start gap-4 mb-6">
              <Bell className="size-8 text-bronze flex-shrink-0" />
              <div>
                <h3 className="text-2xl mb-4 text-gray-900">Contact Us About Privacy</h3>
                <p className="text-gray-700 mb-6">
                  If you have questions or concerns about this Privacy Policy or our data practices,
                  please contact our Privacy Officer:
                </p>
                <div className="text-gray-700">
                  <p className="mb-2"><strong>Privacy Officer</strong></p>
                  <p>Email: privacy@blackwellattorneys.co.za</p>
                  <p>Phone: +27 21 123 4567</p>
                  <p>Address: 123 Long Street, Cape Town, 8001</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
