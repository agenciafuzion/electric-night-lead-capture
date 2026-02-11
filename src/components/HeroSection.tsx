import { motion } from "framer-motion";
import logoLoop from "@/assets/logo-loop.png";
import heroImg from "@/assets/hero-consultant.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-deep overflow-hidden flex items-center">
      {/* Glow orb */}
      <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-glow-pulse pointer-events-none" />
      
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-16">
        <img src={logoLoop} alt="Loop Consultoria Empresarial" className="h-10 md:h-12" />
      </nav>

      <div className="container relative z-10 mx-auto px-6 md:px-16 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-electric animate-glow-pulse" />
              <span className="text-sm font-body text-electric tracking-wide">Consultoria de Performance</span>
            </div>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-primary-foreground mb-6">
              MAIS PERFORMANCE,{" "}
              <span className="text-electric">MENOS CAOS:</span>{" "}
              PROCESSOS CLAROS E LÍDERES QUE ASSUMEM
            </h1>

            <p className="font-body text-neutral-mid text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Você não precisa passar o dia "apagando incêndio". Nós ajudamos você a organizar a gestão com diagnóstico, consultoria e treinamentos — do jeito que funciona na sua realidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-electric text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                AGENDAR DIAGNÓSTICO DE PERFORMANCE
              </a>
            </div>

            {/* Stats */}
            <div className="glow-line w-full mt-12 mb-8" />
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "+100", label: "Empresas atendidas" },
                { value: "3x", label: "Mais produtividade" },
                { value: "98%", label: "Satisfação dos clientes" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-headline text-2xl md:text-3xl font-bold text-electric">{stat.value}</p>
                  <p className="font-body text-sm text-neutral-mid mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-electric/20">
              <img
                src={heroImg}
                alt="Consultoria empresarial"
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
