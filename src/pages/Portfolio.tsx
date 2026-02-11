import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Target, BarChart3, CheckCircle2, Quote } from "lucide-react";

const stats = [
  { value: "150+", label: "Empresas atendidas", icon: Users },
  { value: "92%", label: "Taxa de retenção", icon: TrendingUp },
  { value: "3x", label: "ROI médio dos clientes", icon: BarChart3 },
  { value: "8+", label: "Anos de experiência", icon: Target },
];

const cases = [
  {
    tag: "Indústria",
    title: "Reestruturação operacional em indústria metalúrgica",
    challenge: "Empresa com 120 funcionários enfrentava retrabalho constante, líderes sobrecarregados e comunicação falha entre setores.",
    actions: ["Mapeamento de processos críticos", "Redesenho do organograma funcional", "Treinamento de liderança situacional", "Implantação de rituais de gestão"],
    results: [
      { metric: "–40%", desc: "redução de retrabalho" },
      { metric: "+65%", desc: "engajamento de líderes" },
      { metric: "3 meses", desc: "para primeiros resultados" },
    ],
  },
  {
    tag: "Varejo",
    title: "Padronização e escala em rede de franquias",
    challenge: "Rede com 18 unidades sem padrão de atendimento, alta rotatividade e dificuldade em replicar a cultura da marca.",
    actions: ["Criação de manuais operacionais", "Programa de onboarding estruturado", "Indicadores por unidade (KPIs)", "Mentoria com gestores regionais"],
    results: [
      { metric: "–55%", desc: "turnover em 6 meses" },
      { metric: "+30%", desc: "NPS das unidades" },
      { metric: "18→32", desc: "unidades em 1 ano" },
    ],
  },
  {
    tag: "Tecnologia",
    title: "Cultura de alta performance em startup SaaS",
    challenge: "Startup em fase de escala com times desalinhados, ausência de processos e líderes técnicos sem preparo gerencial.",
    actions: ["Assessment de competências", "Implementação de OKRs", "Desenvolvimento de tech leads", "Redesenho de rituais ágeis"],
    results: [
      { metric: "+80%", desc: "clareza de metas" },
      { metric: "2x", desc: "velocidade de entrega" },
      { metric: "Serie A", desc: "captada após projeto" },
    ],
  },
];

const testimonials = [
  {
    quote: "A Loop transformou a forma como lideramos. Hoje temos processos claros e uma equipe que realmente entrega.",
    author: "Carlos Mendes",
    role: "CEO — MetalPro Indústria",
  },
  {
    quote: "Crescemos de 18 para 32 unidades mantendo a qualidade. Sem a Loop, não teríamos conseguido escalar assim.",
    author: "Fernanda Costa",
    role: "Diretora de Operações — Rede Sabor & Cia",
  },
];

const methodology = [
  { step: "01", title: "Diagnóstico", desc: "Imersão na realidade da empresa com entrevistas, dados e observação direta." },
  { step: "02", title: "Estratégia", desc: "Plano de ação personalizado com prioridades, metas e cronograma." },
  { step: "03", title: "Execução", desc: "Implementação lado a lado com treinamentos, ferramentas e acompanhamento." },
  { step: "04", title: "Sustentação", desc: "Monitoramento de resultados e ajustes para garantir perenidade." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const Portfolio = () => {
  return (
    <main className="bg-deep text-primary-foreground">
      

      {/* SLIDE 1 — Cover */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 glow-orb w-[800px] h-[800px] mx-auto mt-[-200px]" />
        <div className="container mx-auto max-w-5xl px-6 md:px-16 text-center relative z-10 pt-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-body text-electric text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Portfólio de Resultados
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
          >
            Transformamos gestão em{" "}
            <span className="text-electric">resultados reais</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-neutral-mid text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Conheça os cases e números que comprovam a efetividade do método Loop em empresas de diferentes segmentos e tamanhos.
          </motion.p>
          <motion.a
            href="#cases"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric text-primary-foreground font-body font-bold text-base hover:opacity-90 transition-opacity"
          >
            Ver Cases <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* SLIDE 2 — Stats */}
      <section className="py-24 bg-depth/50">
        <div className="container mx-auto max-w-5xl px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-6 md:p-8 text-center"
              >
                <stat.icon className="w-8 h-8 text-electric mx-auto mb-4" />
                <p className="font-headline text-3xl md:text-4xl font-black text-electric mb-2">{stat.value}</p>
                <p className="font-body text-neutral-mid text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 3 — Methodology */}
      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-electric text-sm font-semibold tracking-widest uppercase mb-4">Nosso Método</p>
            <h2 className="font-headline text-3xl md:text-5xl font-black">
              Como entregamos <span className="text-electric">resultados</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {methodology.map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative glass rounded-2xl p-6 md:p-8"
              >
                <span className="font-headline text-5xl font-black text-electric/20 absolute top-4 right-6">{item.step}</span>
                <h3 className="font-headline text-lg font-bold mb-3 mt-6">{item.title}</h3>
                <p className="font-body text-neutral-mid text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 4+ — Cases */}
      <section id="cases" className="py-24 bg-depth/30">
        <div className="container mx-auto max-w-5xl px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-electric text-sm font-semibold tracking-widest uppercase mb-4">Cases de Sucesso</p>
            <h2 className="font-headline text-3xl md:text-5xl font-black">
              Resultados que <span className="text-electric">falam por si</span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-3xl p-8 md:p-12 overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-electric/15 text-electric font-body text-xs font-bold uppercase tracking-wider">
                    {c.tag}
                  </span>
                </div>

                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">{c.title}</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-headline text-sm font-bold text-electric uppercase tracking-wider mb-3">Desafio</h4>
                    <p className="font-body text-neutral-mid leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-electric uppercase tracking-wider mb-3">O que fizemos</h4>
                    <ul className="space-y-2">
                      {c.actions.map((action, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                          <span className="font-body text-neutral-mid text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="glow-line w-full mb-8" />

                <div className="grid grid-cols-3 gap-4 md:gap-8">
                  {c.results.map((r, j) => (
                    <div key={j} className="text-center">
                      <p className="font-headline text-2xl md:text-4xl font-black text-electric mb-1">{r.metric}</p>
                      <p className="font-body text-neutral-mid text-xs md:text-sm">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE — Testimonials */}
      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-electric text-sm font-semibold tracking-widest uppercase mb-4">Depoimentos</p>
            <h2 className="font-headline text-3xl md:text-5xl font-black">
              O que nossos <span className="text-electric">clientes dizem</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-8 md:p-10 relative"
              >
                <Quote className="w-10 h-10 text-electric/20 absolute top-6 right-6" />
                <p className="font-body text-primary-foreground/90 text-lg leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-headline font-bold text-primary-foreground">{t.author}</p>
                  <p className="font-body text-neutral-mid text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE — CTA Final */}
      <section className="py-24 bg-depth/50 relative overflow-hidden">
        <div className="absolute inset-0 glow-orb w-[600px] h-[600px] mx-auto" />
        <div className="container mx-auto max-w-3xl px-6 md:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-3xl md:text-5xl font-black mb-6">
              Sua empresa pode ser o{" "}
              <span className="text-electric">próximo case</span>
            </h2>
            <p className="font-body text-neutral-mid text-lg mb-10 max-w-xl mx-auto">
              Agende um diagnóstico gratuito e descubra como a Loop pode transformar a gestão da sua empresa.
            </p>
            <a
              href="/#diagnostico"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric text-primary-foreground font-body font-bold text-base hover:opacity-90 transition-opacity"
            >
              Agendar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Portfolio;
