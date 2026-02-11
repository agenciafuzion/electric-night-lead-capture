import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, Zap } from "lucide-react";

const problems = [
  { icon: Clock, text: '"O dia inteiro eu só fico apagando incêndio."' },
  { icon: AlertTriangle, text: "Coisas simples travam porque ninguém sabe o próximo passo." },
  { icon: Users, text: 'Gestores "não assumem responsabilidades" e tudo sobe para você.' },
  { icon: Zap, text: "A operação depende de heróis — e não de método." },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="bg-depth py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            O Problema
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Quando falta processo e rotina de gestão,{" "}
            <span className="text-electric">tudo vira urgência.</span>
          </h2>
          <p className="font-body text-lg text-neutral-mid max-w-2xl mx-auto">
            "Trabalhar sem processo cobra um preço alto": retrabalho, stress e decisões no improviso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl glass hover:border-electric/30 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-electric" />
              </div>
              <p className="font-body text-primary-foreground text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
