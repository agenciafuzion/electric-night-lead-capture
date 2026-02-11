import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Loader2 } from "lucide-react";
import JobCard from "@/components/JobCard";
import { useJobs } from "@/hooks/useJobs";

const filters = ["Todas", "Presencial", "Híbrido", "Remoto"];

const Vagas = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todas");
  const { data: jobs, isLoading } = useJobs();

  const filtered = (jobs || []).filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchFilter =
      activeFilter === "Todas" || job.contract_type.toLowerCase().includes(activeFilter.toLowerCase());
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-deep">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 overflow-hidden">
        <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] animate-glow-pulse pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-neutral-mid" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all ${
                  activeFilter === f ? "bg-electric text-primary-foreground" : "bg-depth text-neutral-mid hover:text-primary-foreground"
                }`}
              >
                {f}
              </button>
            ))}
            {!isLoading && (
              <span className="ml-auto font-body text-sm text-neutral-mid">
                {filtered.length} vaga{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 text-electric animate-spin" /></div>
          ) : filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </div>
          ) : jobs?.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="font-body text-neutral-mid text-lg">Nenhuma vaga disponível no momento.</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="font-body text-neutral-mid text-lg">Nenhuma vaga encontrada com esses filtros.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Vagas;
