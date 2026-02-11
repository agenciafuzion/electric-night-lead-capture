import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const items = [
  "Onde você está perdendo tempo e dinheiro",
  "Quais rotinas e processos precisam existir",
  "Como desenvolver a liderança para sustentar o novo",
];

const CTASection = () => {
  return (
    <section id="diagnostico" className="bg-neutral-light py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-electric/20 bg-deep p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-glow-pulse pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Saia com clareza do que{" "}
              <span className="text-electric">resolver primeiro.</span>
            </h2>

            <p className="font-body text-neutral-mid text-lg mb-10">
              Em um diagnóstico, você descobre:
            </p>

            <div className="flex flex-col items-center gap-4 mb-10">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-electric flex-shrink-0" />
                  <span className="font-body text-primary-foreground text-base">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-electric text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              QUERO MEU DIAGNÓSTICO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
