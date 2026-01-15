import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const words = ['apps', 'websites', 'circuits', 'AI Agents'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 text-center pt-20">
        <div className="opacity-0 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Engineering student. Real builder.
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-in animation-delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient">Builder</span>,{' '}
          <span className="text-gradient-accent">Engineer</span>,{' '}
          <br className="hidden sm:block" />
          Problem Solver.
        </h1>

        <p className="opacity-0 animate-fade-in animation-delay-300 text-xl md:text-2xl font-semibold mb-4">
          Suffering from PeniaPhobia
        </p>

        <p className="opacity-0 animate-fade-in animation-delay-400 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I'm Ibrahim Hassan. I build real-world tech products—from AI education 
          platforms to embedded hardware systems. Turning ideas into working solutions.
        </p>

        <div className="opacity-0 animate-fade-in animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors border border-border"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
