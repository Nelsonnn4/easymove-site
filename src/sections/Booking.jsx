import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

/**
 * EASYMOVE HOSPITALITY - BOOKING SECTION
 * Style : Luxe Sombre, Minimalisme, Premium Inquiry
 */
const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-32 bg-brand-black text-white overflow-hidden relative">
      {/* Éléments de décor subtils */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/20 -skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-250 mx-auto px-8 relative z-10">
        
        {/* --- EN-TÊTE --- */}
        <div className="text-center mb-20">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-black mb-6 block">
            Conciergerie Privée
          </span>
          <h2 className="font-serif text-5xl md:text-7xl mb-6 italic font-light">
            Réserver votre sérénité.
          </h2>
          <div className="h-px w-20 bg-brand-gold/30 mx-auto"></div>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="space-y-16"
            >
              {/* --- GRILLE DE SAISIE --- */}
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                
                {/* Service */}
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4 focus-within:border-brand-gold transition-colors">
                  <label className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">Nature de l'assistance</label>
                  <select className="bg-transparent font-serif text-xl md:text-2xl outline-none italic text-white/80 cursor-pointer">
                    <option className="bg-brand-black">Port de Bagages Premium</option>
                    <option className="bg-brand-black">Conciergerie Handicap & PMR</option>
                    <option className="bg-brand-black">Service Complet (Logistique & Mobilité)</option>
                  </select>
                </div>

                {/* Destination */}
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4 focus-within:border-brand-gold transition-colors">
                  <label className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">Lieu ou Établissement</label>
                  <input 
                    type="text" 
                    placeholder="Gare, Aéroport, Riad..." 
                    className="bg-transparent font-serif text-xl md:text-2xl outline-none italic text-white placeholder:text-white/10"
                    required
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4 focus-within:border-brand-gold transition-colors">
                  <label className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">Date souhaitée</label>
                  <input 
                    type="date" 
                    className="bg-transparent font-serif text-xl md:text-2xl outline-none text-white/80 cursor-pointer invert"
                    required
                  />
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4 focus-within:border-brand-gold transition-colors">
                  <label className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">WhatsApp ou Email</label>
                  <input 
                    type="text" 
                    placeholder="Pour votre confirmation..." 
                    className="bg-transparent font-serif text-xl md:text-2xl outline-none italic text-white placeholder:text-white/10"
                    required
                  />
                </div>

              </div>

              {/* --- BOUTON D'ENVOI --- */}
              <div className="flex flex-col items-center gap-8 pt-10">
                <button 
                  type="submit"
                  className="group relative overflow-hidden bg-brand-gold text-brand-navy px-16 py-6 rounded-full text-[11px] uppercase tracking-[0.4em] font-black hover:bg-white transition-all duration-500 shadow-2xl shadow-brand-gold/10"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    Envoyer ma demande <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
                
                <div className="flex items-center gap-3 text-white/20 text-[9px] uppercase tracking-widest">
                  <ShieldCheck size={14} />
                  <span>Confidentialité & Sécurité garantie</span>
                </div>
              </div>

            </motion.form>
          ) : (
            /* --- MESSAGE DE SUCCÈS --- */
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center space-y-8"
            >
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-10">
                <CheckCircle2 size={40} className="text-brand-gold" />
              </div>
              <h3 className="font-serif text-4xl md:text-5xl italic text-white">Demande reçue.</h3>
              <p className="text-brand-cream/40 text-sm uppercase tracking-widest leading-loose max-w-md mx-auto">
                Un concierge EasyMove traitera votre demande <br /> dans les 15 prochaines minutes.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-gold/30 pb-2 hover:text-white transition-colors"
              >
                Nouvelle demande
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Booking;