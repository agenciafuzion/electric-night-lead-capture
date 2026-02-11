import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logoLoop from "@/assets/logo-loop.png";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Clientes", href: "#clientes" },
  { label: "FAQ", href: "#faq" },
  { label: "Vagas", href: "/vagas", isRoute: true },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep/95 backdrop-blur-md border-b border-depth shadow-lg shadow-deep/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-16 flex items-center justify-between h-16 md:h-20">
        <a href="#">
          <img src={logoLoop} alt="Loop Consultoria" className="h-8 md:h-10" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            (link as any).isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-sm font-medium text-neutral-mid hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-neutral-mid hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#diagnostico"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar Diagnóstico
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep/98 backdrop-blur-md border-b border-depth overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) =>
                (link as any).isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-sm font-medium text-neutral-mid hover:text-primary-foreground py-3 border-b border-depth/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-sm font-medium text-neutral-mid hover:text-primary-foreground py-3 border-b border-depth/50 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#diagnostico"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold"
              >
                Agendar Diagnóstico
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
