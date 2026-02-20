import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="diagnostico" className="bg-deep py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-electric/20 bg-depth p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-glow-pulse pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Pronto para valorizar o seu{" "}
              <span className="text-electric">maior ativo?</span>
            </h2>

            <p className="font-body text-neutral-mid text-lg mb-10 max-w-2xl mx-auto">
              Entre em contato com a equipe de especialistas da Loop e descubra o que podemos fazer pela sua empresa. Agende um diagnóstico inicial sem compromisso.
            </p>

            <a
              href="https://wa.me/5531971231832?text=Olá! Gostaria de agendar um diagnóstico com a Loop RH."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-electric text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity mb-10"
            >
              Agendar um Diagnóstico Inicial
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="glow-line w-full mb-8" />

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-primary-foreground font-semibold">WhatsApp</p>
                  <p className="font-body text-sm text-neutral-mid">(31) 97123-1832</p>
                  <p className="font-body text-sm text-neutral-mid">(31) 97189-3074</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-primary-foreground font-semibold">E-mail</p>
                  <p className="font-body text-sm text-neutral-mid">contatolooprh@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-primary-foreground font-semibold">Endereço</p>
                  <p className="font-body text-sm text-neutral-mid">Rua Carlos Gomes, 696 - Ideal - Ipatinga/MG</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
