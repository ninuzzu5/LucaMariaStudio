import { ArrowRight, ArrowUpRight, Instagram } from 'lucide-react';

const footerLinks = ['Lookbook', 'Manifesto', 'Drops', 'Press'];
const values = ['Appartenenza', 'Ribellione', 'Empatia', 'Sperimentazione'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#0A0A0A]/20 bg-[#F2F0EC] text-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-x-0 top-8 whitespace-nowrap font-declaration text-[28vw] uppercase leading-none text-[#0A0A0A]/5">
        Luca Maria Studio
      </div>

      <div className="relative z-10 px-6 py-10 md:px-12 md:py-14">
        <div className="flex items-start justify-between gap-8 border-b border-[#0A0A0A]/15 pb-8">
          <img
            src="/img/asset/Logo.svg"
            alt="Luca Maria Studio"
            className="h-24 w-auto md:h-32"
          />
          <p className="max-w-[14rem] text-right font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0A0A]/55">
            Independent artwear label
            <br />
            Italia / Worldwide
          </p>
        </div>

        <div className="grid min-h-[58vh] grid-cols-1 gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-7">
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.45em] text-[#1B4A3A]">
              — Footer manifesto
            </p>
            <h2 className="font-declaration text-[17vw] uppercase leading-[0.78] md:text-[10vw]">
              Resta
              <br />
              nel rumore
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-12 border-t border-[#0A0A0A]/15 pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div>
              <p className="max-w-md font-sans text-lg leading-snug text-[#0A0A0A] md:text-2xl">
                Un progetto indipendente nato dall&apos;incontro tra arte, moda e streetwear.
                Ogni capo è un messaggio. Ogni drop è un atto.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden bg-[#0A0A0A]/15">
                {values.map((value, i) => (
                  <div key={value} className="bg-[#F2F0EC] p-4">
                    <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.24em] text-[#1B4A3A]">
                      0{i + 1}
                    </p>
                    <p className="font-declaration text-2xl uppercase leading-none">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <form className="border-y border-[#0A0A0A]/20 py-5">
              <label htmlFor="footer-email" className="mb-4 block font-sans text-[10px] uppercase tracking-[0.35em] text-[#0A0A0A]/55">
                Accesso anticipato ai drop
              </label>
              <div className="flex items-end gap-4">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="la tua email"
                  className="w-full bg-transparent font-declaration text-3xl uppercase leading-none text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A]/25 md:text-5xl"
                />
                <button
                  type="submit"
                  aria-label="Invia email"
                  className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0A0A0A] text-[#0A0A0A] transition-colors hover:bg-[#0A0A0A] hover:text-[#F2F0EC]"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-y border-[#0A0A0A]/15 py-4">
          <div className="animate-marquee whitespace-nowrap font-display text-3xl uppercase leading-none tracking-widest text-[#1E2D4A] md:text-5xl">
            <span className="mr-8">
              Appartenenza · Ribellione · Empatia · Sperimentazione · Artwear · Streetwear ·
              Appartenenza · Ribellione · Empatia · Sperimentazione · Artwear · Streetwear ·
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-12 md:items-end">
          <div className="flex flex-wrap gap-3 md:col-span-7">
            {footerLinks.map((link) => (
              <span
                key={link}
                className="group rounded-full border border-[#0A0A0A]/20 px-4 py-2 font-sans text-xs uppercase tracking-[0.18em] transition-colors hover:border-[#1B4A3A] hover:bg-[#1B4A3A] hover:text-[#F2F0EC]"
              >
                {link}
                <ArrowUpRight size={12} className="ml-2 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 font-sans text-[10px] uppercase tracking-[0.24em] text-[#0A0A0A]/55 md:col-span-5 md:items-end">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0A0A0A] transition-colors hover:text-[#1B4A3A]"
            >
              <Instagram size={14} />
              @lucamariastudio
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              <span>© {new Date().getFullYear()} Luca Maria Studio</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
