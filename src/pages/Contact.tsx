import { motion, type Variants } from 'motion/react';
import { ArrowUpRight, Instagram } from 'lucide-react';

export default function Contact() {
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
      className="w-full pt-32 min-h-screen flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-6 mb-20 flex-grow w-full">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mb-6">— Contatti</p>
        <h1 className="font-declaration text-[10vw] leading-[0.85] uppercase text-[#F2F0EC] mb-20">
          Get In<br />Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-10">
            <div className="border-t border-[#F2F0EC]/10 pt-8">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mb-4">Email principale</p>
              <a
                href="mailto:info@lucamariastudio.com"
                className="group font-declaration text-xl sm:text-2xl md:text-4xl uppercase text-[#F2F0EC] hover:text-[#C8C4BC] transition-colors flex items-center gap-3 break-all"
              >
                info@lucamariastudio.com
                <ArrowUpRight size={28} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#F2F0EC]/10 pt-8">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mb-3">Press & Media</p>
                <p className="font-sans text-[#C8C4BC] text-sm">press@lucamariastudio.com</p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mb-3">Collaborazioni</p>
                <p className="font-sans text-[#C8C4BC] text-sm">collab@lucamariastudio.com</p>
              </div>
            </div>

            <div className="border-t border-[#F2F0EC]/10 pt-8">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mb-4">Social</p>
              <a
                href="https://www.instagram.com/lucamariastudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-sans text-[#F2F0EC] hover:text-[#C8C4BC] transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
                <span className="text-sm uppercase tracking-[0.1em]">@lucamariastudio</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="border-t border-[#F2F0EC]/10 pt-8">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#1B4A3A] mb-3">Con sede in</p>
              <p className="font-sans text-[#C8C4BC] text-sm uppercase tracking-[0.1em]">
                Italia
              </p>
            </div>
          </div>

          {/* Right — direct contact panel */}
          <div className="flex flex-col gap-8 bg-[#F2F0EC]/40 p-10 border border-[#F2F0EC]/10 justify-between">
            <div>
              <h2 className="font-declaration text-3xl uppercase text-[#F2F0EC] mb-6">Scrivici</h2>
              <p className="font-sans text-[#C8C4BC] text-sm leading-relaxed max-w-sm">
                Per richieste di acquisto, collaborazioni, press o informazioni generali scrivi direttamente all&apos;indirizzo che preferisci. Ti risponderemo entro 48 ore.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#F2F0EC]/10 pt-8">
              {[
                { label: 'Generale', email: 'info@lucamariastudio.com' },
                { label: 'Press & Media', email: 'press@lucamariastudio.com' },
                { label: 'Collaborazioni', email: 'collab@lucamariastudio.com' },
              ].map(({ label, email }) => (
                <a
                  key={label}
                  href={`mailto:${email}`}
                  className="group flex items-center justify-between border-b border-[#F2F0EC]/10 pb-4 hover:border-[#1B4A3A] transition-colors"
                >
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#1B4A3A] mb-1">{label}</p>
                    <p className="font-sans text-sm text-[#F2F0EC] group-hover:text-[#C8C4BC] transition-colors">{email}</p>
                  </div>
                  <ArrowUpRight size={16} strokeWidth={1.5} className="text-[#C8C4BC] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>

            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C8C4BC]/50">
              Form di contatto — disponibile a breve
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
