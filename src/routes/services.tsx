import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Taniya Fernandez" },
      { name: "description", content: "AI development, SaaS products, full-stack engineering, and automation services." },
      { property: "og:title", content: "Services — Taniya Fernandez" },
      { property: "og:description", content: "AI development, SaaS, and automation services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "AI Platform Development",
    description: "Custom ML-powered platforms — from data pipelines to inference engines. NLP, computer vision, and recommendation systems.",
  },
  {
    title: "SaaS Product Engineering",
    description: "End-to-end SaaS development — multi-tenant architecture, billing, analytics dashboards, and API-first design.",
  },
  {
    title: "AI Inference Optimization",
    description: "Production deployment with TensorRT, Triton Inference Server, and optimized serving for real-time AI workloads.",
  },
  {
    title: "Full Stack Development",
    description: "Django, Flask, React, MySQL. REST APIs, auth, and scalable architectures for web applications.",
  },
  {
    title: "AI Automation Systems",
    description: "Smart bots, workflow automation, CRM integrations, and AI-driven decision systems that replace manual processes.",
  },
  {
    title: "Conversational AI",
    description: "Chatbots with Gemini API integration. Context-aware, multi-turn dialogue with domain-specific knowledge bases.",
  },
];

const techStack = [
  { category: "AI / ML", items: ["Python", "TensorFlow", "PyTorch", "TensorRT", "Triton", "Scikit-learn", "OpenCV"] },
  { category: "Backend", items: ["Django", "Flask", "REST APIs", "MySQL", "Raw SQL", "Redis", "Celery"] },
  { category: "Frontend", items: ["React", "HTML/CSS", "JavaScript", "Tailwind CSS"] },
  { category: "DevOps", items: ["Docker", "Git", "Linux", "Arduino", "IoT Sensors"] },
  { category: "AI APIs", items: ["Gemini API", "OpenAI", "Hugging Face", "LangChain"] },
];

function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="What I Offer"
          title="SERVICES"
          description="From concept to production — AI systems, SaaS products, and automation solutions."
        />
        <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glow-border bg-card p-6"
            >
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-card-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <SectionHeading label="Tools & Technologies" title="TECH STACK" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-border bg-card p-6"
            >
              <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{cat.category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="border border-border bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
