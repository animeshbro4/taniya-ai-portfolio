import { createFileRoute } from "@tanstack/react-router";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Taniya Fernandez" },
      { name: "description", content: "Featured AI and full-stack projects by Taniya Fernandez." },
      { property: "og:title", content: "Projects — Taniya Fernandez" },
      { property: "og:description", content: "Featured AI and full-stack projects." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "AI Career Counseling Platform",
    subtitle: "Intelligent Career Prediction",
    description:
      "End-to-end AI platform that analyzes resumes, scores ATS compatibility, recommends jobs, identifies skill gaps, and provides career predictions via an integrated AI chatbot.",
    tags: ["Python", "ML", "NLP", "Flask", "MySQL"],
    highlights: [
      "Resume Analyzer with ATS scoring engine",
      "Job recommendation system with ML-based matching",
      "Skill gap analysis with personalized learning paths",
      "AI chatbot for real-time career guidance",
    ],
  },
  {
    title: "AgriServe / AgroPulse",
    subtitle: "Production-Level AI System",
    description:
      "AI-powered plant disease detection system with optimized inference pipelines deployed at production scale using TensorRT and Triton Inference Server.",
    tags: ["TensorRT", "Triton", "Python", "Deep Learning", "Docker"],
    highlights: [
      "AI-based plant disease detection with 95%+ accuracy",
      "TensorRT + Triton optimized inference pipeline",
      "Real-time image processing and classification",
      "Production-grade deployment architecture",
    ],
  },
  {
    title: "AgroBot",
    subtitle: "Hardware + AI Integration",
    description:
      "IoT-based smart farming robot integrating sensors, automated irrigation, and real-time environmental monitoring with AI decision-making capabilities.",
    tags: ["IoT", "Arduino", "Python", "Sensors", "AI"],
    highlights: [
      "Automated irrigation based on soil moisture data",
      "Real-time environmental monitoring dashboard",
      "Sensor fusion for intelligent decision-making",
      "Hardware-software co-design",
    ],
  },
  {
    title: "Medi Vision",
    subtitle: "Real-Time Intelligence",
    description:
      "AI-powered hospital decision support system for real-time patient triage, prioritization, and resource allocation in emergency scenarios.",
    tags: ["Python", "ML", "System Design", "Real-time"],
    highlights: [
      "Real-time patient triage and prioritization",
      "AI-driven resource allocation engine",
      "System designed for high-throughput scenarios",
      "Decision support for emergency medicine",
    ],
  },
  {
    title: "Billing System",
    subtitle: "Full Stack Application",
    description:
      "Comprehensive billing and invoice management system built with Django and raw SQL queries for maximum control over data operations.",
    tags: ["Django", "MySQL", "Raw SQL", "REST API"],
    highlights: [
      "Custom billing engine with raw SQL optimization",
      "Invoice generation and tracking",
      "Role-based access control",
    ],
  },
  {
    title: "AI Chatbot Integrations",
    subtitle: "Conversational AI",
    description:
      "Intelligent chatbot systems integrated with Gemini API for natural language understanding and contextual response generation.",
    tags: ["Gemini API", "Python", "NLP", "REST"],
    highlights: [
      "Gemini API integration for advanced NLP",
      "Context-aware conversational flows",
      "Multi-domain deployment ready",
    ],
  },
];

function ProjectsPage() {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Featured Work"
          title="Projects & Systems"
          description="High-impact AI platforms and full-stack systems built for real-world deployment."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
