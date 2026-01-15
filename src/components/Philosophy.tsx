import { Lightbulb, Layers, Target } from 'lucide-react';

const principles = [
  {
    icon: Layers,
    title: 'Build to Really Learn',
    description:
      'If I just copy code from a tutorial, it feels fake. Real learning happens when I try things myself, get stuck, and figure out why something works.',
  },
  {
    icon: Target,
    title: 'Work That Matters',
    description:
      'I don’t enjoy boring calculator or tracker projects. I like building things that can change how people learn or live, like Edurance.',
  },
  {
    icon: Lightbulb,
    title: 'Try Before Saying No',
    description:
      'I don’t say “I don’t know.” I say “I haven’t tried yet.” Most things feel hard only before you start.',
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
            {principles.map((principle) => (
              <div key={principle.title} className="flex gap-6 items-start group">
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

          <div className="mt-16 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
            <blockquote className="pl-8">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "I don’t want to just use AI. I want to build my own systems, even if they’re
                messy, slow, or imperfect — as long as they actually help people learn."
              </p>
              <footer className="mt-4 text-muted-foreground">
                — My approach to building Edurance
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
