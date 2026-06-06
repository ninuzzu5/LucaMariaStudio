import { motion, type Variants } from 'motion/react';
import Marquee from '../components/Marquee';
import ValuesStrip from '../components/ValuesStrip';

export default function About() {
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
      className="w-full pt-32 bg-[#0A0A0A] text-[#F2F0EC]"
    >
      {/* Brutalist Hero */}
      <div className="w-full px-6 mb-32 relative">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#1B4A3A] mb-8">— Studio / Manifesto</p>
        
        {/* Massive full-width text */}
        <h1 className="font-declaration text-[22vw] leading-[0.75] uppercase text-[#F2F0EC] tracking-tighter break-words hyphens-none">
          LUCA<br />MARIA<br />STUDIO
        </h1>

        {/* Floating image over text */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-10 top-1/2 w-[40vw] max-w-[400px] aspect-[4/5] z-10 hidden md:block mix-blend-lighten"
        >
          <img src="/img/9.jpeg" alt="LMS Portrait" className="w-full h-full object-cover grayscale" />
        </motion.div>
      </div>

      <Marquee text="APPARTENENZA · RIBELLIONE · EMPATIA · SPERIMENTAZIONE" bg="bg-[#F2F0EC]" color="text-[#0A0A0A]" />

      {/* Brutalist Typographic Blocks */}
      <section className="w-full mt-32">
        
        {/* riga 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-y border-[#F2F0EC]/20">
          <div className="col-span-1 border-r border-[#F2F0EC]/20 p-6 hidden md:block">
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#1B4A3A] [writing-mode:vertical-rl] rotate-180 h-full">Vision</p>
          </div>
          <div className="col-span-11 p-6 md:p-16 relative overflow-hidden">
            <h2 className="font-declaration text-5xl md:text-8xl lg:text-[9vw] leading-[0.8] mb-12 uppercase mix-blend-difference z-10 relative">
              Streetwear<br />Concettuale
            </h2>
            <p className="font-sans text-xl md:text-3xl max-w-3xl leading-snug uppercase tracking-wider text-[#C8C4BC]">
              Diventare un punto di riferimento nello streetwear concettuale, dove il design è al servizio di un messaggio e non solo di una tendenza.
            </p>
          </div>
        </div>

        {/* riga 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#F2F0EC]/20">
          <div className="col-span-11 p-6 md:p-16 border-r border-[#F2F0EC]/20 relative">
             <h2 className="font-declaration text-5xl md:text-8xl lg:text-[7vw] leading-[0.8] mb-12 uppercase mix-blend-difference z-10 relative text-right">
              Community<br />& Identità
            </h2>
            <div className="flex justify-end">
              <p className="font-sans text-xl md:text-2xl max-w-2xl text-right leading-snug text-[#C8C4BC]">
                Creare una forte community che abbraccia l'etica del brand,
                riflettendo la società contemporanea e dando voce a chi spesso
                non viene ascoltato. Ogni capo è realizzato come pezzo unico.
              </p>
            </div>
            
            {/* Small floating detail image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-10 xl:left-16 top-1/2 -translate-y-1/2 
                        w-[32vw] max-w-[420px] min-w-[300px] 
                        aspect-[4/5] z-0 hidden lg:block"
            >
              <img
                src="/img/11.jpeg"
                alt="Detail"
                className="w-full h-full object-cover opacity-80 grayscale contrast-125"
              />
            </motion.div>
          </div>
          <div className="col-span-1 p-6 hidden md:block">
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#1B4A3A] [writing-mode:vertical-rl] h-full">Mission</p>
          </div>
        </div>

        {/* Values strip */}
        <ValuesStrip />

      </section>
    </motion.div>
  );
}
