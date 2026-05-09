import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

/**
 * EASYMOVE HOSPITALITY - HERO SECTION
 * Design : Cinématique, Épuré, Side-Info Luxe
 * Slogan : Voyagez léger. Voyagez libre.
 */
const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center bg-brand-navy overflow-hidden px-8 md:px-20">
      
      {/* --- BACKGROUND IMMERSIF (Image Locale : public/hero.jpg) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          className="w-full h-full object-cover opacity-30 grayscale-10" 
          alt="EasyMove Hospitality" 
        />
        {/* Overlay progressif avec syntaxe linear-to-r (Tailwind V4) */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/40 to-transparent z-10" />
      </div>

      {/* --- CONTENU PRINCIPAL (TEXTES & BOUTONS) --- */}
      <div className="relative z-20 max-w-5xl w-full">
        <motion.div {...fadeIn}>
          {/* Titre Principal Editorial mis à jour avec le nouveau slogan */}
          <h1 className="mb-10">
            <span className="block font-serif text-5xl md:text-8xl text-white font-light tracking-tight leading-[1.1]">
              Voyagez léger.
            </span>
            <span className="block font-serif text-4xl md:text-6xl text-brand-gold italic font-extralight mt-3 opacity-90">
              Voyagez libre.
            </span>
          </h1>

          {/* Slogan & Vision Stratégique */}
          <p className="max-w-xl text-brand-cream/50 text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-light leading-loose mb-16 border-l border-brand-gold/30 pl-10">
            Expertise en port de bagages & conciergerie inclusive. <br />
            L'excellence du service au profit de votre mobilité.
          </p>

          {/* ACTIONS CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <button className="w-full sm:w-auto bg-brand-gold text-brand-navy px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-all shadow-2xl shadow-brand-gold/20 flex items-center justify-center gap-3 group">
              Réserver une assistance <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold hover:text-brand-gold transition-colors font-sans underline-offset-8 decoration-brand-gold/30">
              Découvrir nos services <span className="w-8 h-px bg-brand-gold/40 group-hover:w-12 transition-all"></span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- INFOS LATÉRALES (Disponibilité & Couverture) --- */}
      <div className="absolute bottom-16 right-8 md:right-20 z-20 hidden md:flex flex-col gap-16 border-l border-white/10 pl-10">
        {/* Bloc Disponibilité */}
        <div className="flex flex-col gap-3 group cursor-default">
          <div className="flex items-center gap-3 text-brand-gold">
            <Clock size={14} strokeWidth={3} />
            <span className="text-[9px] uppercase tracking-[0.5em] font-black opacity-70">Disponibilité</span>
          </div>
          <span className="text-white font-serif italic text-3xl font-light tracking-wide transition-transform group-hover:translate-x-2 duration-500">
            24h / 7j
          </span>
        </div>

        {/* Bloc Couverture */}
        <div className="flex flex-col gap-3 group cursor-default">
          <div className="flex items-center gap-3 text-brand-gold">
            <ShieldCheck size={14} strokeWidth={3} />
            <span className="text-[9px] uppercase tracking-[0.5em] font-black opacity-70">Couverture</span>
          </div>
          <span className="text-white font-serif italic text-3xl font-light tracking-wide transition-transform group-hover:translate-x-2 duration-500">
            Gares & Aéroports
          </span>
        </div>
      </div>

      {/* Indicateur de scroll minimaliste avec syntaxe linear-to-b */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
        <div className="w-px h-12 bg-linear-to-b from-white/0 via-white to-white/0" />
      </div>
    </section>
  );
};

export default Hero;