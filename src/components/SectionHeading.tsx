import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
