import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const values = ['Appartenenza', 'Ribellione', 'Empatia', 'Sperimentazione'];

export default function ValuesStrip() {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  const handleValueClick = (value: string) => {
    const expectedValue = values[sequenceIndex];

    if (value === expectedValue) {
      const nextIndex = sequenceIndex + 1;

      if (nextIndex === values.length) {
        setIsSecretOpen(true);
        setSequenceIndex(0);
      } else {
        setSequenceIndex(nextIndex);
      }

      return;
    }

    setSequenceIndex(value === values[0] ? 1 : 0);
  };

  const closeSecret = () => {
    setIsSecretOpen(false);
  };

  useEffect(() => {
    if (!isSecretOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSecret();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSecretOpen]);

  return (
    <>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8 border-t border-[#F2F0EC]/10 pt-8 md:pt-16">
          {values.map((val, i) => (
            <motion.button
              key={val}
              type="button"
              onClick={() => handleValueClick(val)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-end justify-between gap-6 border-b border-[#F2F0EC]/10 py-6 text-left md:block md:border-b-0 md:py-0"
              aria-label={`Valore ${val}`}
            >
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] md:mb-3">
                0{i + 1}
              </p>

              <h3 className="max-w-[72vw] text-right font-declaration text-3xl uppercase leading-none text-[#F2F0EC] transition-colors duration-300 group-hover:text-[#1B4A3A] md:max-w-none md:text-left">
                {val}
              </h3>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {isSecretOpen && (
          <motion.div
            className="fixed inset-0 z-[200] bg-[#0A0A0A] text-[#F2F0EC]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(242,240,236,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(242,240,236,0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />

            <div className="pointer-events-none absolute -bottom-[5vw] -left-[3vw] font-declaration text-[32vw] uppercase leading-none text-[#F2F0EC]/[0.035]">
              SS26
            </div>

            <div className="relative z-10 flex min-h-screen flex-col justify-between p-6 md:p-12">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.45em] text-[#1B4A3A]">
                    Dossier nascosto / SS26
                  </p>

                  <h2 className="font-declaration text-[18vw] uppercase leading-[0.72] md:text-[11vw] lg:text-[8vw]">
                    Non
                    <br />
                    guardare
                    <br />
                    e basta.
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeSecret}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F2F0EC]/25 text-[#F2F0EC] transition-colors hover:border-[#1B4A3A] hover:bg-[#1B4A3A]"
                  aria-label="Chiudi dossier segreto"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-16 grid gap-8 border-t border-[#F2F0EC]/10 pt-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  ['01', 'War Memory', 'Burnt newspaper'],
                  ['02', 'Hope & Inclusion', 'Sunflowers'],
                  ['03', 'Economic Inequality', 'Empty cash box'],
                  ['04', 'Climate Crisis', 'Diving mask'],
                ].map(([number, title, object]) => (
                  <div key={number} className="border-b border-[#F2F0EC]/10 pb-6 md:border-b-0">
                    <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.35em] text-[#1B4A3A]">
                      {number}
                    </p>
                    <h3 className="mb-4 font-declaration text-3xl uppercase leading-none md:text-4xl">
                      {title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C8C4BC]">
                      {object}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-16 max-w-xl font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[#C8C4BC]">
                Quattro simboli. Quattro colpe. Una sola scelta: non restare indifferenti.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}