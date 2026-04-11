import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Taniya Fernandez — All rights reserved
        </p>
        <div className="flex gap-8">
          <Link to="/" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/projects" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">Projects</Link>
          <Link to="/services" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">Services</Link>
          <Link to="/contact" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
