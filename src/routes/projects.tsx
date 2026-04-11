import { createFileRoute } from "@tanstack/react-router";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Taniya Fernandez" },
      { name: "description", content: "High-impact AI, SaaS, and full-stack projects by Taniya Fernandez." },
      { property: "og:title", content: "Projects — Taniya Fernandez" },
      { property: "og:description", content: "AI systems, SaaS products, and automation solutions." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "AI Career Counseling Platform",
    subtitle: "Intelligent Career Prediction",
    category: "AI / SaaS",
    description: "End-to-end AI platform that analyzes resumes, scores ATS compatibility, recommends jobs, identifies skill gaps, and predicts career trajectories via an integrated AI chatbot.",
    tags: ["Python", "ML", "NLP", "Flask", "MySQL"],
    highlights: [
      "Resume Analyzer with ATS scoring engine",
      "Job recommendation system with ML-based matching",
      "Skill gap analysis with personalized learning paths",
      "AI chatbot for real-time career guidance",
    ],
    whyPay: "Saves HR teams 40+ hours/week on resume screening and career advisory.",
    freelanceUse: "HR tech companies, recruitment agencies, EdTech startups",
    monetization: "SaaS subscription — per-seat pricing for enterprise",
  },
  {
    title: "AgriServe / AgroPulse",
    subtitle: "Production-Level AI System",
    category: "AI / Deep Learning",
    description: "AI-powered plant disease detection deployed at production scale with TensorRT and Triton Inference Server for real-time inference optimization.",
    tags: ["TensorRT", "Triton", "Python", "Deep Learning", "Docker"],
    highlights: [
      "AI-based plant disease detection with 95%+ accuracy",
      "TensorRT + Triton optimized inference pipeline",
      "Real-time image processing and classification",
      "Production-grade deployment architecture",
    ],
    whyPay: "Prevents crop losses worth thousands — real-time disease detection at scale.",
    freelanceUse: "AgriTech companies, farming cooperatives, government agencies",
    monetization: "API-as-a-service pricing per inference call",
  },
  {
    title: "AgroBot",
    subtitle: "Hardware + AI Integration",
    category: "IoT / AI",
    description: "IoT-based smart farming robot integrating sensors, automated irrigation, and real-time environmental monitoring with AI decision-making.",
    tags: ["IoT", "Arduino", "Python", "Sensors", "AI"],
    highlights: [
      "Automated irrigation based on soil moisture data",
      "Real-time environmental monitoring dashboard",
      "Sensor fusion for intelligent decision-making",
      "Hardware-software co-design",
    ],
    whyPay: "Automates farming operations — reduces water waste by 30%.",
    freelanceUse: "Smart agriculture startups, research labs",
    monetization: "Hardware kit + software subscription model",
  },
  {
    title: "Medi Vision",
    subtitle: "Real-Time Hospital Intelligence",
    category: "AI / Healthcare",
    description: "AI-powered hospital decision support for real-time patient triage, prioritization, and resource allocation in emergency scenarios.",
    tags: ["Python", "ML", "System Design", "Real-time"],
    highlights: [
      "Real-time patient triage and prioritization",
      "AI-driven resource allocation engine",
      "High-throughput emergency scenario handling",
      "Decision support for emergency medicine",
    ],
    whyPay: "Reduces ER wait times and improves patient outcomes with AI-driven triage.",
    freelanceUse: "Hospitals, HealthTech startups, government health agencies",
    monetization: "Enterprise license + per-facility pricing",
  },
  {
    title: "LeadFlow AI",
    subtitle: "Automated Lead Generation",
    category: "SaaS / AI Automation",
    description: "AI-powered lead generation and qualification system that scrapes prospects, scores them with ML, and automates outreach via email and WhatsApp.",
    tags: ["Django", "ML", "REST API", "Celery", "Redis"],
    highlights: [
      "AI lead scoring with conversion probability",
      "Automated email & WhatsApp outreach sequences",
      "CRM integration with pipeline visualization",
      "Real-time analytics dashboard",
    ],
    whyPay: "Replaces 3-4 tools (lead gen + scoring + CRM + outreach) in one platform.",
    freelanceUse: "Marketing agencies, B2B SaaS companies, real estate firms",
    monetization: "Monthly SaaS subscription — tiered by contacts",
  },
  {
    title: "InvoiceForge",
    subtitle: "Smart Billing System",
    category: "Full Stack / SaaS",
    description: "Comprehensive billing and invoice management with Django, raw SQL optimization, recurring billing logic, and multi-currency support.",
    tags: ["Django", "MySQL", "Raw SQL", "REST API", "React"],
    highlights: [
      "Custom billing engine with raw SQL optimization",
      "Recurring invoice generation and tracking",
      "Multi-currency and tax computation",
      "Role-based access control",
    ],
    whyPay: "SMBs need affordable billing — this replaces $50/mo tools at a fraction.",
    freelanceUse: "Small businesses, freelancers, accounting firms",
    monetization: "Freemium SaaS — free tier + paid plans",
  },
  {
    title: "SupportBot AI",
    subtitle: "Conversational AI Platform",
    category: "AI Automation",
    description: "Intelligent customer support chatbot with Gemini API integration, multi-turn context awareness, and domain-specific knowledge bases.",
    tags: ["Gemini API", "Python", "NLP", "LangChain", "React"],
    highlights: [
      "Gemini API integration for advanced NLP",
      "Context-aware multi-turn conversations",
      "Custom knowledge base ingestion",
      "Escalation to human agents with full context",
    ],
    whyPay: "Reduces support ticket volume by 60% — handles Tier-1 queries autonomously.",
    freelanceUse: "E-commerce brands, SaaS companies, service businesses",
    monetization: "Per-conversation pricing + monthly platform fee",
  },
  {
    title: "HireRadar",
    subtitle: "AI Recruitment Dashboard",
    category: "SaaS / AI",
    description: "End-to-end recruitment platform with AI-powered candidate matching, automated screening, and hiring pipeline analytics.",
    tags: ["Python", "TensorFlow", "Django", "MySQL", "React"],
    highlights: [
      "AI candidate-job matching with skill vectors",
      "Automated resume parsing and scoring",
      "Interview scheduling automation",
      "Hiring funnel analytics and reporting",
    ],
    whyPay: "Cuts time-to-hire by 50% — automated screening replaces manual review.",
    freelanceUse: "Staffing agencies, HR departments, tech companies",
    monetization: "Per-hire pricing + enterprise subscriptions",
  },
  {
    title: "DataPulse",
    subtitle: "Business Analytics Engine",
    category: "SaaS / Full Stack",
    description: "Self-service analytics platform that connects to business databases, generates AI-powered insights, and creates automated reports.",
    tags: ["Flask", "MySQL", "Scikit-learn", "React", "REST API"],
    highlights: [
      "Natural language data querying",
      "AI-generated insights and anomaly detection",
      "Automated scheduled reporting",
      "Multi-source database connectors",
    ],
    whyPay: "SMBs get enterprise-grade analytics without hiring data teams.",
    freelanceUse: "E-commerce, retail chains, finance companies",
    monetization: "Tiered SaaS subscription based on data volume",
  },
  {
    title: "WorkflowAI",
    subtitle: "Process Automation",
    category: "AI Automation / SaaS",
    description: "No-code workflow automation platform with AI decision nodes — automates approvals, notifications, data routing, and business processes.",
    tags: ["Django", "Celery", "Redis", "React", "REST API"],
    highlights: [
      "Visual drag-and-drop workflow builder",
      "AI-powered decision nodes for smart routing",
      "Integration with email, Slack, and webhooks",
      "Audit trail and compliance logging",
    ],
    whyPay: "Replaces manual processes — saves 20+ hours/week for operations teams.",
    freelanceUse: "Operations teams, logistics companies, enterprises",
    monetization: "Per-workflow pricing + enterprise plans",
  },
  {
    title: "ContentForge AI",
    subtitle: "AI Content Generation",
    category: "AI / SaaS",
    description: "AI-powered content creation platform for blogs, social media, and marketing copy with brand voice training and multi-format output.",
    tags: ["Gemini API", "Flask", "React", "NLP", "REST API"],
    highlights: [
      "Brand voice training on existing content",
      "Multi-format output (blog, social, email)",
      "SEO optimization with keyword analysis",
      "Content calendar and scheduling",
    ],
    whyPay: "Produces 10x content output — saves $5K+/month on content writers.",
    freelanceUse: "Marketing agencies, content teams, solopreneurs",
    monetization: "Credits-based pricing + monthly subscription",
  },
  {
    title: "InventoryIQ",
    subtitle: "Smart Inventory Management",
    category: "Full Stack / AI",
    description: "AI-enhanced inventory management with demand forecasting, automated reordering, and multi-warehouse tracking for retail and e-commerce.",
    tags: ["Django", "MySQL", "Scikit-learn", "React", "REST API"],
    highlights: [
      "ML-based demand forecasting",
      "Automated reorder point calculation",
      "Multi-warehouse stock tracking",
      "Supplier management and PO automation",
    ],
    whyPay: "Prevents stockouts and overstock — reduces inventory costs by 25%.",
    freelanceUse: "Retail businesses, e-commerce stores, warehouses",
    monetization: "SaaS subscription — tiered by SKU count",
  },
  {
    title: "DocuMind",
    subtitle: "Intelligent Document Processing",
    category: "AI Automation",
    description: "AI-powered document processing system that extracts, classifies, and routes information from PDFs, invoices, and contracts automatically.",
    tags: ["Python", "OpenCV", "TensorFlow", "Flask", "REST API"],
    highlights: [
      "OCR + AI for document data extraction",
      "Automatic document classification",
      "Smart routing and approval workflows",
      "Integration with existing ERP systems",
    ],
    whyPay: "Eliminates 90% of manual data entry — processes documents 100x faster.",
    freelanceUse: "Law firms, accounting firms, insurance companies",
    monetization: "Per-document pricing + enterprise license",
  },
  {
    title: "PriceOptima",
    subtitle: "Dynamic Pricing Engine",
    category: "AI / SaaS",
    description: "ML-driven dynamic pricing system that analyzes competitor prices, demand patterns, and market conditions to optimize pricing in real-time.",
    tags: ["Python", "Scikit-learn", "Django", "MySQL", "React"],
    highlights: [
      "Real-time competitor price monitoring",
      "ML demand elasticity modeling",
      "A/B pricing experiment framework",
      "Revenue impact analytics dashboard",
    ],
    whyPay: "Increases revenue by 10-30% through optimized pricing strategies.",
    freelanceUse: "E-commerce, hotels, airlines, ride-sharing companies",
    monetization: "Revenue-share model + SaaS subscription",
  },
  {
    title: "SentinelWatch",
    subtitle: "AI Security Monitor",
    category: "AI / Full Stack",
    description: "AI-powered security monitoring system with real-time threat detection, anomaly analysis, and automated incident response for digital infrastructure.",
    tags: ["Python", "TensorFlow", "Flask", "Redis", "Docker"],
    highlights: [
      "Real-time network anomaly detection",
      "AI-powered threat classification",
      "Automated incident response playbooks",
      "Security posture dashboard and reporting",
    ],
    whyPay: "24/7 AI security monitoring at 1/10th the cost of a SOC team.",
    freelanceUse: "MSPs, enterprise IT teams, fintech companies",
    monetization: "Per-endpoint monthly subscription",
  },
];

const topPicks = ["LeadFlow AI", "SupportBot AI", "InvoiceForge"];

function ProjectsPage() {
  return (
    <section className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Portfolio"
          title="PROJECTS & SYSTEMS"
          description="High-impact AI platforms, SaaS products, and automation systems — built for real-world deployment and revenue generation."
        />

        {/* Top picks banner */}
        <div className="mb-10 border border-border bg-card p-6">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">★ Top 3 — Build First</p>
          <div className="flex flex-wrap gap-3">
            {topPicks.map((name) => (
              <span key={name} className="border border-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground">{name}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
