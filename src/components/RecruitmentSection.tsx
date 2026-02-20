import { motion } from "framer-motion";
import { Search, UserCheck, Megaphone, FileText, Users2, ClipboardCheck, Send, CheckCircle } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import recruitmentImg from "@/assets/recruitment-section.jpg";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Análise estratégica da empresa e do segmento para entender o cenário e as necessidades reais da vaga." },
  { icon: FileText, title: "Candidato Ideal", desc: "Definição dos requisitos técnicos, comportamentais e culturais do perfil desejado." },
  { icon: Megaphone, title: "Divulgação Estratégica", desc: "Alcance do perfil ideal em todos os canais — portais, redes sociais e hunting ativo." },
  { icon: ClipboardCheck, title: "Triagem", desc: "Avaliação criteriosa dos candidatos com filtros técnicos e comportamentais." },
  { icon: Users2, title: "Dinâmica e Testes", desc: "Aplicação de testes psicológicos (DISC), dinâmicas de grupo e avaliações situacionais." },
  { icon: UserCheck, title: "Entrevista Individual", desc: "Técnicas aprofundadas de avaliação com entrevistas por competências." },
  { icon: Send, title: "Envio dos Candidatos", desc: "Apresentação de 2 a 4 candidatos finalistas com relatórios analíticos completos." },
];

const benefits = [
  "Time com sólida experiência em recrutamento e seleção",
  "Assertividade na contratação, evitando custos com turnover",
  "Especialistas em análise comportamental com tecnologia",
  "Etapas customizadas respeitando a cultura da empresa",
  "Apoio ao candidato na adaptabilidade e integração",
];

const timelineData = steps.map((step, i) => ({
  title: `Etapa ${i + 1}`,
  content: (
    <div className="bg-background rounded-2xl p-6 border border-border hover:border-electric/30 hover:shadow-lg hover:shadow-electric/10 transition-all group">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0 group-hover:bg-electric/20 transition-colors">
          <step.icon className="w-6 h-6 text-electric" />
        </div>
        <h4 className="font-headline text-lg font-bold text-deep">{step.title}</h4>
      </div>
      <p className="font-body text-sm text-depth leading-relaxed">{step.desc}</p>
    </div>
  ),
}));

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

        {/* Steps — Scroll-animated Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-deep">
            Nossas Etapas
          </h3>
          <p className="font-body text-depth mt-3 max-w-lg mx-auto">
            Um processo estruturado para garantir a contratação certa.
          </p>
        </motion.div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default RecruitmentSection;
