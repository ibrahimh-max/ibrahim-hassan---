import { Lightbulb, Layers, Target } from 'lucide-react';

const principles = [
  {
    icon: Layers,
    title: 'Build to Understand',
    description: 'Theory without practice is incomplete. I learn best when I can see how all the pieces connect—from the lowest hardware layer to the highest abstraction.',
  },
  {
    icon: Target,
    title: 'Solve Real Problems',
    description: 'I don\'t build toy projects. Every system I create addresses a genuine challenge, whether it\'s helping students learn or demonstrating hardware fundamentals.',
  },
  {
    icon: Lightbulb,
    title: 'First Principles First',
    description: 'Before reaching for frameworks, I understand the fundamentals. This is why I can build an alert system without a microcontroller—and know when to use one.',
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              How I Think About Building
            </h2>
          </div>

          <div className="space-y-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="flex gap-6 items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote block */}
          <div className="mt-16 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
            <blockquote className="pl-8">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "I don't want to just use AI—I want to understand how to build systems 
                that genuinely help people learn. That requires going deeper than 
                prompts and APIs."
              </p>
              <footer className="mt-4 text-muted-foreground">
                — My approach to Edurance
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
