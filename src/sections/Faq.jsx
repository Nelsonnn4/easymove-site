import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

/**
 * EASYMOVE HOSPITALITY - FAQ SECTION
 * Style : Minimalisme Boutique, Lignes Fines, Typographie Royale
 * Correction : Application des classes canoniques Tailwind
 */
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      q: "Dans quelles zones proposez-vous vos services ?",
      a: "Nous opérons actuellement dans les points stratégiques du Royaume : Gares de voyageurs, Aéroports Internationaux, ainsi que dans les principaux Hôtels et Riads de Marrakech, Casablanca, Tanger et Rabat."
    },
    {
      q: "Mes bagages sont-ils assurés pendant le transport ?",
      a: "La sécurité est notre priorité absolue. Chaque bagage confié à nos assistants est scellé et couvert par une assurance premium dès sa prise en charge jusqu'à sa remise en main propre."
    },
    {
      q: "Comment se déroule l'assistance pour les personnes à mobilité réduite ?",
      a: "Nos assistants sont formés spécifiquement à l'accompagnement PMR. Nous facilitons le passage des barrières architecturales, aidons à l'installation dans l'hébergement et coordonnons l'accès aux infrastructures touristiques."
    },
    {
      q: "Quel est le délai minimum pour effectuer une réservation ?",
      a: "Bien que nous recommandions une réservation 24h à l'avance pour une organisation optimale, notre service de conciergerie s'efforce de répondre aux demandes urgentes dans un délai de 60 minutes selon la disponibilité."
    },
    {
      q: "Pouvons-nous solliciter un assistant pour une journée complète ?",
      a: "Absolument. Au-delà du simple port de bagages, notre conciergerie inclusive propose des forfaits d'accompagnement à la journée pour faciliter vos visites culturelles et vos déplacements urbains."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-225 mx-auto px-8">
        
        {/* --- EN-TÊTE --- */}
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-6xl text-brand-navy italic mb-6">
            Questions & Réponses
          </h2>
          <div className="h-px w-16 bg-brand-gold mx-auto mb-8 opacity-40"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-navy/50 font-bold">
            Tout ce qu'il faut savoir sur l'expérience EasyMove
          </p>
        </div>

        {/* --- LISTE FAQ --- */}
        <div className="border-t border-brand-navy/10">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-brand-navy/10">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className={`font-serif text-xl md:text-2xl transition-all duration-500 ${
                  activeIndex === index ? 'text-brand-gold italic' : 'text-brand-navy'
                }`}>
                  {item.q}
                </span>
                <div className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  {activeIndex === index ? (
                    <Minus size={20} strokeWidth={1} className="text-brand-gold" />
                  ) : (
                    <Plus size={20} strokeWidth={1} className="text-brand-navy/30 group-hover:text-brand-gold" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-12">
                      <p className="text-brand-navy/60 text-base md:text-lg font-light leading-relaxed font-sans italic border-l border-brand-gold/20 pl-6">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- FOOTER FAQ --- */}
        <div className="mt-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-navy/40 mb-6">
            D'autres questions ? Notre équipe vous répond en direct.
          </p>
          <a 
            href="https://wa.me/yournumber" 
            className="inline-block text-brand-navy font-black text-[10px] uppercase tracking-[0.4em] border border-brand-navy/10 px-10 py-4 rounded-full hover:bg-brand-navy hover:text-white transition-all"
          >
            Contacter le Concierge
          </a>
        </div>

      </div>
    </section>
  );
};

export default Faq;