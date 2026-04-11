import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  index: number;
}

export default function ProjectCard({ title, subtitle, description, tags, highlights, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-border group rounded-2xl bg-card p-6 md:p-8"
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">{subtitle}</p>
      <h3 className="mb-3 text-xl font-bold text-card-foreground md:text-2xl">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mb-5 space-y-1">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
