import logoLoop from "@/assets/logo-loop.png";

const FooterSection = () => {
  return (
    <footer className="bg-deep border-t border-depth px-6 md:px-16 py-12">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoLoop} alt="Loop Consultoria" className="h-8" />
          <div className="text-center md:text-right">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-electric text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
            >
              AGENDAR DIAGNÓSTICO DE PERFORMANCE
            </a>
          </div>
        </div>
        <div className="glow-line w-full my-8" />
        <p className="font-body text-neutral-mid text-sm text-center">
          © {new Date().getFullYear()} Loop Consultoria e Soluções Empresariais. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
