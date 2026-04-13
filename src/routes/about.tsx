import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import profileImg from "@/assets/taniya-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Taniya Fernandez" },
      { name: "description", content: "Learn about Taniya Fernandez's background in AI systems and full-stack engineering." },
      { property: "og:title", content: "About — Taniya Fernandez" },
      { property: "og:description", content: "AI Systems Developer building real-world intelligent systems." },
    ],
  }),
  component: AboutPage,
});

const achievements = [
  { title: "Webnify — Developer and Receptionist", description: "Contributed to website work while also managing receptionist and client-facing responsibilities." },
  { title: "3rd Prize — SERBOT TECH EXPO", description: "Competed against 50+ teams, showcasing an AI-powered IoT system." },
  { title: "Led Multiple AI & IoT Projects", description: "From career counseling platforms to smart farming bots — end-to-end ownership." },
  { title: "Production-Level AI Deployments", description: "TensorRT + Triton inference pipelines deployed for real-time workloads." },
  { title: "Full Stack Product Builder", description: "Shipped complete products with Django, Flask, MySQL, and modern frontends." },
];

function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading label="About Me" title="TANIYA FERNANDEZ" />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I'm an AI Systems Developer and Full Stack Engineer who builds intelligent systems
                that solve real-world problems. My work spans ML-powered platforms, scalable backend
                architectures, and production-level AI deployments.
              </p>
              <p>
                At Webnify, I worked as a Developer and Receptionist, combining website support with
                front-desk coordination and client communication.
              </p>
              <p>
                I focus on the intersection of artificial intelligence and practical engineering —
                from training models and optimizing inference pipelines to building the full-stack
                applications that deliver AI to end users.
              </p>
              <p>
                Whether it's a career prediction engine, a plant disease detection system at scale,
                or an IoT-enabled smart farming robot, I bring a systems-thinking approach to every project.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-lg border border-border">
              <img src={profileImg} alt="Taniya Fernandez" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/10" />
            </div>
          </motion.div>
        </div>

        <SectionHeading label="Track Record" title="ACHIEVEMENTS" description="Key milestones from building and deploying real-world systems." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glow-border bg-card p-6"
            >
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-card-foreground">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
