import { Header } from "@/widgets/header";
import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { Projects } from "@/features/projects";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
