import React from 'react';
import { motion } from 'framer-motion';
import { Luggage, Heart, ChevronRight } from 'lucide-react';

/**
 * EASYMOVE HOSPITALITY - SERVICES SECTION
 * Style : Sobritété, Chic & Équilibre Parfait
 * Correction : Application des classes canoniques Tailwind
 */
const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="services" className="py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-325 mx-auto px-8 md:px-12">
        
        {/* --- EN-TÊTE DE SECTION --- */}
        <motion.div {...fadeInUp} className="text-center mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6 tracking-widest uppercase font-light">
            Nos Services
          </h2>
          <div className="h-px w-16 bg-brand-gold mx-auto mb-8 opacity-50"></div>
          <p className="max-w-xl mx-auto text-brand-navy/50 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold leading-relaxed">
            L'excellence logistique au service <br />
            de l'hospitalité inclusive.
          </p>
        </motion.div>

        {/* --- SERVICE 1 : PORT DE BAGAGES --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-48">
          {/* Image centrée visuellement */}
          <motion.div {...fadeInUp} className="relative group">
            <div className="aspect-4/5 overflow-hidden rounded-sm shadow-xl bg-brand-navy/5">
              <img 
                src="/service-luggage.jpg" 
                alt="Service de port de bagages" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-90"
              />
            </div>
            {/* Ligne décorative discrète */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-brand-gold/20 -z-10"></div>
          </motion.div>

          {/* Texte centré verticalement */}
          <motion.div {...fadeInUp} className="flex flex-col items-start">
            <div className="flex items-center gap-4 text-brand-gold mb-6">
              <Luggage size={20} strokeWidth={1} />
              <span className="text-[9px] uppercase tracking-[0.4em] font-black">Service 01</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6 leading-tight">
              Port de bagages & <br /> <span className="italic font-light text-brand-gold">Mobilité.</span>
            </h3>
            <p className="text-brand-navy/70 text-base font-light leading-relaxed mb-8 italic">
              "Libérez-vous de toute contrainte logistique. Nous gérons vos transferts de bagages pour une sérénité totale."
            </p>
            <p className="text-brand-navy/50 text-sm font-light leading-loose mb-10 max-w-md">
              Intervention en gares et aéroports. Idéal pour les arrivées anticipées ou les départs tardifs, garantissant un confort absolu aux seniors et familles.
            </p>
            <button className="group flex items-center gap-3 text-brand-navy text-[10px] uppercase tracking-[0.3em] font-black border-b border-brand-gold/20 pb-2 hover:border-brand-gold transition-all">
              Découvrir l'offre <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* --- SERVICE 2 : CONCIERGERIE HANDICAP --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Texte */}
          <motion.div {...fadeInUp} className="order-2 lg:order-1 flex flex-col items-start">
            <div className="flex items-center gap-4 text-brand-gold mb-6">
              <Heart size={20} strokeWidth={1} />
              <span className="text-[9px] uppercase tracking-[0.4em] font-black">Service 02</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6 leading-tight">
              Conciergerie <br /> <span className="italic font-light text-brand-gold">Inclusive.</span>
            </h3>
            <p className="text-brand-navy/70 text-base font-light leading-relaxed mb-8 italic">
              "L'assistance humaine au cœur de votre séjour, pour une autonomie garantie dans les plus beaux établissements."
            </p>
            <p className="text-brand-navy/50 text-sm font-light leading-loose mb-10 max-w-md">
              Aide à la mobilité et organisation d'activités adaptées en hôtels et riads. Nous veillons à ce que chaque infrastructure soit accessible et agréable.
            </p>
            <button className="group flex items-center gap-3 text-brand-navy text-[10px] uppercase tracking-[0.3em] font-black border-b border-brand-gold/20 pb-2 hover:border-brand-gold transition-all">
              Détails de l'assistance <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Image */}
          <motion.div {...fadeInUp} className="order-1 lg:order-2 relative group">
            <div className="aspect-4/5 overflow-hidden rounded-sm shadow-xl bg-brand-navy/5">
              <img 
                src="/service-concierge.jpg" 
                alt="Conciergerie Handicap" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-90"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-brand-gold/20 -z-10"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;