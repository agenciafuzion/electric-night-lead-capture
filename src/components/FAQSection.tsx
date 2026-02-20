import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Para qual tipo de empresa serve a consultoria da Loop?",
    a: "A consultoria da Loop atende empresas de todos os portes e segmentos que desejam estruturar seus processos de gestão de pessoas, desde startups em crescimento até empresas consolidadas que precisam otimizar sua estrutura organizacional.",
  },
  {
    q: "Quais resultados posso esperar da consultoria em Gente e Gestão?",
    a: "Nossos clientes observam melhorias significativas em engajamento, redução de turnover, clareza nos processos de cargos e salários, desenvolvimento de lideranças e fortalecimento da cultura organizacional.",
  },
  {
    q: "Vocês atendem presencial ou online?",
    a: "Os dois! Fazemos presencialmente em Ipatinga-MG e região, e também online para todo o Brasil.",
  },
  {
    q: "Como funciona o processo de consultoria?",
    a: "Iniciamos com um diagnóstico completo da sua empresa, identificamos os pontos de melhoria e desenhamos um plano de ação personalizado com metas claras e acompanhamento contínuo dos resultados.",
  },
  {
    q: "A Loop atende empresas de qualquer porte?",
    a: "Sim. Atendemos desde pequenas empresas até grandes grupos, sempre com soluções sob medida de acordo com as necessidades e demandas específicas de cada cliente.",
  },
  {
    q: "Como funciona o recrutamento estratégico?",
    a: "Realizamos o diagnóstico completo da vaga, triagem, dinâmicas, testes psicológicos (DISC) e entrevistas individuais. Enviamos de 2 a 4 candidatos com relatórios analíticos para a entrevista final com o gestor.",
  },
  {
    q: "A Loop oferece garantia no recrutamento?",
    a: "Sim. Caso o candidato não atenda às expectativas em 30 dias, realizamos um novo processo sem custos adicionais, desde que identificadas falhas no processo da Loop.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-neutral-light py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            FAQ
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-deep">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl px-6 border border-border bg-background"
            >
              <AccordionTrigger className="font-body font-semibold text-deep text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-depth pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
