import { motion } from "framer-motion";
import { Search, UserCheck, Megaphone, FileText, Users2, ClipboardCheck, Send, CheckCircle } from "lucide-react";
import recruitmentImg from "@/assets/recruitment-section.jpg";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Análise estratégica da empresa e do segmento." },
  { icon: FileText, title: "Candidato Ideal", desc: "Definição dos requisitos e perfil desejado." },
  { icon: Megaphone, title: "Divulgação Estratégica", desc: "Alcance do perfil ideal em todos os canais." },
  { icon: ClipboardCheck, title: "Triagem", desc: "Avaliação criteriosa dos candidatos." },
  { icon: Users2, title: "Dinâmica e Testes", desc: "Testes psicológicos (DISC) e dinâmicas." },
  { icon: UserCheck, title: "Entrevista Individual", desc: "Técnicas aprofundadas de avaliação." },
  { icon: Send, title: "Envio dos Candidatos", desc: "2 a 4 candidatos com relatórios analíticos." },
];

const benefits = [
  "Time com sólida experiência em recrutamento e seleção",
  "Assertividade na contratação, evitando custos com turnover",
  "Especialistas em análise comportamental com tecnologia",
  "Etapas customizadas respeitando a cultura da empresa",
  "Apoio ao candidato na adaptabilidade e integração",
];

const RecruitmentSection = () => {
  return (
    <section id="recrutamento" className="bg-neutral-light py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={recruitmentImg}
              alt="Recrutamento estratégico Loop RH"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-electric/10 text-electric font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Recrutamento Estratégico
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-deep mb-4">
              Contratação é coisa séria.{" "}
              <span className="text-electric">Evite o erro.</span>
            </h2>
            <p className="font-body text-depth text-lg mb-8 leading-relaxed">
              Não perca tempo e evite custos desnecessários com o turnover. A Loop assume a atração e captação de talentos utilizando tecnologia, análise comportamental e testes psicológicos (DISC).
            </p>

            <ul className="space-y-3">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  <span className="font-body text-depth text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-deep">
            Nossas Etapas
          </h3>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-electric/10 via-electric/40 to-electric/10 rounded-full" />
            <div className="grid grid-cols-7 gap-6 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-electric/30 flex items-center justify-center mb-4 shadow-md shadow-electric/10 relative z-10">
                    <step.icon className="w-7 h-7 text-electric" />
                  </div>
                  <span className="text-[10px] font-body font-bold text-electric mb-1 uppercase tracking-wider">Etapa {i + 1}</span>
                  <h4 className="font-headline text-sm font-bold text-deep mb-1.5">{step.title}</h4>
                  <p className="font-body text-xs text-depth leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: 2-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center p-5 rounded-xl border border-border hover:border-electric/30 hover:shadow-lg hover:shadow-electric/10 transition-all bg-background"
            >
              <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-6 h-6 text-electric" />
              </div>
              <span className="text-[10px] font-body font-bold text-electric mb-1 uppercase tracking-wider">Etapa {i + 1}</span>
              <h4 className="font-headline text-sm font-bold text-deep mb-1">{step.title}</h4>
              <p className="font-body text-xs text-depth leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
