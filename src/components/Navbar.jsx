import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * EASYMOVE HOSPITALITY - NAVBAR COMPONENT
 * Correction : Application des classes canoniques Tailwind
 * Fonctionnalité : Redirection vers la section Réservation (#booking)
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Détection du scroll pour l'effet de métamorphose
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Nos Services', href: '#services' },
    { name: 'Notre Vision', href: '#vision' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-1000 px-6 md:px-16 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-360 mx-auto flex justify-between items-center transition-all duration-700 pointer-events-auto ${
          isScrolled 
            ? 'mt-4 py-3 px-8 bg-brand-navy/60 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
            : 'mt-0 py-10 px-4 bg-transparent border-transparent shadow-none'
        }`}
      >
        {/* --- BRANDING / LOGO --- */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative h-12 w-12 flex items-center justify-center">
            <img 
              src="/logo-easymove.png" 
              alt="EasyMove Hospitality Logo" 
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <div className="flex flex-col border-l border-white/10 pl-4">
            <span className="font-serif text-2xl tracking-widest text-white leading-none uppercase">
              EASY<span className="text-brand-gold italic font-light">MOVE</span>
            </span>
            <span className="text-[7px] uppercase tracking-[0.5em] text-brand-gold font-black mt-1">
              Hospitality
            </span>
          </div>
        </div>

        {/* --- NAVIGATION DESKTOP --- */}
        <nav className="hidden lg:flex items-center gap-16">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 relative group text-white/80 hover:text-brand-gold`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-brand-gold transition-all duration-500 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </nav>

        {/* --- ACTION CTA --- */}
        <div className="flex items-center gap-6">
          <a 
            href="#booking"
            className={`hidden md:block px-9 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 transform active:scale-95 bg-brand-gold text-brand-navy hover:bg-white text-center shadow-xl shadow-brand-gold/10`}
          >
            Réserver maintenant
          </a>

          {/* Trigger Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors text-white`}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.div>

      {/* --- MENU MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-brand-navy/95 backdrop-blur-2xl flex flex-col p-12 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-serif text-2xl text-white tracking-widest italic font-light uppercase">EasyMove</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              {menuLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-serif text-white/90 hover:text-brand-gold italic transition-all font-light"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-white/10">
              <a 
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-brand-gold text-brand-navy py-6 rounded-full text-xs uppercase tracking-[0.4em] font-black shadow-xl shadow-brand-gold/10 text-center block"
              >
                Réserver maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;