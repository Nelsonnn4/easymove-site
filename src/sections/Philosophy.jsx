import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * EASYMOVE HOSPITALITY - NOTRE VISION (Philosophy)
 * Style : Éditorial, Minimaliste, Timeline de Voyage
 * Correction : Application des classes canoniques Tailwind
 */
const Philosophy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="vision" className="py-32 bg-white overflow-hidden">
      <div className="max-w-325 mx-auto px-8 md:px-12">
        
        {/* --- INTRODUCTION : L'INNOVATION --- */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black mb-6 block">
              L'Innovation EasyMove
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-navy leading-tight mb-8">
              Une expérience globale, <br />
              <span className="italic font-light text-brand-gold">au-delà des standards.</span>
            </h2>
          </motion.div>
          <motion.div {...fadeInUp} className="lg:col-span-5 lg:pt-16">
            <p className="text-brand-navy/60 text-lg font-light leading-relaxed italic">
              "L'innovation réside dans la combinaison de services complémentaires pour un accompagnement total, avant, pendant et après le séjour."
            </p>
          </motion.div>
        </div>

        {/* --- LE PARCOURS : AVANT / PENDANT / APRÈS --- */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 border-t border-brand-navy/5 pt-20">
          
          {/* Étape 1 : Avant */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-3xl text-brand-gold/40 italic">01</span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-navy">L'Arrivée</h4>
            </div>
            <h5 className="font-serif text-2xl text-brand-navy italic">Liberté immédiate.</h5>
            <p className="text-brand-navy/50 text-sm font-light leading-loose">
              Dès votre arrivée en gare ou aéroport, libérez-vous de vos bagages. Notre équipe prend en charge vos effets pour vous permettre de profiter de la ville sans attendre votre check-in.
            </p>
          </motion.div>

          {/* Étape 2 : Pendant */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-3xl text-brand-gold/40 italic">02</span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-navy">Le Séjour</h4>
            </div>
            <h5 className="font-serif text-2xl text-brand-navy italic">Inclusion & Autonomie.</h5>
            <p className="text-brand-navy/50 text-sm font-light leading-loose">
              Une conciergerie dédiée au sein des hôtels et riads. Nous veillons à votre mobilité, à l'accès aux infrastructures et à l'organisation d'activités adaptées à vos besoins spécifiques.
            </p>
          </motion.div>

          {/* Étape 3 : Après */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-3xl text-brand-gold/40 italic">03</span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-navy">Le Départ</h4>
            </div>
            <h5 className="font-serif text-2xl text-brand-navy italic">Transition sereine.</h5>
            <p className="text-brand-navy/50 text-sm font-light leading-loose">
              Nous vous accompagnons jusqu'au dernier instant. Prise en charge des bagages depuis votre chambre jusqu'à votre transport, garantissant un départ fluide et sans fatigue.
            </p>
          </motion.div>

        </div>

        {/* --- IMAGE DE MARQUE (Correction grayscale) --- */}
        <motion.div 
          {...fadeInUp}
          className="mt-32 w-full overflow-hidden rounded-sm grayscale-20 hover:grayscale-0 transition-all duration-1000"
        >
          <img 
            src="/vision.jpg" 
            alt="Hospitalité EasyMove" 
            className="w-full h-auto block opacity-90 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;