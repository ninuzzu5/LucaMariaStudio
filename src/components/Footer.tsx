import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Instagram } from 'lucide-react';

const imageStack = [
  {
    src: '/img/5.jpeg',
    alt: 'Act Now Or Swim Later look',
    className: 'left-0 top-10 w-[62%] rotate-[-2deg] md:left-4 md:top-14',
  },
  {
    src: '/img/13.jpeg',
    alt: 'Luca Maria Studio portrait',
    className: 'right-0 top-0 w-[44%] rotate-[4deg] md:right-2 md:top-6',
  },
  {
    src: '/img/8.jpeg',
    alt: 'Luca Maria Studio editorial look',
    className: 'bottom-8 right-8 w-[58%] rotate-[2deg] md:bottom-12 md:right-10',
  },
];

const fieldNotes = [
  'Pezzi unici',
  'Aerografia',
  'Stampa 3D',
  'Streetwear concettuale',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <footer className="relative isolate min-h-screen overflow-hidden border-t border-[#F2F0EC]/10 bg-[#0A0A0A] text-[#F2F0EC]">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(242,240,236,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(242,240,236,0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute -bottom-[6vw] left-[-3vw] font-declaration text-[34vw] uppercase leading-none text-[#F2F0EC]/[0.035]">
        LMS
      </div>

      <div className="relative z-10 border-b border-[#F2F0EC]/10 bg-[#1B4A3A] py-3">
        <div className="animate-marquee whitespace-nowrap font-declaration text-base uppercase tracking-[0.22em] text-[#F2F0EC] md:text-xl">
          <span className="mr-10">
            Appartenenza / Ribellione / Empatia / Sperimentazione / Tutti colpevoli /
            Appartenenza / Ribellione / Empatia / Sperimentazione / Tutti colpevoli /
          </span>
        </div>
      </div>

      <div className="relative z-10 grid min-h-[calc(100vh-3rem)] grid-cols-1 lg:grid-cols-12">
        <section className="flex min-h-[70vh] flex-col justify-between border-b border-[#F2F0EC]/10 px-6 py-10 md:px-12 md:py-14 lg:col-span-7 lg:min-h-0 lg:border-b-0 lg:border-r">
          <div className="flex items-start justify-between gap-8">
            <img
              src="/img/asset/Logo.svg"
              alt="Luca Maria Studio"
              className="h-20 w-auto invert brightness-200 md:h-28"
            />
            <div className="text-right font-sans text-[10px] uppercase tracking-[0.28em] text-[#F2F0EC]/35">
              <p>SS26</p>
              <p>Tutti Colpevoli</p>
              <p>Italia / Worldwide</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="my-16"
          >
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.45em] text-[#1B4A3A]">
              — Final manifesto
            </p>
            <h2 className="font-declaration text-[18vw] uppercase leading-[0.72] md:text-[13vw] lg:text-[10vw]">
              Non
              <br />
              guardare
              <br />
              e basta.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-md font-sans text-sm uppercase leading-relaxed tracking-[0.14em] text-[#C8C4BC] md:text-base">
              Un progetto indipendente nato dall&apos;incontro tra arte, moda e streetwear.
              Ogni capo è un messaggio. Ogni drop è una presa di posizione.
            </p>

            <div className="grid grid-cols-2 border border-[#F2F0EC]/10">
              {fieldNotes.map((note, index) => (
                <div key={note} className="border-[#F2F0EC]/10 p-4 odd:border-r [&:nth-child(-n+2)]:border-b">
                  <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.24em] text-[#1B4A3A]">
                    0{index + 1}
                  </p>
                  <p className="font-declaration text-xl uppercase leading-none md:text-2xl">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative min-h-[90vh] overflow-hidden px-6 py-10 md:px-12 lg:col-span-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(27,74,58,0.28),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(30,45,74,0.34),transparent_38%)]" />

          <div className="relative h-[54vh] min-h-[26rem] md:h-[62vh]">
            {imageStack.map((image, index) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute overflow-hidden border border-[#F2F0EC]/20 bg-[#0A0A0A] shadow-2xl shadow-black/60 ${image.className}`}
              >
                <img src={image.src} alt={image.alt} className="aspect-[3/4] w-full object-cover grayscale-[20%]" />
                <figcaption className="absolute bottom-3 left-3 font-sans text-[9px] uppercase tracking-[0.22em] text-[#F2F0EC]/70">
                  LMS / 2026
                </figcaption>
              </motion.figure>
            ))}

            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] items-center justify-center rounded-full border border-[#F2F0EC]/40 bg-[#0A0A0A]/70 text-center backdrop-blur-sm md:h-44 md:w-44">
              <p className="font-declaration text-2xl uppercase leading-[0.8] text-[#F2F0EC] md:text-3xl">
                Tutti
                <br />
                colpevoli
              </p>
            </div>
          </div>

          <div className="relative mt-8 border-t border-[#F2F0EC]/15 pt-8">
            <div className="mb-8 flex items-center justify-between gap-8">
              <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-[#1B4A3A]">
                — Drop access
              </p>
              <a
                href="https://instagram.com/lucamariastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#F2F0EC]/55 transition-colors hover:text-[#F2F0EC]"
              >
                <Instagram size={14} />
                Instagram
                <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {submitted ? (
              <div className="border-b border-[#1B4A3A] pb-4">
                <p className="font-declaration text-5xl uppercase leading-none text-[#1B4A3A]">
                  Sei dentro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="group">
                <label htmlFor="footer-email" className="sr-only">
                  Email
                </label>
                <div className="flex items-end gap-4 border-b border-[#F2F0EC]/25 pb-3 transition-colors focus-within:border-[#1B4A3A]">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="la tua email"
                    className="w-full bg-transparent font-declaration text-4xl uppercase leading-none text-[#F2F0EC] outline-none placeholder:text-[#F2F0EC]/15 md:text-6xl"
                  />
                  <button
                    type="submit"
                    aria-label="Iscriviti ai drop"
                    className="mb-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F2F0EC]/35 text-[#F2F0EC]/70 transition-all duration-300 hover:border-[#1B4A3A] hover:bg-[#1B4A3A] hover:text-[#F2F0EC]"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
                <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.24em] text-[#F2F0EC]/30">
                  Niente spam. Solo segnali, drop e cose non fatte per tutti.
                </p>
              </form>
            )}
          </div>
        </section>
      </div>

      <div className="relative z-10 flex flex-col gap-4 border-t border-[#F2F0EC]/10 px-6 py-5 font-sans text-[10px] uppercase tracking-[0.24em] text-[#F2F0EC]/30 md:flex-row md:items-center md:justify-between md:px-12">
        <span>© {new Date().getFullYear()} Luca Maria Studio</span>
        <span>Independent artwear label</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
