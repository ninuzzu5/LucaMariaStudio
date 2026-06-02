import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#F2F0EC]/10 py-20 px-6 mt-0 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2">
          <img
            src="/img/asset/Logo.svg"
            alt="Luca Maria Studio"
            className="h-24 mb-8 invert brightness-200 opacity-90"
          />
          <p className="font-sans text-[#C8C4BC] max-w-sm text-base leading-relaxed">
            Un progetto indipendente nato dall&apos;incontro tra arte, moda e streetwear.
            Ogni capo è un messaggio.
          </p>
          <div className="mt-8 flex gap-6 font-sans text-xs uppercase tracking-widest">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8C4BC] hover:text-[#F2F0EC] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12">
          <div className="bg-[#F2F0EC]/5 p-8 border border-[#F2F0EC]/10">
            <h3 className="font-display text-2xl uppercase tracking-widest mb-3 text-[#F2F0EC]">
              Stay Connected
            </h3>
            <p className="text-[#C8C4BC] mb-6 font-sans text-sm leading-relaxed">
              Accesso anticipato ai drop e contenuti esclusivi.
            </p>
            <div className="flex border-b border-[#F2F0EC]/20 focus-within:border-[#1B4A3A] transition-colors pb-2">
              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent w-full outline-none font-sans uppercase tracking-widest text-xs placeholder:text-[#C8C4BC]/40 text-[#F2F0EC]"
              />
              <button className="hover:text-[#1B4A3A] transition-colors text-[#C8C4BC]">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="text-[#F2F0EC]/20 font-sans text-xs uppercase tracking-widest flex justify-between">
            <span>© {new Date().getFullYear()} Luca Maria Studio</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
