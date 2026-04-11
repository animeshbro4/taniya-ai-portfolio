import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Taniya Fernandez" },
      { name: "description", content: "AI development, full-stack engineering, and consulting services." },
      { property: "og:title", content: "Services — Taniya Fernandez" },
      { property: "og:description", content: "AI development and full-stack engineering services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: "🧠",
    title: "AI Platform Development",
    description: "Custom ML-powered platforms — from data pipelines to inference engines. Specializing in NLP, computer vision, and recommendation systems.",
  },
  {
    icon: "⚡",
    title: "AI Inference Optimization",
    description: "Production deployment with TensorRT, Triton Inference Server, and optimized serving architectures for real-time AI workloads.",
  },
  {
    icon: "🔧",
    title: "Full Stack Development",
    description: "End-to-end application development with Django, Flask, React, and MySQL. REST APIs, authentication, and scalable architectures.",
  },
  {
    icon: "🤖",
    title: "Intelligent Automation",
    description: "Smart bots, IoT integrations, and automated decision systems. Bridging hardware and software with AI-driven control logic.",
  },
  {
    icon: "💬",
    title: "AI Chatbot Development",
    description: "Conversational AI systems with Gemini API integration. Context-aware, multi-turn dialogue with domain-specific knowledge.",
  },
  {
    icon: "📊",
    title: "System Design & Consulting",
    description: "Architecture consulting for AI-first products. Database design, API strategy, and deployment planning for scalable systems.",
  },
];

const techStack = [
  { category: "AI / ML", items: ["Python", "TensorFlow", "PyTorch", "TensorRT", "Triton", "Scikit-learn", "OpenCV"] },
  { category: "Backend", items: ["Django", "Flask", "REST APIs", "MySQL", "Raw SQL", "Redis"] },
  { category: "Frontend", items: ["React", "HTML/CSS", "JavaScript", "Tailwind CSS"] },
  { category: "DevOps / Tools", items: ["Docker", "Git", "Linux", "Arduino", "IoT Sensors"] },
  { category: "AI APIs", items: ["Gemini API", "OpenAI", "Hugging Face", "LangChain"] },
];

function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="What I Offer"
          title="Services"
          description="From concept to production — AI systems engineering and full-stack development."
        />
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glow-border rounded-2xl bg-card p-6"
            >
              <span className="mb-4 block text-3xl">{s.icon}</span>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <SectionHeading label="Tools & Technologies" title="Tech Stack" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">{cat.category}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
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
