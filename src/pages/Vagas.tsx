import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import JobCard, { type Job } from "@/components/JobCard";
import logoLoop from "@/assets/logo-loop.png";

const sampleJobs: Job[] = [
  {
    id: "1",
    title: "Coordenador(a) de Produção",
    company: "Confidencial",
    location: "São Paulo, SP",
    type: "CLT — Presencial",
    level: "Pleno / Sênior",
    salary: "R$ 8.000 – 12.000",
    tags: ["Gestão", "Produção", "Liderança"],
    description: "Responsável por coordenar a equipe de produção, garantir o cumprimento de prazos e metas, implementar melhorias de processo e reportar indicadores de performance.",
    postedAt: "Publicada há 2 dias",
    urgent: true,
  },
  {
    id: "2",
    title: "Analista de Processos",
    company: "Confidencial",
    location: "Campinas, SP",
    type: "CLT — Híbrido",
    level: "Pleno",
    tags: ["Processos", "Melhoria Contínua", "Lean"],
    description: "Mapear e analisar processos operacionais, identificar gargalos e propor soluções para otimização de fluxos de trabalho, garantindo eficiência e qualidade.",
    postedAt: "Publicada há 3 dias",
  },
  {
    id: "3",
    title: "Supervisor(a) de Operações",
    company: "Confidencial",
    location: "Curitiba, PR",
    type: "CLT — Presencial",
    level: "Sênior",
    salary: "R$ 10.000 – 15.000",
    tags: ["Operações", "Gestão de Equipes", "KPIs"],
    description: "Supervisionar as operações diárias, gerenciar equipe multidisciplinar, acompanhar indicadores e garantir a entrega dos resultados conforme planejamento estratégico.",
    postedAt: "Publicada há 5 dias",
  },
  {
    id: "4",
    title: "Assistente Administrativo",
    company: "Confidencial",
    location: "Remoto",
    type: "CLT — Remoto",
    level: "Júnior",
    tags: ["Administrativo", "Organização", "Excel"],
    description: "Apoiar rotinas administrativas, organizar documentos, alimentar planilhas de controle e auxiliar na gestão de agenda e compromissos da diretoria.",
    postedAt: "Publicada há 1 semana",
  },
  {
    id: "5",
    title: "Gerente de RH",
    company: "Confidencial",
    location: "Belo Horizonte, MG",
    type: "CLT — Presencial",
    level: "Sênior",
    salary: "R$ 12.000 – 18.000",
    tags: ["RH", "Desenvolvimento", "Cultura"],
    description: "Liderar a área de Recursos Humanos, desenvolver programas de treinamento, implementar políticas de gestão de pessoas e fortalecer a cultura organizacional.",
    postedAt: "Publicada há 1 semana",
    urgent: true,
  },
  {
    id: "6",
    title: "Consultor(a) de Gestão",
    company: "Loop Consultoria",
    location: "São Paulo, SP",
    type: "PJ — Híbrido",
    level: "Pleno / Sênior",
    tags: ["Consultoria", "Gestão", "Estratégia"],
    description: "Realizar diagnósticos empresariais, elaborar planos de ação e acompanhar a implementação de melhorias em processos e rotinas de gestão nos clientes da Loop.",
    postedAt: "Publicada hoje",
    urgent: true,
  },
];

const filters = ["Todas", "Presencial", "Híbrido", "Remoto"];

const Vagas = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filtered = sampleJobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchFilter =
      activeFilter === "Todas" || job.type.toLowerCase().includes(activeFilter.toLowerCase());
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-deep">
      {/* Header */}
      <header className="bg-deep/95 backdrop-blur-md border-b border-depth sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-16 flex items-center justify-between h-16 md:h-20">
          <Link to="/">
            <img src={logoLoop} alt="Loop Consultoria" className="h-8 md:h-10" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-body text-sm font-medium text-neutral-mid hover:text-primary-foreground transition-colors"
            >
              Home
            </Link>
            <span className="font-body text-sm font-semibold text-primary-foreground">Vagas</span>
            <a
              href="/#diagnostico"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Agendar Diagnóstico
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 overflow-hidden">
        <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] animate-glow-pulse pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-electric animate-glow-pulse" />
              <span className="text-sm font-body text-electric">Oportunidades</span>
            </span>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Vagas <span className="text-electric">Abertas</span>
            </h1>
            <p className="font-body text-neutral-mid text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Encontre a oportunidade ideal e faça parte de empresas que valorizam processos, gestão e desenvolvimento de pessoas.
            </p>

            {/* Search bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-mid" />
                <input
                  type="text"
                  placeholder="Buscar por cargo ou área..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl glass font-body text-sm text-primary-foreground placeholder:text-neutral-mid focus:outline-none focus:ring-2 focus:ring-electric/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Jobs */}
      <section className="px-6 md:px-16 pb-24">
        <div className="container mx-auto max-w-5xl">
          {/* Filter chips */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-neutral-mid" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-electric text-primary-foreground"
                    : "bg-depth text-neutral-mid hover:text-primary-foreground"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto font-body text-sm text-neutral-mid">
              {filtered.length} vaga{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Job grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-body text-neutral-mid text-lg">Nenhuma vaga encontrada com esses filtros.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Vagas;
