import { motion } from "framer-motion";
import { Users, HeartHandshake, Target, ShieldCheck } from "lucide-react";
import actionEvent1 from "@/assets/action-event-1.jpg";
import actionEvent2 from "@/assets/action-event-2.jpg";
import actionEvent3 from "@/assets/action-event-3.jpg";
import actionEvent4 from "@/assets/action-event-4.jpg";

const differentials = [
  {
    icon: Users,
    title: "5.000+ Pessoas Impactadas",
    desc: "Diretamente através dos projetos implementados pela Loop.",
  },
  {
    icon: HeartHandshake,
    title: "Abordagem Humanizada",
    desc: "Unimos experiência prática ao cuidado genuíno com o colaborador.",
  },
  {
    icon: Target,
    title: "Ambientes Saudáveis",
    desc: "Foco absoluto na construção de ambientes saudáveis e produtivos.",
  },
  {
    icon: ShieldCheck,
    title: "Líderes de Alta Performance",
    desc: "Desenvolvimento de líderes que geram resultados consistentes.",
  },
];

const photos = [actionEvent1, actionEvent2, actionEvent3, actionEvent4];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="bg-depth py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="glow-orb absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Por que a Loop?
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Nossos Números e{" "}
              <span className="text-electric">Compromisso</span>
            </h2>
            <p className="font-body text-neutral-mid text-lg mb-10 leading-relaxed">
              Nosso compromisso é apoiar empresas na construção de ambientes saudáveis e resultados consistentes, valorizando pessoas como o maior ativo organizacional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-electric" />
                  </div>
                  <h3 className="font-headline text-base font-bold text-primary-foreground">{item.title}</h3>
                  <p className="font-body text-sm text-neutral-mid leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden border border-electric/10 ${
                  i === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={photo}
                  alt={`Ação Loop RH ${i + 1}`}
                  className={`w-full object-cover ${i === 0 ? "h-full" : "h-48"}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
