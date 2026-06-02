/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#1B4A3A] selection:text-[#F2F0EC] grain overflow-x-clip w-full relative">
      <Navbar navigate={navigate} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <Home key="home" navigate={navigate} />}
          {currentPage === 'portfolio' && <Portfolio key="portfolio" navigate={navigate} />}
          {currentPage === 'tutti-colpevoli' && <ProjectDetail key="tutti-colpevoli" navigate={navigate} />}
          {currentPage === 'collections' && <Collections key="collections" />}
          {currentPage === 'about' && <About key="about" />}
          {currentPage === 'contact' && <Contact key="contact" />}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}
