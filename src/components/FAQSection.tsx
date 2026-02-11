import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Vocês atendem presencial ou online?",
    a: "Os dois. Fazemos presencialmente e também online para o Brasil inteiro.",
  },
  {
    q: "Isso é mais consultoria ou mais treinamento?",
    a: "Depende do seu momento. A consultoria organiza o jogo. O treinamento faz o time jogar melhor. Na prática, um sustenta o outro.",
  },
  {
    q: "Em quanto tempo eu começo a ver mudança?",
    a: "Geralmente você sente alívio rápido quando cria rotina e processo. O resultado forte vem com execução e disciplina ao longo das semanas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-deep py-24 px-6 md:px-16">
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="font-body font-semibold text-primary-foreground text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-neutral-mid pb-5">
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
