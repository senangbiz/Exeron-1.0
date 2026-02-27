import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Thermometer, Shield, CheckCircle, ArrowRight, Droplets, Clock, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: Thermometer,
    title: 'Ventilation for Works in Confined Space',
    description:
      'Proper ventilation will allow hot works being done safely in a confined space. The air change per hour need to meet the requirement to ensure smooth execution and avoiding any hazard and danger.',
    image: '/service-1.jpg',
    features: [
      'Air quality monitoring and control',
      'Continuous airflow management',
      'Hazard prevention systems',
      'Compliance with safety regulations',
      'Real-time environmental tracking',
    ],
    benefits: [
      'Reduces risk of asphyxiation',
      'Prevents buildup of toxic gases',
      'Maintains safe oxygen levels',
      'Improves worker productivity',
    ],
  },
  {
    id: 2,
    icon: Thermometer,
    title: 'Getting Hot Equipment Ready for Maintenance',
    description:
      'Equipment takes quiet sometime to cool down after plant shutdown before any maintenance work could commence. We can get the desired temperature quicker than natural cooling so work could be conducted at earlier time which will save a lot of money.',
    image: '/service-2.jpg',
    features: [
      'Rapid cooling solutions',
      'Temperature control systems',
      'Time-efficient processes',
      'Cost-effective operations',
      'Equipment protection protocols',
    ],
    benefits: [
      'Reduces equipment downtime',
      'Saves maintenance costs',
      'Enables faster turnaround',
      'Protects equipment integrity',
    ],
  },
  {
    id: 3,
    icon: Shield,
    title: 'Protect Plant Asset and Manpower',
    description:
      'Certain equipment are very sensitive with water. With the use of dehumidifier, we can supply air without water vapor whilst cooling the indoor temperature for comfortable and safe working environment.',
    image: '/service-3.jpg',
    features: [
      'Advanced dehumidification',
      'Asset protection systems',
      'Safe environment creation',
      'Moisture control solutions',
      'Climate optimization',
    ],
    benefits: [
      'Prevents equipment corrosion',
      'Extends asset lifespan',
      'Ensures worker safety',
      'Maintains optimal conditions',
    ],
  },
];

const additionalServices = [
  {
    icon: Droplets,
    title: 'Dehumidification',
    description: 'Control humidity levels to prevent condensation and protect sensitive equipment.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock support for urgent ventilation needs and emergencies.',
  },
  {
    icon: Gauge,
    title: 'Air Quality Monitoring',
    description: 'Continuous monitoring of air quality parameters for safety compliance.',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

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
                Our Services
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Guard Your Assets,
              <span className="text-gradient"> Protect Your Manpower</span>
            </h1>
            <p className="text-white/70 text-lg lg:text-xl">
              Comprehensive ventilation solutions designed to ensure safety, 
              efficiency, and productivity in industrial environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                  activeService === index
                    ? 'bg-gradient-brand text-white shadow-brand'
                    : 'bg-brand-light-gray text-brand-navy hover:bg-brand-orange/10'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = services[activeService].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-6">
                  {services[activeService].title}
                </h2>
                <p className="text-brand-medium-gray text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-display font-bold text-lg text-brand-navy mb-4">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-brand-medium-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="p-6 bg-brand-light-gray rounded-xl">
                  <h4 className="font-display font-bold text-lg text-brand-navy mb-4">
                    Benefits
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services[activeService].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-brand-medium-gray text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Additional Services */}
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
                More Services
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
              Additional Solutions
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-medium-gray leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
                How We Work
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
              Our Process
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'We evaluate your site and understand your specific ventilation needs.' },
              { step: '02', title: 'Planning', description: 'Our team designs a customized solution tailored to your requirements.' },
              { step: '03', title: 'Implementation', description: 'Professional installation and setup of ventilation equipment.' },
              { step: '04', title: 'Support', description: 'Ongoing monitoring and maintenance to ensure optimal performance.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-white">{item.step}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-medium-gray text-sm leading-relaxed">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-brand-orange/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Contact us to discuss your specific requirements. Our team will work 
              with you to design a tailored ventilation solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand text-white font-semibold rounded-full hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
