import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, type Variants } from 'motion/react';

interface ProjectDetailProps {
  navigate: (page: string) => void;
}

const projects = [
  { title: 'EMPOWER', category: 'Lookbook', year: '2025', img: '/img/3.jpeg' },
  { title: 'WHO OWNS THE STREETS?', category: 'Campaign', year: '2025', img: '/img/6.jpeg' },
  { title: 'MY RULES MY BODY', category: 'Concept', year: '2025', img: '/img/4.jpeg' },
  { title: 'ACT NOW OR SWIM LATER', category: 'Statement', year: '2025', img: '/img/5.jpeg' },
  { title: 'SORRY WAR', category: 'Editorial', year: '2025', img: '/img/1.jpeg' },
  { title: 'DENIM ARCHIVES', category: 'Collection', year: '2025', img: '/img/2.jpeg' },
  { title: 'PORTRAIT I', category: 'Portrait', year: '2025', img: '/img/7.jpeg' },
  { title: 'THE BRIEFCASE', category: 'Look', year: '2025', img: '/img/8.jpeg' },
  { title: 'PORTRAIT II', category: 'Portrait', year: '2025', img: '/img/9.jpeg' },
  { title: 'IN MOTION', category: 'Look', year: '2025', img: '/img/10.jpeg' },
  { title: 'PINSTRIPE', category: 'Detail', year: '2025', img: '/img/11.jpeg' },
  { title: 'NOIR', category: 'Look', year: '2025', img: '/img/12.jpeg' },
  { title: 'FACE', category: 'Portrait', year: '2025', img: '/img/13.jpeg' },
  { title: 'SILHOUETTE', category: 'Look', year: '2025', img: '/img/14.jpeg' },
];

export default function ProjectDetail({ navigate }: ProjectDetailProps) {
  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    out: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);
  const x = useSpring(rawX, {
    stiffness: 85,
    damping: 28,
    mass: 0.35,
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="w-full bg-[#0A0A0A]"
    >
      <header className="px-6 pt-32 md:px-16">
        <button
          onClick={() => navigate('portfolio')}
          className="mb-12 font-sans text-[10px] uppercase tracking-[0.35em] text-[#C8C4BC] transition-colors hover:text-[#F2F0EC]"
        >
          ← Torna all'archivio
        </button>

        <div className="border-y border-[#F2F0EC]/10 py-10 md:py-14">
          <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.4em] text-[#1B4A3A]">
            Campaign / Lookbook / 2026
          </p>
          <h1 className="max-w-6xl font-declaration text-5xl uppercase leading-[0.82] text-[#F2F0EC] md:text-9xl">
            Tutti Colpevoli SS26
          </h1>
        </div>
      </header>

      <section ref={targetRef} className="relative h-[560vh] bg-[#0A0A0A] md:h-[420vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 px-6 md:gap-32 md:px-32">
            {projects.map((project, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={project.title}
                  className={`group relative aspect-[3/4] w-[80vw] shrink-0 cursor-pointer md:w-[35vw] ${isEven ? 'mt-0' : 'mt-8 md:mt-24'}`}
                >
                  <div className="absolute -left-6 top-8 hidden origin-left rotate-[-90deg] font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mix-blend-difference md:block">
                    {project.category}
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-[#0A0A0A]/10 to-transparent" />

                  <h3 className="absolute bottom-4 left-4 right-4 font-declaration text-2xl uppercase leading-[0.85] text-[#F2F0EC] drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="absolute -top-6 right-0 font-sans text-[10px] uppercase tracking-[0.2em] text-[#C8C4BC]">
                    LMS · {project.year}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
