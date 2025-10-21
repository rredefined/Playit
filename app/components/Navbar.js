'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaDiscord, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Locations', href: '#locations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const freeStuffItems = [
    { name: 'Dashboard', href: 'https://dash.yourhost/' },
    { name: 'Panel', href: 'https://panel.yourhost/auth/login' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: 'https://dash.yourhost/' },
    { name: 'Panel', href: 'https://panel.yourhost/auth/login' },
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Onyx Logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="ml-2 text-lg font-semibold">
                Onyx
              </span>
            </div>

            {/* Desktop Navigation - Left Side */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-[14px] text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/[0.04]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.a>
              ))}
              {/* Free Stuff Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-4 py-2 text-[14px] text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/[0.04]
                           flex items-center space-x-1.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Free Stuff</span>
                  <FaChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-1 py-1 bg-[#1a1a1a] border border-white/10 rounded-md shadow-lg"
                    >
                      {freeStuffItems.map((item) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2.5 text-[14px] text-white/70 hover:text-white hover:bg-white/[0.04] whitespace-nowrap"
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white text-[14px] font-medium 
                       rounded-md border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20
                       shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              whileTap={{ scale: 0.98 }}
            >
              <FaDiscord className="w-4 h-4" />
              Join Discord
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white transform origin-center transition-transform"
                ></motion.span>
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-white"
                ></motion.span>
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white transform origin-center transition-transform"
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 w-full z-40 md:hidden border-b border-white/5"
          >
            <div className="bg-black/50 backdrop-blur-xl">
              <div className="max-w-[1600px] mx-auto p-4 flex flex-col space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2.5 text-[14px] text-white/70 hover:text-white hover:bg-white/[0.04] rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                {/* Mobile Free Stuff Links */}
                <div className="px-4 py-2 space-y-1">
                  <div className="text-[14px] text-white/40 font-medium">Free Stuff</div>
                  {freeStuffItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-2 py-2 text-[14px] text-white/70 hover:text-white hover:bg-white/[0.04] rounded-md"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] text-white text-[14px] font-medium 
                           rounded-md border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20
                           shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDiscord className="w-4 h-4" />
                  Join Discord
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 