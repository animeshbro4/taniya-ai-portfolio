import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
      <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
