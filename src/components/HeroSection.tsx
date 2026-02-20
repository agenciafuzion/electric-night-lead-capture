import { motion } from "framer-motion";
import heroTeam from "@/assets/hero-loop-team.png";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

const stats = [
  { icon: Users, value: "5.000+", label: "Pessoas impactadas" },
  { icon: Award, value: "10+", label: "Anos de experiência" },
  { icon: TrendingUp, value: "100%", label: "Foco em resultado" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-deep overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep via-depth to-deep" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/40" />

      {/* Animated background paths */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-electric animate-glow-pulse" />
              <span className="text-sm font-body text-electric tracking-wide">Consultoria em Gente e Gestão</span>
            </div>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] text-primary-foreground mb-6">
              Transforme Pessoas,{" "}
              <span className="text-electric">Impulsione Negócios</span>{" "}
              com a Loop!
            </h1>

            <p className="font-body text-neutral-mid text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Soluções empresariais completas e personalizadas para fortalecer a sua organização, construir equipes de alta performance e gerar resultados consistentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-electric text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Quero Transformar Meu Negócio
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary-foreground/20 text-primary-foreground font-body font-semibold text-base hover:bg-primary-foreground/5 transition-colors"
              >
                Conheça Nossos Serviços
              </a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glow-line w-full mt-14 mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="font-headline text-xl md:text-2xl font-bold text-electric">{stat.value}</p>
                      <p className="font-body text-xs md:text-sm text-neutral-mid">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-electric/10 rounded-full blur-3xl" />
              <img
                src={heroTeam}
                alt="Alessandra Reis e Gerliane Vieira - Diretoria Loop RH"
                className="relative w-[320px] xl:w-[380px] rounded-2xl object-cover drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
