'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CpuChipIcon, 
  ServerIcon, 
  ShieldCheckIcon,
  CircleStackIcon 
} from '@heroicons/react/24/outline';

const specs = {
  ram: '1.2TB DDR5 RAM',
  storage: '10TB NVME',
  cpu: 'Intel Core i9-14900K',
  protection: '25TBPS DDOS PROTECTION'
};

const LocationModal = ({ isOpen, onClose, location }) => {
  if (!location) return null;

  const specs_with_icons = [
    { icon: ServerIcon, label: 'Memory', value: specs.ram },
    { icon: CircleStackIcon, label: 'Storage', value: specs.storage },
    { icon: CpuChipIcon, label: 'Processor', value: specs.cpu },
    { icon: ShieldCheckIcon, label: 'Protection', value: specs.protection },
  ];

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
            className="relative w-full max-w-2xl p-8 rounded-2xl modal-content overflow-hidden"
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
            <div className="text-center mb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="text-6xl">{location.flag}</span>
                <div>
                  <h3 className="text-3xl font-bold">{location.name} Node</h3>
                  <p className="text-white/60">Latency: {location.latency}</p>
                </div>
              </motion.div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs_with_icons.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-xl glass-card relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/5">
                      <spec.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{spec.label}</h4>
                      <p className="text-white/80">{spec.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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

export default LocationModal; 