import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, Building2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-depth/80 bg-deep hover:border-electric/40 transition-all duration-300 hover:shadow-xl hover:shadow-electric/5 overflow-hidden flex flex-col"
    >
      {/* Glow accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative p-6 md:p-8 flex flex-col flex-1">
        {/* Top row */}
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

        {/* Description */}
        <p className="font-body text-neutral-mid text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
          {job.description}
        </p>

        {/* Info chips */}
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

        {/* Tags */}
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

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-depth">
          <span className="font-body text-xs text-neutral-mid">{job.postedAt}</span>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity group/btn">
            Candidatar-se
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
