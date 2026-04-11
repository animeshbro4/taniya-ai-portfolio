import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Taniya Fernandez" },
      { name: "description", content: "Get in touch for AI development, SaaS products, and automation projects." },
      { property: "og:title", content: "Contact — Taniya Fernandez" },
      { property: "og:description", content: "Start a project with Taniya Fernandez." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label="Get In Touch"
          title="LET'S BUILD SOMETHING"
          description="Have a project in mind? Drop me a message and let's discuss how AI and automation can solve your problem."
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-foreground bg-card p-12 text-center"
          >
            <p className="text-2xl font-bold uppercase text-foreground">Message Sent ✳</p>
            <p className="mt-2 text-sm text-muted-foreground">I'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-4 border border-border bg-card p-8"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                <input required type="text" className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                <input required type="email" className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Project Type</label>
              <select className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground">
                <option>AI Platform Development</option>
                <option>SaaS Product</option>
                <option>AI Automation</option>
                <option>Full Stack Application</option>
                <option>Chatbot Development</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea required rows={5} className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full border border-foreground bg-foreground py-3 text-sm font-bold uppercase tracking-widest text-background transition-opacity hover:opacity-80">
              Send Message →
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
