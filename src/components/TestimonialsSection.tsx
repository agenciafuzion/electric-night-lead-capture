import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Antes era muita correria. Hoje temos rotina, clareza e cada líder sabe o que precisa fazer.",
    name: "Diretor de Operações",
    role: "Indústria de Manufatura",
  },
  {
    text: "Finalmente achamos uma solução que funcionou para a nossa realidade.",
    name: "CEO",
    role: "Empresa de Serviços",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-deep py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="glow-orb absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Prova Social
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Empresas que crescem com consistência
          </h2>
          <p className="font-body text-neutral-mid text-lg">
            Não dependem de sorte — dependem de gestão bem feita.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-electric/30 mb-4" />
              <p className="font-body text-primary-foreground text-lg leading-relaxed mb-6 italic">
                "{item.text}"
              </p>
              <div>
                <p className="font-body font-semibold text-primary-foreground">{item.name}</p>
                <p className="font-body text-sm text-neutral-mid">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
