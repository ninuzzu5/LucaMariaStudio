import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navItems = ['home', 'portfolio', 'collections', 'about', 'contact'];

function itemToPath(item: string) {
  return item === 'home' ? '/' : `/${item}`;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (item: string) => {
    navigate(itemToPath(item));
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-[#F2F0EC]">
        <div
          className="cursor-pointer flex items-center gap-3"
          onClick={() => handleNavigate('home')}
        >
          <img
            src="/img/asset/ScrittaLogo.svg"
            alt="Luca Maria Studio"
            className="h-8 md:h-12 lg:h-14 w-auto invert brightness-200 transition-all"
          />
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 hover:opacity-60 transition-opacity"
          aria-label="Open menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#F2F0EC] text-[#0A0A0A] flex flex-col justify-between p-10"
          >
            <div className="flex justify-between items-start">
              <img
                src="/img/asset/ScrittaLogo.svg"
                alt="Luca Maria Studio"
                className="h-8 md:h-12 lg:h-14 w-auto transition-all"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="hover:opacity-50 transition-opacity"
                aria-label="Close menu"
              >
                <X size={36} strokeWidth={1.2} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: 'easeOut' }}
                  className="group cursor-pointer border-b border-[#0A0A0A]/10 py-5 flex justify-between items-center"
                  onClick={() => handleNavigate(item)}
                >
                  <span className="font-display text-4xl sm:text-5xl md:text-7xl uppercase tracking-tight group-hover:text-[#1B4A3A] transition-colors duration-200">
                    {item}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#0A0A0A]/40 group-hover:text-[#1B4A3A] transition-colors">
                    0{i + 1}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-8 font-sans text-xs uppercase tracking-widest text-[#0A0A0A]/50">
              <a href="https://www.instagram.com/lucamariastudio/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B4A3A] transition-colors">Instagram</a>
              <span>© {new Date().getFullYear()} LMS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
