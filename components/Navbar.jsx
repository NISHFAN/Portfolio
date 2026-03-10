import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6`}>
        <nav className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-tech-card/80 backdrop-blur-2xl border border-tech-violet/20 px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)]' : ''}`}>
          <a href="#" className="text-2xl font-black text-tech-text tracking-tighter group flex items-center gap-2">
            <span className="text-tech-cyan group-hover:rotate-12 transition-transform duration-500 text-3xl"></span>
            NISHFAN<span className="text-tech-cyan">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-tech-muted hover:text-tech-cyan transition-colors tracking-widest uppercase relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-cyan transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-2.5 bg-tech-cyan text-tech-bg font-black text-xs tracking-[0.2em] rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 uppercase"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button className="md:hidden text-tech-text p-2 hover:text-tech-cyan transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-tech-bg/95 backdrop-blur-3xl z-[90] md:hidden flex flex-col items-center justify-center gap-12"
          >
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-4xl font-black text-tech-text hover:text-tech-cyan transition-colors tracking-tighter"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
