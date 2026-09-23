import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70">
      {/* MOBİL NAVBAR */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <button
          className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <span className="text-slate-300 font-medium">Okan Emre Haydar</span>
      </div>

      {/* MASAÜSTÜ NAVBAR */}
      <div className="hidden md:grid mx-auto px-6 py-4 grid-cols-3 items-center">
        {/* SOL NAVIGATION */}
        <div className="nav-links flex gap-6 col-start-1 justify-self-start">
          <a
            href="#home"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Ana Sayfa
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Hakkımda
          </a>

          <a
            href="#skills"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Yetenekler
          </a>

          <a
            href="#projects"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Projeler
          </a>
        </div>

        {/* SAĞ NAVIGATION */}
        <div className="nav-actions flex gap-4 col-start-3 justify-self-end">
          <a
            href="https://github.com/okanemrehydr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/okan-emre-haydar-678297235/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Linkedin
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            İletişim
          </a>

          <button className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer rounded-lg">
            🌙
          </button>
        </div>
      </div>

      {/* MOBİL YAN MENÜ */}
      <div
        className={`md:hidden fixed left-0 top-0 h-screen w-32 bg-slate-950 z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-3 left-5 text-slate-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          onClick={() => setMenuOpen(false)}
          aria-label="Menüyü kapat"
        >
          ✕
        </button>
        <div className="flex flex-col gap-4 px-6 pt-12">
          <a
            href="#home"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Ana Sayfa
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Hakkımda
          </a>

          <a
            href="#skills"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Yetenekler
          </a>

          <a
            href="#projects"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Projeler
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            İletişim
          </a>

          <a
            href="https://github.com/okanemrehydr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/okan-emre-haydar-678297235/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Linkedin
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
