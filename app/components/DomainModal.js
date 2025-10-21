'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const DomainModal = ({ isOpen, onClose, domain }) => {
  if (!domain) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg p-8 rounded-2xl modal-content overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-2">Register {domain.extension}</h3>
                <p className="text-white/60 mb-6">Price: {domain.price}</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-8"
              >
                <p className="text-lg">To register this domain, please create a ticket on our Discord server.</p>
                <p className="text-white/60">Our support team will assist you with the registration process.</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#5865F2] text-white font-medium rounded-lg
                           transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4752C4] hover:shadow-lg
                           hover:shadow-[#5865F2]/20"
                >
                  <FaDiscord className="w-5 h-5" />
                  Join Discord
                </a>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <h4 className="text-sm font-medium text-white/60 mb-4">Domain Features</h4>
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center justify-center p-3 rounded-lg bg-white/5">
                    <span className="text-white/80">Free DNS Management</span>
                  </li>
                  <li className="flex items-center justify-center p-3 rounded-lg bg-white/5">
                    <span className="text-white/80">Domain Privacy</span>
                  </li>
                  <li className="flex items-center justify-center p-3 rounded-lg bg-white/5">
                    <span className="text-white/80">Email Forwarding</span>
                  </li>
                  <li className="flex items-center justify-center p-3 rounded-lg bg-white/5">
                    <span className="text-white/80">24/7 Support</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DomainModal; 