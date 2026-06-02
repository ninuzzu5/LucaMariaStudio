import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';

export default function Portfolio({ key }: { key?: string }) {
  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    out: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

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

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="w-full bg-[#0A0A0A]"
    >
      <div className="pt-32 px-6 md:px-16 mb-8">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#1B4A3A] mb-4">— Archivio</p>
        <h1 className="font-declaration text-6xl md:text-9xl uppercase text-[#F2F0EC]">
          Portfolio
        </h1>
      </div>

      <section ref={targetRef} className="relative h-[420vh] bg-[#0A0A0A]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-6 md:px-32">
            {projects.map((project, i) => {
              // Alternate vertical placement for a broken lookbook feel
              const isEven = i % 2 === 0;
              return (
                <div 
                  key={i} 
                  className={`relative shrink-0 w-[80vw] md:w-[35vw] aspect-[3/4] group cursor-pointer ${isEven ? 'mt-0' : 'mt-8 md:mt-24'}`}
                >
                  <div className="absolute -left-6 top-8 font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] rotate-[-90deg] origin-left mix-blend-difference hidden md:block">
                    {project.category}
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 origin-center grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-[#0A0A0A]/10 to-transparent" />
                  
                  <h3 className="absolute bottom-4 left-4 right-4 font-declaration text-2xl md:text-4xl uppercase leading-[0.85] text-[#F2F0EC] drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
                    {project.title}
                  </h3>
                  <p className="absolute -top-6 right-0 font-sans text-[10px] uppercase tracking-[0.2em] text-[#C8C4BC]">LMS · {project.year}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
