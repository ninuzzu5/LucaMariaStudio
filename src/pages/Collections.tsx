import { useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

const collection = {
  title: 'SS26',
  subtitle: 'TUTTI COLPEVOLI',
  description:
    'La collezione SS26 di Luca Maria Studio trasforma il corpo in superficie narrativa: capi unici, lavorazioni manuali e slogan che prendono posizione.',
  looks: [
    {
      number: '01',
      title: 'SORRY WAR VICTIMS',
      desc: 'Longsleeve 100% cotone aerografata artigianalmente con spalline in pelle. Denim bottom aerografato artigianalmente. Balaclava rigato.',
      tags: ['Longsleeve 100% cotone', 'Denim bottom', 'Balaclava rigato'],
      img: '/img/13.jpeg',
      imagePosition: 'object-center',
      gallery: ['/img/13.jpeg', '/img/14.jpeg', '/img/12.jpeg'],
    },
    {
      number: '02',
      title: 'MY BODY MY RULES',
      desc: 'Top in ecopelle aerografato artigianalmente. Denim bottom aerografato artigianalmente. Bandana rigata.',
      tags: ['Top in ecopelle', 'Denim bottom', 'Bandana rigata'],
      img: '/img/11.jpeg',
      imagePosition: 'object-[50%_16%] md:object-[50%_18%]',
      gallery: ['/img/11.jpeg', '/img/10.jpeg'],
    },
    {
      number: '03',
      title: 'WHO OWNS THE STREETS?',
      desc: 'Tracksuit 100% cotone aerografata artigianalmente. Camicia rigata. Cravatta in ecopelle con accessorio stampato in 3D con filamento PETG.',
      tags: ['Tracksuit 100% cotone', 'Camicia rigata', 'Cravatta in ecopelle', 'Accessorio 3D PETG'],
      img: '/img/9.jpeg',
      imagePosition: 'object-[50%_18%] md:object-center',
      gallery: ['/img/9.jpeg', '/img/8.jpeg', '/img/7.jpeg', '/img/6.jpeg'],
    },
    {
      number: '04',
      title: 'ACT NOW OR SWIM AFTER',
      desc: 'Tank top 100% cotone aerografata artigianalmente. Denim jacket. Miniskirt in ecopelle con cintura rigata.',
      tags: ['Tank top 100% cotone', 'Denim jacket', 'Miniskirt in ecopelle', 'Cintura rigata'],
      img: '/img/5.jpeg',
      imagePosition: 'object-[50%_14%] md:object-[50%_16%]',
      gallery: ['/img/5.jpeg', '/img/4.jpeg'],
    },
  ],
};

export default function Collections() {
  const [activeLook, setActiveLook] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    out: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const activeGallery = activeLook !== null ? collection.looks[activeLook].gallery : [];
  const activeItem = activeLook !== null ? collection.looks[activeLook] : null;

  const openGallery = (lookIndex: number, photoIndex = 0) => {
    setActiveLook(lookIndex);
    setActivePhoto(photoIndex);
  };

  const closeGallery = () => {
    setActiveLook(null);
    setActivePhoto(0);
  };

  const showPreviousPhoto = () => {
    if (!activeGallery.length) return;
    setActivePhoto((current) => (current - 1 + activeGallery.length) % activeGallery.length);
  };

  const showNextPhoto = () => {
    if (!activeGallery.length) return;
    setActivePhoto((current) => (current + 1) % activeGallery.length);
  };

  useEffect(() => {
    if (activeLook === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') showPreviousPhoto();
      if (event.key === 'ArrowRight') showNextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLook, activeGallery.length]);

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
                  <button
                    type="button"
                    onClick={() => openGallery(i)}
                    className="group relative h-full w-full cursor-pointer overflow-hidden text-left"
                    aria-label={`Apri carosello ${look.title}`}
                  >
                    <img
                      src={look.img}
                      alt={look.title}
                      className={`w-full h-full object-cover grayscale-[10%] transition-transform duration-1000 group-hover:scale-105 ${look.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-[#0A0A0A]/20 md:bg-[#0A0A0A]/20" />
                  </button>
                  <div className="pointer-events-none absolute top-8 left-8 z-20">
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#F2F0EC] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
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
                    <button
                      type="button"
                      onClick={() => openGallery(i)}
                      className="group mt-12 flex w-fit items-center gap-4 border-b border-[#F2F0EC]/30 pb-3 font-sans text-[10px] uppercase tracking-[0.35em] text-[#F2F0EC] transition-colors hover:border-[#1B4A3A] hover:text-[#1B4A3A]"
                    >
                      Guarda carosello
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-3" />
                    </button>
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

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#0A0A0A] text-[#F2F0EC]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(242,240,236,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(242,240,236,0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />
            <div className="pointer-events-none absolute bottom-[-4vw] left-[-2vw] font-declaration text-[24vw] uppercase leading-none text-[#F2F0EC]/[0.04]">
              {activeItem.number}
            </div>

            <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto]">
              <div className="flex items-start justify-between gap-8 border-b border-[#F2F0EC]/10 px-6 py-5 md:px-10">
                <div>
                  <h3 className="font-declaration text-3xl uppercase leading-none md:text-6xl">
                    {activeItem.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeGallery}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F2F0EC]/25 text-[#F2F0EC] transition-colors hover:border-[#1B4A3A] hover:bg-[#1B4A3A]"
                  aria-label="Chiudi carosello"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative min-h-0 overflow-hidden px-6 py-6 md:px-10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeGallery[activePhoto]}
                    src={activeGallery[activePhoto]}
                    alt={`${activeItem.title} foto ${activePhoto + 1}`}
                    initial={{ opacity: 0, scale: 1.04, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto h-full max-h-full w-full max-w-5xl object-contain"
                  />
                </AnimatePresence>

                <button
                  type="button"
                  onClick={showPreviousPhoto}
                  className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#F2F0EC]/25 bg-[#0A0A0A]/50 text-[#F2F0EC] backdrop-blur transition-colors hover:border-[#1B4A3A] hover:bg-[#1B4A3A] md:left-8"
                  aria-label="Foto precedente"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={showNextPhoto}
                  className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#F2F0EC]/25 bg-[#0A0A0A]/50 text-[#F2F0EC] backdrop-blur transition-colors hover:border-[#1B4A3A] hover:bg-[#1B4A3A] md:right-8"
                  aria-label="Foto successiva"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex gap-3 overflow-x-auto border-t border-[#F2F0EC]/10 px-6 py-4 md:justify-center md:px-10">
                {activeGallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    className={`h-20 w-14 shrink-0 overflow-hidden border transition-opacity md:h-24 md:w-16 ${activePhoto === index ? 'border-[#1B4A3A] opacity-100' : 'border-[#F2F0EC]/15 opacity-45 hover:opacity-80'}`}
                    aria-label={`Apri foto ${index + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
