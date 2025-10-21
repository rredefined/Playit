'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PurchaseModal from './components/PurchaseModal';
import Image from 'next/image';
import {
  ServerIcon,
  ShieldCheckIcon,
  ClockIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import LocationModal from './components/LocationModal';
import DomainModal from './components/DomainModal';
import Navbar from './components/Navbar';

const features = [
  {
    title: 'High-Performance Servers',
    description: 'Experience lightning-fast speeds with our premium hardware and network infrastructure.',
    icon: ServerIcon,
  },
  {
    title: 'DDoS Protection',
    description: '24/7 protection against DDoS attacks to keep your services running smoothly.',
    icon: ShieldCheckIcon,
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated support team is always ready to help you with any issues.',
    icon: ClockIcon,
  },
  {
    title: 'Resource Management',
    description: 'Full control over your server resources with our intuitive control panel.',
    icon: CpuChipIcon,
  },
  {
    title: 'Instant Setup',
    description: 'Get your server up and running in minutes with our automated deployment system.',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Competitive Pricing',
    description: 'Best-in-class hosting solutions at affordable prices with no hidden fees.',
    icon: CurrencyDollarIcon,
  },
];

const locations = [
  { name: 'India', flag: '🇮🇳', latency: '5-10ms' },
  { name: 'Germany', flag: '🇩🇪', latency: '40-50ms' },
  { name: 'USA', flag: '🇺🇸', latency: '30-40ms' },
  { name: 'UK', flag: '🇬🇧', latency: '35-45ms' },
  { name: 'Ireland', flag: '🇮🇪', latency: '50-55ms' },
  { name: 'Sweden', flag: '🇸🇪', latency: '50-60ms' },
];

const minecraftPlans = [
  {
    name: 'Stone',
    specs: ['2GB Ram', '100% Cpu', '10GB SSD', '1 Allocation', '2 Database', '2 Backup'],
    price: '70₹/month',
  },
  {
    name: 'Iron',
    specs: ['4GB Ram', '150% Cpu', '15GB SSD', '2 Allocation', '3 Database', '3 Backup'],
    price: '170₹/month',
  },
  {
    name: 'Gold',
    specs: ['8GB Ram', '250% Cpu', '25GB SSD', '3 Allocation', '5 Database', '5 Backup'],
    price: '280₹/month',
  },
  {
    name: 'Diamond',
    specs: ['12GB Ram', '350% Cpu', '40GB SSD', '4 Allocation', '6 Database', '6 Backup'],
    price: '420₹/month',
  },
  {
    name: 'Emerald',
    specs: ['16GB Ram', '450% Cpu', '60GB SSD', '6 Allocation', '10 Database', '10 Backup'],
    price: '560₹/month',
  },
  {
    name: 'Netherite',
    specs: ['32GB Ram', '600% Cpu', '128GB SSD', '8 Allocation', '15 Database', '15 Backup'],
    price: '1,120₹/month',
  },
];

const botPlans = [
  {
    name: 'Starter',
    specs: ['1GB Ram', '100% Cpu', '5GB SSD', '4 MySQL Database', '4 Allocations', '4 Backups'],
    price: '$0.5/₹43',
  },
  {
    name: 'Coder',
    specs: ['2GB Ram', '150% Cpu', '10GB SSD', '6 MySQL Database', '6 Allocation', '6 Backups'],
    price: '$0.75/₹62',
  },
  {
    name: 'Developer',
    specs: ['4GB Ram', '200% Cpu', '15GB SSD', '10 MySQL Database', '10 Allocations', '10 Backups'],
    price: '$1/₹83',
  },
];

const domains = [
  { extension: '.fun', price: '150₹/year' },
  { extension: '.in.net', price: '130₹/year' },
  { extension: '.tech', price: '175₹/year' },
  { extension: '.online', price: '150₹/year' },
  { extension: '.cloud', price: '200₹/year' },
  { extension: '.xyz', price: '225₹/year' },
  { extension: '.com', price: '1,150₹/year' },
  { extension: '.in', price: '550₹/year' },
  { extension: '.net', price: '1,150₹/year' },
  { extension: '.org', price: '850₹/year' },
  { extension: '.shop', price: '160₹/year' },
  { extension: '.store', price: '225₹/year' },
  { extension: '.site', price: '160₹/year' },
];

const faqs = [
  {
    question: 'How quickly can I get my server up and running?',
    answer: 'Our automated deployment system ensures your server is ready within minutes of purchase.',
  },
  {
    question: 'Do you offer refunds?',
    answer: "Yes, we offer a 24-hour money-back guarantee if you're not satisfied with our services.",
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support through our ticket system with quick response times.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can easily upgrade your plan at any time through our control panel.',
  },
];

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isDomainModalOpen, setIsDomainModalOpen] = useState(false);

  const handlePlanSelect = (plan) => {
    if (!plan) return;
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsLocationModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300);
  };

  const handleCloseLocationModal = () => {
    setIsLocationModalOpen(false);
    setTimeout(() => setSelectedLocation(null), 300);
  };

  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
    setIsDomainModalOpen(true);
  };

  const handleCloseDomainModal = () => {
    setIsDomainModalOpen(false);
    setTimeout(() => setSelectedDomain(null), 300);
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="absolute inset-0 hero-bg opacity-50" />
        </div>
        
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="section-heading hero-title">
              Power Your Game with{' '}
              <span className="text-white">KynexLabs</span>
            </h1>

            <p className="section-description">
              High-performance game server hosting with worldwide locations
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href="#pricing" className="btn-primary">
                  View Plans
                </a>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href="#features" className="btn-outline">
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white/30 hover:text-white/50 transition-colors cursor-pointer"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-spacing section-gradient-1">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose KynexLabs?</h2>
            <p className="section-description">Experience the best in game server hosting</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="p-3 rounded-lg bg-white/5 inline-block">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="section-spacing section-gradient-2">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Global Network</h2>
            <p className="section-description">Choose from our strategically placed data centers</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass hover-card p-6 rounded-lg text-center cursor-pointer"
                onClick={() => handleLocationSelect(location)}
              >
                <span className="text-4xl mb-4 block">{location.flag}</span>
                <h3 className="font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-400 text-sm">{location.latency}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-spacing section-gradient-3">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Minecraft Server Hosting</h2>
            <p className="section-description">Choose the perfect plan for your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {minecraftPlans.slice(0, 3).map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="price-card group"
              >
                <div className="relative h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.specs.map((spec, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300">
                        <span className="mr-2 text-white">➜</span> {spec}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-2xl font-bold mb-6">{plan.price}</p>
                    <button 
                      onClick={() => handlePlanSelect(plan)}
                      className="w-full btn-primary relative z-10"
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minecraftPlans.slice(3).map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="price-card group"
              >
                <div className="relative h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.specs.map((spec, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300">
                        <span className="mr-2 text-white">➜</span> {spec}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-2xl font-bold mb-6">{plan.price}</p>
                    <button 
                      onClick={() => handlePlanSelect(plan)}
                      className="w-full btn-primary relative z-10"
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20 mb-16"
          >
            <h2 className="section-title">Bot Hosting</h2>
            <p className="section-description">Reliable hosting for your Discord bots</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {botPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="price-card group"
              >
                <div className="relative h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.specs.map((spec, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300">
                        <span className="mr-2 text-white">➜</span> {spec}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-2xl font-bold mb-6">{plan.price}</p>
                    <button 
                      onClick={() => handlePlanSelect(plan)}
                      className="w-full btn-primary relative z-10"
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20 mb-16"
          >
            <h2 className="section-title">Domain Names</h2>
            <p className="section-description">Register your perfect domain name</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.extension}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleDomainSelect(domain)}
                className="p-4 rounded-lg glass glow group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-semibold mb-2 group-hover:text-white transition-colors">{domain.extension}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{domain.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-spacing section-gradient-4">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">Find answers to common questions about our services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg glass glow group hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors">{faq.question}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={handleCloseLocationModal}
        location={selectedLocation}
      />
      <DomainModal
        isOpen={isDomainModalOpen}
        onClose={handleCloseDomainModal}
        domain={selectedDomain}
      />
    </div>
  );
} 
