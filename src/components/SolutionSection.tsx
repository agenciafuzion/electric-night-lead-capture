import { motion } from "framer-motion";
import { Search, Settings, GraduationCap } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Para enxergar o que está travando (de verdade)",
  },
  {
    icon: Settings,
    title: "Consultoria",
    desc: "Para desenhar e implantar processos e rotinas",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    desc: "Para desenvolver líderes e sustentar a mudança",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="bg-deep py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="glow-orb absolute top-0 right-0 w-[600px] h-[600px] opacity-30 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            A Solução
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Três frentes que se conectam para{" "}
            <span className="text-electric">colocar ordem, ritmo e resultado.</span>
          </h2>
          <p className="font-body text-lg text-neutral-mid max-w-2xl mx-auto">
            A Loop Consultoria é sua parceira para organizar a gestão — do jeito que funciona na sua realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 text-center group hover:border-electric/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-electric/20 transition-colors">
                <item.icon className="w-7 h-7 text-electric" />
              </div>
              <h3 className="font-headline text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
              <p className="font-body text-neutral-mid leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-body text-neutral-mid mt-12 text-lg italic"
        >
          "Processo bem desenhado não engessa. Ele sustenta."
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
