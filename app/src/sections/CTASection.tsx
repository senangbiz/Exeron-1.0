import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-brand-navy to-brand-deep-blue rounded-3xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight"
                >
                  Ready to Ensure
                  <br />
                  <span className="text-gradient">Safe Ventilation?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-white/70 text-lg mb-8"
                >
                  Contact us today to discuss your confined space ventilation needs. 
                  Our team of experts is ready to provide tailored solutions for your 
                  industrial environment.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 px-8 py-4 bg-gradient-brand text-white font-semibold rounded-full hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Right Content - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6"
              >
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Call Us</p>
                      <a
                        href="tel:+60193231069"
                        className="text-white font-semibold text-lg hover:text-brand-orange transition-colors"
                      >
                        +6019-323 1069
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email Us</p>
                      <a
                        href="mailto:sales@exeron.com.my"
                        className="text-white font-semibold text-lg hover:text-brand-orange transition-colors"
                      >
                        sales@exeron.com.my
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-white/20 rounded-xl">
                  <p className="text-white/60 text-sm mb-2">Business Hours</p>
                  <p className="text-white font-semibold">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-white/80">
                    Saturday: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
