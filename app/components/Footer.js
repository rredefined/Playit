'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="floating-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
        >
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Onyx</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional game server and VPS hosting solutions with locations worldwide.
            </p>
          </motion.div>
          
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#locations" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#minecraft" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Minecraft Hosting
                </Link>
              </li>
              <li>
                <Link href="#bot" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Bot Hosting
                </Link>
              </li>
              <li>
                <Link href="#domains" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Domain Names
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Support available 24/7</li>
              <li>
                <Link href="#support" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Open Ticket
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p variants={item} className="text-gray-400 text-sm">
              © {currentYear} Onyx. All rights reserved.
            </motion.p>
            <motion.div 
              variants={item}
              className="flex items-center space-x-2 text-sm"
            >
              <span className="text-gray-400">Made with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                ❤️
              </motion.span>
              <span className="text-gray-400">by</span>
              <Link 
                href="https://danishfolio-v2.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                Danish Khan
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 