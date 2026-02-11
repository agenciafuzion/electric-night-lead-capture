import { motion } from "framer-motion";
import { UserCheck, Workflow, Target } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Líderes que assumem mais responsabilidades",
    desc: "Você para de carregar tudo sozinho. Criamos combinados, ritos e acompanhamento para o gestor assumir o que é dele.",
  },
  {
    icon: Workflow,
    title: "Processos claros que tiram o peso do dia a dia",
    desc: 'Você sai do modo "apagar incêndio" e ganha fluxo, padrão e dono do processo. O time começa a construir.',
  },
  {
    icon: Target,
    title: "Resultado que dura, com método e disciplina",
    desc: "Problema se resolve com método. A gente vai na raiz — não só no sintoma. Você ganha previsibilidade.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-neutral-light py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Benefícios
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-deep">
            O que muda na prática
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-border hover:border-electric/30 hover:shadow-lg hover:shadow-electric/10 transition-all bg-background"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="font-headline text-xl font-bold text-deep mb-3">{item.title}</h3>
              <p className="font-body text-neutral-mid leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
