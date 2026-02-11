import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, Building2, DollarSign, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
  salary?: string;
  tags: string[];
  description: string;
  postedAt: string;
  urgent?: boolean;
}

const JobCard = ({ job, index }: { job: Job; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        onClick={() => setOpen(true)}
        className="group relative rounded-2xl border border-depth/80 bg-deep hover:border-electric/40 transition-all duration-300 hover:shadow-xl hover:shadow-electric/5 overflow-hidden flex flex-col cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative p-6 md:p-8 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-electric" />
                </div>
                <span className="font-body text-sm text-neutral-mid">{job.company}</span>
                {job.urgent && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-electric/20 text-electric font-body animate-glow-pulse">
                    Urgente
                  </span>
                )}
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-primary-foreground group-hover:text-electric transition-colors">
                {job.title}
              </h3>
            </div>
          </div>

          <p className="font-body text-neutral-mid text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-depth text-neutral-mid font-body text-xs">
              <MapPin className="w-3.5 h-3.5" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-depth text-neutral-mid font-body text-xs">
              <Clock className="w-3.5 h-3.5" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-depth text-neutral-mid font-body text-xs">
              <Briefcase className="w-3.5 h-3.5" />
              {job.level}
            </span>
            {job.salary && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-electric/10 text-electric font-body text-xs font-semibold">
                <DollarSign className="w-3.5 h-3.5" />
                {job.salary}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-electric/20 text-electric font-body text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-depth">
            <span className="font-body text-xs text-neutral-mid">{job.postedAt}</span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold group-hover:opacity-90 transition-opacity">
              Ver Detalhes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Job Detail Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-deep border-depth text-primary-foreground p-0 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <span className="font-body text-sm text-neutral-mid">{job.company}</span>
                  {job.urgent && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-electric/20 text-electric font-body">
                      Urgente
                    </span>
                  )}
                </div>
              </div>
              <DialogTitle className="font-headline text-2xl md:text-3xl font-bold text-primary-foreground">
                {job.title}
              </DialogTitle>
              <DialogDescription className="sr-only">Detalhes da vaga {job.title}</DialogDescription>
            </DialogHeader>

            {/* Info chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-depth text-neutral-mid font-body text-sm">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-depth text-neutral-mid font-body text-sm">
                <Clock className="w-4 h-4" />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-depth text-neutral-mid font-body text-sm">
                <Briefcase className="w-4 h-4" />
                {job.level}
              </span>
              {job.salary && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-electric/10 text-electric font-body text-sm font-semibold">
                  <DollarSign className="w-4 h-4" />
                  {job.salary}
                </span>
              )}
            </div>

            {/* Full description */}
            <div className="mb-6">
              <h4 className="font-headline text-lg font-semibold text-primary-foreground mb-3">Descrição da Vaga</h4>
              <p className="font-body text-neutral-mid text-sm leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h4 className="font-headline text-lg font-semibold text-primary-foreground mb-3">Áreas</h4>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full border border-electric/20 text-electric font-body text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-depth">
              <span className="font-body text-sm text-neutral-mid">{job.postedAt}</span>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity">
                Candidatar-se
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobCard;
