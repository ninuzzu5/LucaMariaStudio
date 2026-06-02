import { motion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const collection = {
  title: 'SS26',
  subtitle: 'TUTTI COLPEVOLI',
  description:
    'La collezione SS26 di Luca Maria Studio esplora il paradosso tra urgenza e inerzia. Ispirata dalla crisi ambientale e dall\'attivismo underground, ogni capo porta un messaggio stampato a mano. Tessuti di recupero, silhouette oversize, denim grezzo — la moda come dichiarazione d\'intenti.',
  looks: [
    {
      number: '01',
      title: 'EMPOWER',
      desc: 'Sciarpa denim e jersey con stampa aerografica EMPOWER. T-shirt con slogan "SORRY WAR". Gonna in pelle sintetica.',
      tags: ['Denim', 'Jersey', 'Pelle sintetica'],
      img: '/img/3.jpeg',
    },
    {
      number: '02',
      title: 'MY RULES MY BODY',
      desc: 'Top a harness con nastro "MY RULES MY BODY" stampato. Gonna denim a vita alta. Accessori in pelle nera.',
      tags: ['Harness', 'Denim', 'Printed tape'],
      img: '/img/4.jpeg',
    },
    {
      number: '03',
      title: 'ACT NOW OR SWIM LATER',
      desc: 'Giacca denim con cappuccio integrato zip-up. Minigonna in vinile. T-shirt slogan con stampa artigianale "ACT NOW OR SWIM LATER". Accessori: maschera da sub.',
      tags: ['Denim', 'Vinile', 'Stampa artigianale'],
      img: '/img/5.jpeg',
    },
    {
      number: '04',
      title: 'WHO OWNS THE STREETS?',
      desc: 'Hoodie oversize con stampa sul cappuccio "WHO OWNS THE STREETS?". Palette bianco sporco e nero.',
      tags: ['Heavyweight cotton', 'Screen print'],
      img: '/img/6.jpeg',
    },
    {
      number: '05',
      title: 'THE BRIEFCASE',
      desc: 'Completo in jersey bianco con cappuccio oversized. Camicia a righe verde pinstripe con cravatta in pelle. Accessori: valigetta alluminio, Timberland rugged.',
      tags: ['Jersey', 'Pinstripe', 'Alluminio'],
      img: '/img/9.jpeg',
    },
  ],
};

export default function Collections({ key }: { key?: string }) {
  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    out: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="w-full bg-[#0A0A0A] relative"
    >
      {/* Background Parallax Typography */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none mix-blend-overlay opacity-20">
        <h1 className="font-declaration text-[40vw] leading-none uppercase text-[#F2F0EC] whitespace-nowrap">
          {collection.title}
        </h1>
      </div>

      <div className="relative z-10 w-full pt-32">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-32 md:mb-64">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#1B4A3A] mb-4">— Collection</p>
          <h2 className="font-declaration text-5xl md:text-8xl leading-[0.85] uppercase text-[#F2F0EC]">
            {collection.subtitle}
          </h2>
          <p className="font-sans text-[#C8C4BC] max-w-xl text-sm leading-relaxed mt-12 pl-0 md:pl-24 mix-blend-exclusion">
            {collection.description}
          </p>
        </div>

        {/* Sticky Looks */}
        <div className="w-full flex flex-col pb-32">
          {collection.looks.map((look, i) => (
            <div key={i} className="relative w-full border-t border-[#F2F0EC]/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Image Side - Sticky */}
                <div className={`h-[50vh] md:h-screen sticky top-0 md:top-0 overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={look.img}
                    alt={look.title}
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-[#0A0A0A]/20 md:bg-[#0A0A0A]/20" />
                  <div className="absolute top-8 left-8 mix-blend-normal md:mix-blend-difference">
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C8C4BC]">
                      Look {look.number}
                    </p>
                  </div>
                </div>

                {/* Text Side - Scrolling Past */}
                <div className={`flex flex-col justify-center px-6 md:px-24 py-24 md:py-32 min-h-[70vh] md:min-h-[120vh] bg-[#0A0A0A] md:bg-transparent ${i % 2 === 1 ? 'md:order-1' : ''} relative z-10`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 1 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="font-declaration text-5xl md:text-7xl uppercase text-[#F2F0EC] mb-12 leading-[0.8] mix-blend-exclusion">
                      {look.title}
                    </h2>
                    <p className="font-sans text-[#C8C4BC] text-sm md:text-base leading-relaxed mb-12 max-w-md">
                      {look.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {look.tags.map(tag => (
                        <span key={tag} className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C8C4BC] border border-[#1B4A3A] px-4 py-2 hover:bg-[#1B4A3A] hover:text-[#0A0A0A] transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#F2F0EC] py-32 text-[#0A0A0A] relative z-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-[#0A0A0A]/20 pb-16">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mb-6">Next Step</p>
              <h3 className="font-declaration text-6xl md:text-8xl uppercase leading-[0.8]">Accedi al<br />Lookbook</h3>
            </div>
            <button className="group flex flex-col items-start gap-3 font-sans text-xs uppercase tracking-[0.3em] text-[#0A0A0A] hover:text-[#1B4A3A] transition-colors">
              <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform duration-500 mb-2" />
              Invia richiesta
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
