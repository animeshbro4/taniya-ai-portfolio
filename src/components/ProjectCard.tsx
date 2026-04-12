import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  highlights: string[];
  index: number;
  whyPay?: string;
  freelanceUse?: string;
  monetization?: string;
}

export default function ProjectCard({ title, subtitle, category, description, tags, highlights, index, whyPay, freelanceUse, monetization }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glow-border group p-6 md:p-8"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="border border-border px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{category}</span>
      </div>
      <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{subtitle}</p>
      <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-card-foreground md:text-2xl">{title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mb-5 space-y-1.5">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {h}
          </li>
        ))}
      </ul>
      {whyPay && (
        <p className="mb-3 text-xs text-muted-foreground"><span className="font-bold uppercase text-foreground">Value: </span>{whyPay}</p>
      )}
      {freelanceUse && (
        <p className="mb-3 text-xs text-muted-foreground"><span className="font-bold uppercase text-foreground">Client: </span>{freelanceUse}</p>
      )}
      {monetization && (
        <p className="mb-4 text-xs text-muted-foreground"><span className="font-bold uppercase text-foreground">Revenue: </span>{monetization}</p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="border border-border bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
