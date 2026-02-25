import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { AlertTriangle, Eye, Flame, CheckCircle } from 'lucide-react';

const hazards = [
  {
    icon: Eye,
    title: 'Fog and Mist',
    description: 'Reduce visibility in confined spaces',
  },
  {
    icon: AlertTriangle,
    title: 'Noxious Fumes',
    description: 'Dangerous air trapped in enclosed areas',
  },
  {
    icon: Flame,
    title: 'Heat Stress',
    description: 'Heat stroke risk for employees',
  },
];

const solutions = [
  'Controlled humidity levels',
  'Proper temperature management',
  'Continuous air circulation',
  'Safe working environment',
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="aspect-[4/3]"
              >
                <img
                  src="/about-image.jpg"
                  alt="Industrial ventilation monitoring"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">10+</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-brand-navy">Years of Experience</p>
                    <p className="text-brand-medium-gray text-sm">In industrial ventilation</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-brand-orange/20 rounded-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-brand rounded-xl opacity-20" />
          </motion.div>

          {/* Content Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mb-6 leading-tight"
            >
              Why do we need special ventilation for{' '}
              <span className="text-gradient">confined space?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-medium-gray text-lg leading-relaxed mb-8"
            >
              Conducting turn-around / shutdown maintenance operations in the confined 
              space work environment presents many challenges, not the least of which 
              is treated and controlled ventilation. The very nature of the work being 
              performed requires a controlled ventilation for it to have safe climate 
              for employees to achieve maximum production.
            </motion.p>

            {/* Hazards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-4 mb-8"
            >
              {hazards.map((hazard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-brand-light-gray rounded-xl hover:shadow-lg transition-shadow"
                >
                  <hazard.icon className="w-8 h-8 text-brand-red mb-3" />
                  <h4 className="font-display font-bold text-brand-navy text-sm mb-1">
                    {hazard.title}
                  </h4>
                  <p className="text-brand-medium-gray text-xs">{hazard.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Solutions List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-brand-navy to-brand-deep-blue rounded-xl"
            >
              <p className="text-white font-semibold mb-4">
                With the use of dehumidifiers, EXERON can ensure:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span className="text-white/80 text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
