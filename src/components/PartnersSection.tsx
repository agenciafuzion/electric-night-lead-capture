import { motion } from "framer-motion";

const partners = [
  "O Boticário",
  "Localiza",
  "Grupo GPS",
  "Magrass",
  "Ford",
  "Fractal",
  "Engecom",
  "Guinvaco",
  "Metrominas",
  "Valemix",
  "Brasauto",
  "NM Engenharia",
  "Rommanel",
  "Grupo Gestor",
  "DPI",
  "Suprema",
];

const PartnersSection = () => {
  return (
    <section id="clientes" className="bg-neutral-light py-20 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Prova Social
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-deep mb-4">
            Quem Confia na Loop RH
          </h2>
          <p className="font-body text-depth text-lg max-w-2xl mx-auto">
            Muitas empresas já comprovaram nossa eficiência na prática. Trabalhamos com grandes marcas de diversos segmentos.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-light to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 rounded-xl px-8 py-5 flex items-center justify-center min-w-[160px] border border-border bg-background"
            >
              <span className="font-headline text-sm font-bold text-depth/70 tracking-wider uppercase whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
