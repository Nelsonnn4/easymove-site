import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Philosophy from './sections/Philosophy';
import Booking from './sections/Booking';
import Faq from './sections/Faq';

/**
 * EASYMOVE HOSPITALITY - PLATEFORME PRINCIPALE
 * Architecture : React + Vite + Framer Motion
 * Design : Ultra-Premium / Editorial Luxury
 * Correction : Application des classes canoniques Tailwind
 */
function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-brand-navy">
      
      {/* --- EN-TÊTE FLOTTANTE --- */}
      <Navbar />

      {/* --- CONTENU PRINCIPAL --- */}
      <main>
        {/* Entrée Cinématique */}
        <Hero />

        {/* Présentation des deux piliers de service */}
        <Services />

        {/* Le protocole et la fluidité du parcours client */}
        <HowItWorks />

        {/* L'innovation stratégique : Avant / Pendant / Après */}
        <Philosophy />

        {/* L'écrin de réservation privé */}
        <Booking />

        {/* Clarification et réassurance finale */}
        <Faq />
      </main>

      {/* --- FOOTER PRESTIGE --- */}
      <footer className="py-24 bg-brand-navy border-t border-white/5">
        <div className="max-w-325 mx-auto px-8 md:px-12">
          <div className="flex flex-col items-center text-center gap-12">
            
            {/* Signature Visuelle */}
            <div className="flex flex-col items-center gap-4 group cursor-default">
              <img 
                src="/logo-easymove.png" 
                alt="EasyMove Logo" 
                className="h-12 w-12 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-700" 
              />
              <div className="flex flex-col">
                <span className="font-serif text-3xl tracking-widest text-white uppercase">
                  EASYMOVE
                </span>
                <span className="text-[9px] uppercase tracking-[0.6em] text-brand-gold font-black mt-1">
                  Hospitality Group
                </span>
              </div>
            </div>

            {/* Slogan de Marque */}
            <p className="font-serif text-xl md:text-2xl text-white/40 italic font-light max-w-md">
              "Voyagez léger. Voyagez libre."
            </p>

            {/* Liens de prestige & Contact */}
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
              <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-gold transition-colors">WhatsApp Concierge</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Partenariats</a>
            </div>

            {/* Crédits & Mentions */}
            <div className="pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[9px] uppercase tracking-widest text-white">
              <span>© 2025 EasyMove Hospitality • Tous droits réservés.</span>
              <div className="flex gap-8 italic">
                <span>Private & Confidential</span>
                <span>Mentions Légales</span>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;