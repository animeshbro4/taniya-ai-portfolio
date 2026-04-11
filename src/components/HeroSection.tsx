import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import profileImg from "@/assets/taniya-profile.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* Main hero area */}
      <div className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-0 px-6 lg:grid-cols-12">
          {/* Left text block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center py-20 lg:col-span-7"
          >
            <h1 className="text-5xl font-bold uppercase leading-[0.9] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              BUILDING
              <br />
              INTELLIGENT
              <br />
              <span className="text-muted-foreground">SYSTEMS</span>
            </h1>
            <div className="mt-8 flex items-start gap-6">
              <span className="asterisk text-4xl text-foreground">✳</span>
              <p className="max-w-sm text-xs uppercase leading-relaxed tracking-widest text-muted-foreground">
                AI Systems Developer & Full Stack Engineer — designing production-level
                platforms, scalable backends, and end-to-end intelligent systems.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>

          {/* Right image block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-end justify-end lg:col-span-5"
          >
            <div className="relative h-[400px] w-full overflow-hidden border border-border grayscale lg:h-[500px]">
              <img
                src={profileImg}
                alt="Taniya Fernandez"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee ticker */}
      <div className="overflow-hidden border-t border-border py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-6">
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">AI SYSTEMS</span>
              <span className="asterisk text-foreground">✳</span>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">FULL STACK</span>
              <span className="asterisk text-foreground">✳</span>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">SAAS PRODUCTS</span>
              <span className="asterisk text-foreground">✳</span>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">AI AUTOMATION</span>
              <span className="asterisk text-foreground">✳</span>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">INTELLIGENT SYSTEMS</span>
              <span className="asterisk text-foreground">✳</span>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">ML PIPELINES</span>
              <span className="asterisk text-foreground">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
