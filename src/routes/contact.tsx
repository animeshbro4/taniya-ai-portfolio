import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Taniya Fernandez" },
      { name: "description", content: "Get in touch for AI development and full-stack engineering projects." },
      { property: "og:title", content: "Contact — Taniya Fernandez" },
      { property: "og:description", content: "Start a project with Taniya Fernandez." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid-bg min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Intelligent"
          description="Have a project in mind? I'd love to hear about it. Drop me a message and let's discuss how AI can solve your problem."
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-primary/30 bg-card p-12 text-center"
          >
            <p className="text-2xl font-bold text-foreground">Message Sent ✓</p>
            <p className="mt-2 text-sm text-muted-foreground">I'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-5 rounded-2xl border border-border bg-card p-8"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Project Type</label>
              <select className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary">
                <option>AI Platform Development</option>
                <option>Full Stack Application</option>
                <option>AI Consulting</option>
                <option>Chatbot Development</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message →
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
