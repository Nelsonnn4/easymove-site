import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Zap, Globe } from 'lucide-react';

const values = [
  {
    title: "Inclusion Totale",
    text: "Nous croyons que le voyage est un droit. Nos équipes sont formées pour accompagner chaque personne avec dignité et expertise.",
    icon: <Heart className="text-easymove-gold" />
  },
  {
    title: "Sécurité Garantie",
    text: "Vos bagages sont assurés et nos assistants sont rigoureusement sélectionnés pour leur intégrité et leur professionnalisme.",
    icon: <ShieldCheck className="text-easymove-gold" />
  },
  {
    title: "Flexibilité Maximale",
    text: "Un changement de dernière minute ? Notre service s'adapte à vos imprévus de transport pour un stress zéro.",
    icon: <Zap className="text-easymove-gold" />
  },
  {
    title: "Standard Premium",
    text: "Une qualité de service digne de la conciergerie de luxe, accessible à tous les voyageurs exigeants.",
    icon: <Globe className="text-easymove-gold" />
  }
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Petit décor visuel en fond */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-easymove-light -z-0 rounded-l-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-easymove-blue text-4xl md:text-5xl font-black mb-8 leading-tight">
              Bien plus qu'un service, <br />
              <span className="text-easymove-gold">une mission humaine.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              EasyMove Hospitality est né d'un constat simple : le voyage peut être épuisant et inaccessible pour beaucoup. Nous transformons ces barrières en moments de fluidité.
            </p>
            
            <div className="space-y-8">
              {values.map((v, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-easymove-gold/10 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-easymove-blue font-bold text-xl mb-1">{v.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" 
                alt="Notre engagement"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge de confiance flottant */}
            <div className="absolute -bottom-10 -left-10 bg-easymove-blue p-8 rounded-3xl text-white shadow-2xl hidden md:block">
              <p className="text-3xl font-black text-easymove-gold mb-1">100%</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wider">De satisfaction<br/>voyageur</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;