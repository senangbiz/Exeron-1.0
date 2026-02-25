import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, Wind } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'D2-3, Jalan Selaman 1, Dataran De Palma Ampang, 56100 Kuala Lumpur',
    link: null,
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sales@exeron.com.my',
    link: 'mailto:sales@exeron.com.my',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+6019-323 1069',
    link: 'tel:+60193231069',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 8:00 AM - 6:00 PM\nSat: 8:00 AM - 1:00 PM',
    link: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-brand-red/20" />
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
                Contact Us
              </span>
              <div className="w-8 h-0.5 bg-brand-orange" />
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Ventilate with
              <span className="text-gradient"> Us!</span>
            </h1>
            <p className="text-white/70 text-lg lg:text-xl">
              Get in touch with our team to discuss your ventilation needs. 
              We're here to help you create a safer working environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Wind className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-2xl text-brand-navy">EXERON</span>
                    <span className="block text-[10px] tracking-widest uppercase text-brand-medium-gray">
                      Sdn Bhd
                    </span>
                  </div>
                </div>
                <p className="text-brand-medium-gray leading-relaxed">
                  Ready to discuss your confined space ventilation needs? 
                  Contact us today and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-navy mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-brand-medium-gray hover:text-brand-orange transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-brand-medium-gray whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-brand-light-gray p-8 lg:p-10 rounded-2xl">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">
                      Thank You!
                    </h3>
                    <p className="text-brand-medium-gray">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-6">
                      Send Us a Message
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                          placeholder="+60 123 456 789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-brand-navy mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-brand text-white font-semibold rounded-xl hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-brand-light-gray">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
                Find Us
              </span>
              <div className="w-8 h-0.5 bg-brand-orange" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy">
              Our Location
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.75!3d3.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDknMDAuMCJOIDEwMcKwNDUnMDAuMCJF!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Exeron Sdn Bhd Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
