import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taniya Fernandez — AI Systems Developer & Full Stack Engineer" },
      { name: "description", content: "Building production-level AI platforms, scalable backends, and intelligent systems." },
      { property: "og:title", content: "Taniya Fernandez — AI Systems Developer" },
      { property: "og:description", content: "Building production-level AI platforms, scalable backends, and intelligent systems." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <HeroSection />;
}
