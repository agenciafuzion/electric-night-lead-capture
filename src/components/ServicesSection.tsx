import { motion } from "framer-motion";
import { Building2, Brain, Rocket, Ribbon } from "lucide-react";
import servicesOrg from "@/assets/services-org.jpg";
import servicesTraining from "@/assets/services-training.jpg";
import servicesCampaigns from "@/assets/services-campaigns.jpg";
import actionTraining from "@/assets/action-training-1.jpg";

const services = [
  {
    icon: Building2,
    title: "Estrutura Organizacional",
    items: [
      "Estruturação e Implementação de Planos de Cargos e Salários",
      "Planos de Carreira",
      "Preparação de Sucessores",
    ],
    image: servicesOrg,
    imagePosition: "center",
  },
  {
    icon: Brain,
    title: "Desenvolvimento e Gestão de Pessoas",
    items: [
      "Avaliação de Desempenho",
      "Pesquisa de Clima Organizacional",
      "Mentoria Individual para Líderes",
      "Psicologia Organizacional e Acolhimento",
    ],
    image: actionTraining,
    imagePosition: "top",
  },
  {
    icon: Rocket,
    title: "Treinamentos e Capacitações",
    items: [
      "Capacitação em Vendas",
      "Atendimento de Qualidade",
      "Comunicação e Oratória",
      "Formação de Novos Líderes",
    ],
    image: servicesTraining,
    imagePosition: "center 30%",
  },
  {
    icon: Ribbon,
    title: "Projetos e Campanhas de Conscientização",
    items: [
      "Setembro Amarelo — Saúde Mental",
      "Outubro Rosa — Prevenção ao Câncer",
      "Janeiro Branco — Saúde Emocional",
    ],
    image: servicesCampaigns,
    imagePosition: "center",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-deep py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="glow-orb absolute top-0 right-0 w-[600px] h-[600px] opacity-30 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Nosso Portfólio
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Soluções em{" "}
            <span className="text-electric">Gente e Gestão</span>
          </h2>
          <p className="font-body text-lg text-neutral-mid max-w-3xl mx-auto">
            Desenvolvemos trilhas de sucesso baseadas na confiança, qualidade e metodologias atualizadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-electric/30 transition-colors"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ objectPosition: service.imagePosition }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-electric/20 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-electric" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary-foreground">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric mt-2 flex-shrink-0" />
                      <span className="font-body text-neutral-mid text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
