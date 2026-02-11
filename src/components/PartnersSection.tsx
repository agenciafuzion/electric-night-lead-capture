import { motion } from "framer-motion";

const partners = [
  "Partner Alpha",
  "IndusTech",
  "Grupo Nexus",
  "CoreLogic",
  "AvantGarde",
  "Rede Impacto",
  "VectorPro",
  "SynergyBR",
];

const PartnersSection = () => {
  return (
    <section id="clientes" className="bg-deep py-20 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Clientes
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
            Empresas que confiam na Loop
          </h2>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-deep to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 glass rounded-xl px-10 py-6 flex items-center justify-center min-w-[180px]"
            >
              <span className="font-headline text-lg font-bold text-neutral-mid/70 tracking-wider uppercase whitespace-nowrap">
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
