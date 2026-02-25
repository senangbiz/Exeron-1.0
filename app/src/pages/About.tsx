import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Shield, CheckCircle, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize the safety of your workforce above all else, ensuring every solution meets the highest safety standards.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Our commitment to quality ensures reliable and efficient ventilation systems that stand the test of time.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.',
  },
];

const milestones = [
  { year: '2014', event: 'Exeron Sdn Bhd founded' },
  { year: '2016', event: 'Expanded service portfolio' },
  { year: '2018', event: '100th project completed' },
  { year: '2020', event: 'Introduced advanced dehumidification' },
  { year: '2023', event: 'Industry leader in Malaysia' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

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
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Leading the Way in
              <span className="text-gradient"> Industrial Ventilation</span>
            </h1>
            <p className="text-white/70 text-lg lg:text-xl">
              With over a decade of experience, Exeron Sdn Bhd has been at the 
              forefront of providing innovative ventilation solutions for confined 
              spaces across Malaysia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.div style={{ y: imageY }} className="aspect-[4/3]">
                  <img
                    src="/service-3.jpg"
                    alt="Industrial ventilation"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-brand rounded-xl opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-brand-orange/20 rounded-xl" />
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brand-navy">Our Mission</h3>
                </div>
                <p className="text-brand-medium-gray leading-relaxed">
                  To provide safe, effective, and efficient confined space climate control 
                  solutions that protect both personnel and equipment. We are committed to 
                  delivering excellence through innovative ventilation technology and 
                  professional service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brand-navy">Our Vision</h3>
                </div>
                <p className="text-brand-medium-gray leading-relaxed">
                  To be the leading provider of industrial ventilation solutions in 
                  Malaysia, recognized for our commitment to safety, innovation, and 
                  customer satisfaction. We aim to set the industry standard for 
                  confined space climate control.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-brand-light-gray">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
                Our Values
              </span>
              <div className="w-8 h-0.5 bg-brand-orange" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-brand-navy"
            >
              What We Stand For
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-brand-medium-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
                Our Journey
              </span>
              <div className="w-8 h-0.5 bg-brand-orange" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-brand-navy"
            >
              Milestones Over the Years
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-8 mb-8 last:mb-0"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="font-display font-bold text-2xl text-brand-orange">
                    {milestone.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-brand rounded-full" />
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-brand-orange/30" />
                  )}
                </div>
                <div className="flex-1 p-4 bg-brand-light-gray rounded-xl">
                  <p className="text-brand-navy font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-brand-orange" />
                <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
                  Why Exeron
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                Why Choose Our
                <span className="text-gradient"> Services?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                We combine technical expertise with practical experience to deliver 
                ventilation solutions that meet your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                'Professional team with industry certifications',
                'State-of-the-art ventilation equipment',
                '24/7 emergency support available',
                'Customized solutions for every project',
                'Competitive pricing with quality assurance',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-brand-orange flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
