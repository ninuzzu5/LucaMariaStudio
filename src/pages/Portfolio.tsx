import { motion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface PortfolioProps {
  navigate: (page: string) => void;
}

const featuredProject = {
  title: 'TUTTI COLPEVOLI SS26',
  category: 'Campaign / Lookbook',
  year: '2026',
  img: '/img/1.jpeg',
};

export default function Portfolio({ navigate }: PortfolioProps) {
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
      className="w-full bg-[#0A0A0A] text-[#F2F0EC]"
    >
      <div className="px-6 pt-32 md:px-16">
        <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.4em] text-[#1B4A3A]">— Archivio</p>
        <div className="flex flex-col gap-6 border-b border-[#F2F0EC]/10 pb-10 md:flex-row md:items-end md:justify-between">
          <h1 className="font-declaration text-6xl uppercase leading-[0.82] md:text-9xl">
            Portfolio
          </h1>
          <p className="max-w-sm font-sans text-xs uppercase leading-relaxed tracking-[0.22em] text-[#C8C4BC]">
            Archivio campagne, lookbook e progetti editoriali di Luca Maria Studio.
          </p>
        </div>
      </div>

      <section className="px-6 py-16 md:px-16 md:py-24">
        <motion.button
          type="button"
          onClick={() => navigate('tutti-colpevoli')}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative grid w-full cursor-pointer overflow-hidden border border-[#F2F0EC]/10 bg-[#0A0A0A] text-left md:grid-cols-12"
        >
          <div className="relative min-h-[68vh] overflow-hidden md:col-span-8 md:min-h-[78vh]">
            <img
              src={featuredProject.img}
              alt={featuredProject.title}
              className="h-full w-full object-cover object-top grayscale-[20%] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#0A0A0A]/10 md:to-[#0A0A0A]/80" />
          </div>

          <div className="relative flex min-h-[26rem] flex-col justify-between border-t border-[#F2F0EC]/10 p-6 md:col-span-4 md:border-l md:border-t-0 md:p-10">
            <div>
              <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.35em] text-[#1B4A3A]">
                {featuredProject.category} / {featuredProject.year}
              </p>
              <h2 className="font-declaration text-5xl uppercase leading-[0.8] text-[#F2F0EC] md:text-7xl">
                {featuredProject.title}
              </h2>
            </div>

            <div className="flex items-end justify-between gap-8">
              <p className="max-w-[15rem] font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[#C8C4BC]">
                Entra nel progetto e scorri il lookbook editoriale.
              </p>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F2F0EC]/40 text-[#F2F0EC] transition-all duration-300 group-hover:border-[#1B4A3A] group-hover:bg-[#1B4A3A]">
                <ArrowRight size={18} />
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[#1B4A3A]/0 transition-colors duration-500 group-hover:bg-[#1B4A3A]/10" />
            <div className="pointer-events-none absolute bottom-6 left-6 font-sans text-[10px] uppercase tracking-[0.3em] text-[#F2F0EC]/0 transition-colors duration-500 group-hover:text-[#F2F0EC]/45 md:bottom-10 md:left-10">
              Apri progetto
            </div>
          </div>
        </motion.button>
      </section>
    </motion.div>
  );
}
