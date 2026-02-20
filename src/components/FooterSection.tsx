import { Link } from "react-router-dom";
import logoLoop from "@/assets/logo-loop.png";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Recrutamento", href: "#recrutamento" },
  { label: "Clientes", href: "#clientes" },
  { label: "FAQ", href: "#faq" },
];

const FooterSection = () => {
  return (
    <footer className="bg-deep border-t border-depth">
      <div className="container mx-auto max-w-6xl px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/"><img src={logoLoop} alt="Loop RH" className="h-10 mb-5" /></Link>
            <p className="font-body text-neutral-mid text-sm leading-relaxed max-w-xs">
              Soluções empresariais completas e personalizadas para fortalecer a sua organização e gerar resultados consistentes.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/looprh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-depth flex items-center justify-center hover:bg-electric/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-neutral-mid" />
              </a>
              <a
                href="https://www.linkedin.com/company/looprh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-depth flex items-center justify-center hover:bg-electric/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-neutral-mid" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-headline font-bold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-neutral-mid hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline font-bold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-electric flex-shrink-0" />
                <span className="font-body text-sm text-neutral-mid">contatolooprh@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-body text-sm text-neutral-mid block">(31) 97123-1832</span>
                  <span className="font-body text-sm text-neutral-mid block">(31) 97189-3074</span>
                  <span className="font-body text-sm text-neutral-mid block">(31) 98603-6658</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-neutral-mid">
                  Rua Carlos Gomes, 696 - Ideal - Ipatinga/MG
                </span>
              </li>
            </ul>

            <a
              href="https://wa.me/5531971231832?text=Olá! Gostaria de agendar um diagnóstico com a Loop RH."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              FALAR COM ESPECIALISTA
            </a>
          </div>
        </div>

        <div className="glow-line w-full mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-neutral-mid text-xs">
            © {new Date().getFullYear()} Loop Inovação em RH. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="font-body text-xs text-neutral-mid hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="font-body text-xs text-neutral-mid hover:text-primary-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
