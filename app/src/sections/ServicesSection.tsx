import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wind, Thermometer, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Wind,
    title: 'Ventilation for Works in Confined Space',
    shortTitle: 'Confined Space',
    description:
      'Proper ventilation will allow hot works being done safely in a confined space. The air change per hour need to meet the requirement to ensure smooth execution and avoiding any hazard and danger.',
    image: '/service-1.jpg',
    features: ['Air quality monitoring', 'Continuous airflow', 'Hazard prevention'],
  },
  {
    id: 2,
    icon: Thermometer,
    title: 'Getting Hot Equipment Ready for Maintenance',
    shortTitle: 'Equipment Cooling',
    description:
      'Equipment takes quiet sometime to cool down after plant shutdown before any maintenance work could commence. We can get the desired temperature quicker than natural cooling so work could be conducted at earlier time.',
    image: '/service-2.jpg',
    features: ['Rapid cooling', 'Temperature control', 'Time efficiency'],
  },
  {
    id: 3,
    icon: Shield,
    title: 'Protect Plant Asset and Manpower',
    shortTitle: 'Asset Protection',
    description:
      'Certain equipment are very sensitive with water. With the use of dehumidifier, we can supply air without water vapor whilst cooling the indoor temperature for comfortable and safe working environment.',
    image: '/service-3.jpg',
    features: ['Dehumidification', 'Asset protection', 'Safe environment'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-brand-light-gray overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange font-semibold text-sm tracking-widest uppercase">
              Our Services
            </span>
            <div className="w-8 h-0.5 bg-brand-orange" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mb-6"
          >
            Guard Your Assets,
            <br />
            <span className="text-gradient">Protect Your Manpower</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-medium-gray text-lg"
          >
            Comprehensive ventilation solutions designed to ensure safety, 
            efficiency, and productivity in industrial environments.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-xl text-white">
                    {service.shortTitle}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-brand-medium-gray text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 bg-brand-light-gray text-brand-navy text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-brand-orange rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-deep-blue transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
