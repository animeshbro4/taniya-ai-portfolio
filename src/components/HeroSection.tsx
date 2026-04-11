import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import profileImg from "@/assets/taniya-profile.jpg";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "AI Systems" },
  { value: "3rd", label: "Prize — SERBOT" },
];

export default function HeroSection() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center pt-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            AI Systems Developer & Full Stack Engineer
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            Building intelligent
            <br />
            <span className="text-primary">systems that solve</span>
            <br />
            real-world problems
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            I design and deploy production-level AI platforms, scalable backends,
            and end-to-end intelligent systems — from ML pipelines to IoT integrations.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Contact Me <span>→</span>
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* Right — stats + image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border lg:h-80 lg:w-80">
            <img
              src={profileImg}
              alt="Taniya Fernandez"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full max-w-sm flex-col gap-3">
            {stats.map((s) => (
              <div key={s.label} className="stat-card rounded-xl px-6 py-4 text-center">
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
