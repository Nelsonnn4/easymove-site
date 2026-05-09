import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UserCheck, Sparkles } from 'lucide-react';

/**
 * EASYMOVE HOSPITALITY - HOW IT WORKS
 * Style : Parcours linéaire, Minimalisme, Prestige
 * Correction : Application des classes canoniques Tailwind
 */
const HowItWorks = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const steps = [
    {
      id: "I",
      title: "Réservation Privée",
      desc: "Sélectionnez votre service via notre formulaire minimaliste. Un concierge EasyMove traite votre demande en priorité pour confirmer chaque détail logistique.",
      icon: <CalendarCheck size={20} strokeWidth={1} />
    },
    {
      id: "II",
      title: "Accueil Personnalisé",
      desc: "À l'heure convenue, votre assistant dédié vous attend à votre point d'arrivée ou à votre hôtel. Une prise en charge immédiate, humaine et discrète.",
      icon: <UserCheck size={20} strokeWidth={1} />
    },
    {
      id: "III",
      title: "Liberté Absolue",
      desc: "Déplacez-vous sans contraintes. Que ce soit pour vos bagages ou votre mobilité personnelle, nous veillons à ce que votre voyage soit d'une fluidité totale.",
      icon: <Sparkles size={20} strokeWidth={1} />
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white overflow-hidden">
      <div className="max-w-325 mx-auto px-8 md:px-12">
        
        {/* --- EN-TÊTE --- */}
        <motion.div {...fadeInUp} className="mb-24">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black mb-6 block">Le Protocole</span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-navy leading-tight italic">
            Une simplicité <br />
            <span className="font-light text-brand-gold not-italic">orchestrée pour vous.</span>
          </h2>
        </motion.div>

        {/* --- GRILLE DES ÉTAPES --- */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 relative">
          {/* Ligne de fond décorative (Desktop) - Correction h-[1px] en h-px */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand-gold/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              {...fadeInUp} 
              transition={{ delay: index * 0.2, duration: 1 }}
              className="relative z-10 flex flex-col items-start group"
            >
              {/* Cercle et Numéro */}
              <div className="w-16 h-16 rounded-full bg-brand-cream border border-brand-gold/20 flex items-center justify-center mb-10 group-hover:border-brand-gold transition-all duration-700">
                <span className="font-serif text-2xl text-brand-gold italic font-light">{step.id}</span>
              </div>

              {/* Contenu */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-brand-navy/40">
                  {step.icon}
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-black italic">Étape {index + 1}</h4>
                </div>
                <h3 className="font-serif text-3xl text-brand-navy font-light tracking-tight">{step.title}</h3>
                <p className="text-brand-navy/50 text-sm font-light leading-loose italic">
                  {step.desc}
                </p>
              </div>

              {/* Décoration de liaison mobile - Correction w-[1px] en w-px */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-px h-12 bg-brand-gold/20 my-8 mx-auto"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- IMAGE DE TRANSITION (Très sobre) --- */}
        <motion.div 
          {...fadeInUp}
          className="mt-32 p-1 border border-brand-gold/10 rounded-sm"
        >
          <div className="w-full h-2 bg-brand-navy opacity-[0.03]"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;