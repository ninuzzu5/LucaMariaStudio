import { motion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Marquee from '../components/Marquee';

interface HomeProps {
  navigate: (page: string) => void;
  key?: string;
}

const featuredWorks = [
  { title: 'EMPOWER', category: 'Lookbook', img: '/img/3.jpeg' },
  { title: 'MY RULES MY BODY', category: 'Campaign', img: '/img/4.jpeg' },
  { title: 'ACT NOW OR SWIM AFTER', category: 'Statement', img: '/img/5.jpeg' },
  { title: 'WHO OWNS THE STREETS?', category: 'Concept', img: '/img/6.jpeg' },
];

export default function Home({ navigate }: HomeProps) {
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
      className="w-full"
    >
      {/* Hero */}
      <section className="h-screen relative flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/img/6.jpeg"
            className="w-full h-full object-cover object-top"
            alt="LMS Hero"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/30 to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 flex flex-col justify-end h-full pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-declaration text-[24vw] md:text-[14vw] leading-[0.75] uppercase text-[#F2F0EC] -ml-2 md:-ml-4 mix-blend-overlay"
          >
            TUTTI
            <br />
            <span className="inline-block origin-left scale-x-[0.68] whitespace-nowrap pl-1 tracking-[-0.08em] text-[#F2F0EC]/20 sm:scale-x-100 sm:text-[19vw] sm:tracking-[-0.05em] md:pl-32 md:text-[14vw]">
              COLPEVOLI
            </span>
            <br />
            SS26
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 sm:absolute sm:right-12 sm:bottom-32 sm:mt-0"
          >
            <button
              onClick={() => navigate('collections')}
              className="group flex flex-col items-start gap-2 font-sans text-xs uppercase tracking-[0.2em] text-[#F2F0EC] hover:text-[#C8C4BC] transition-colors"
            >
              <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform duration-500 mb-2" />
              Scopri la collezione
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full z-10">
          <Marquee text="APPARTENENZA · RIBELLIONE · EMPATIA · SPERIMENTAZIONE" bg="bg-[#1E2D4A]" color="text-[#F2F0EC]" />
        </div>
      </section>

      {/* Split — Manifesto Overlapping */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="relative min-h-[80vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[50%] lg:w-[45%] aspect-[4/5] z-0"
          >
            <img
              src="/img/8.jpeg"
              alt="LMS Lookbook"
              className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/40 md:bg-[#0A0A0A]/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 w-full md:w-[50%] mt-[25vh] md:mt-0 bg-[#0A0A0A]/60 md:bg-[#0A0A0A]/40 backdrop-blur-md p-6 md:p-12 border border-[#F2F0EC]/10"
            style={{ mixBlendMode: 'normal' }}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#1B4A3A] mb-8">— Manifesto</p>
            <h2 className="font-declaration text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.8] mb-10 text-[#F2F0EC]">
              ARTE<br />
              <span className="text-[#F2F0EC]/30 ml-8">CHE</span><br />
              <span className="text-[#1B4A3A]">PARLA</span>
            </h2>
            <p className="font-sans text-[#F2F0EC] text-sm md:text-base leading-relaxed mb-12 max-w-sm mix-blend-exclusion">
              LMS nasce dall&apos;incontro tra arte, moda e streetwear. 
              L&apos;obiettivo è trasformare ogni capo in un mezzo di 
              comunicazione capace di trasmettere messaggi sociali e culturali.
              Ogni pezzo è unico. Ogni pezzo è un atto.
            </p>
            <button
              onClick={() => navigate('about')}
              className="group flex items-center gap-4 font-sans text-xs uppercase tracking-[0.3em] text-[#F2F0EC] hover:text-[#1B4A3A] transition-colors w-fit pb-2 border-b border-[#F2F0EC]/30 hover:border-[#1B4A3A]"
            >
              Chi siamo
              <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Asymmetric Featured Works */}
      <section className="py-32 bg-[#F2F0EC] text-[#0A0A0A]">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-[#0A0A0A]/10 pb-12">
            <h2 className="font-declaration text-7xl md:text-9xl uppercase leading-[0.8] tracking-tighter mix-blend-difference text-[#F2F0EC]">
              Selected<br />Works
            </h2>
            <button
              onClick={() => navigate('portfolio')}
              className="mt-8 md:mt-0 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] hover:text-[#0A0A0A] transition-colors border border-[#1B4A3A] rounded-full px-6 py-3"
            >
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Work 1 - Huge Landscape */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-12 group cursor-pointer relative overflow-hidden aspect-[16/9] md:aspect-[21/9]"
              onClick={() => navigate('portfolio')}
            >
              <img src={featuredWorks[0].img} alt={featuredWorks[0].title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F2F0EC] mb-2">{featuredWorks[0].category}</p>
                  <h3 className="font-declaration text-4xl md:text-6xl uppercase text-[#F2F0EC]">{featuredWorks[0].title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#F2F0EC] flex items-center justify-center text-[#F2F0EC] group-hover:bg-[#F2F0EC] group-hover:text-[#0A0A0A] transition-colors"><ArrowRight size={20} /></div>
              </div>
            </motion.div>

            {/* Work 2 - Tall Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 md:mt-24 group cursor-pointer relative overflow-hidden aspect-[3/4]"
              onClick={() => navigate('portfolio')}
            >
              <img src={featuredWorks[1].img} alt={featuredWorks[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-[#0A0A0A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="font-declaration text-3xl md:text-5xl uppercase text-[#F2F0EC] text-center px-4 mix-blend-overlay">{featuredWorks[1].title}</h3>
              </div>
            </motion.div>

            {/* Work 3 - Square offset */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-6 md:col-start-7 group cursor-pointer relative overflow-hidden aspect-square"
              onClick={() => navigate('portfolio')}
            >
              <img src={featuredWorks[2].img} alt={featuredWorks[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-6 left-6 mix-blend-difference">
                 <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F2F0EC]">{featuredWorks[2].category}</p>
                 <h3 className="font-declaration text-3xl md:text-5xl uppercase text-[#F2F0EC] mt-2">{featuredWorks[2].title}</h3>
              </div>
            </motion.div>

            {/* Work 4 - Panoramic */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-10 md:col-start-2 group cursor-pointer relative overflow-hidden aspect-[16/7]"
              onClick={() => navigate('portfolio')}
            >
              <img src={featuredWorks[3].img} alt={featuredWorks[3].title} className="w-full h-full object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-[#0A0A0A]/20" />
              <h3 className="absolute bottom-6 left-6 font-declaration text-3xl md:text-6xl uppercase text-[#F2F0EC] shadow-black/50 drop-shadow-xl">{featuredWorks[3].title}</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8 border-t border-[#F2F0EC]/10 pt-8 md:pt-16">
          {['Appartenenza', 'Ribellione', 'Empatia', 'Sperimentazione'].map((val, i) => (
            <motion.div
              key={val}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-end justify-between gap-6 border-b border-[#F2F0EC]/10 py-6 md:block md:border-b-0 md:py-0"
            >
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] md:mb-3">0{i + 1}</p>
              <h3 className="max-w-[72vw] text-right font-declaration text-3xl uppercase leading-none text-[#F2F0EC] md:max-w-none md:text-left">
                {val}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
