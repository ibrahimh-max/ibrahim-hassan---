import { ArrowUpRight, Brain, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Edurance',
    subtitle: 'AI-Powered Personal Tutor',
    description: 'Not a chatbot—a diagnostic learning system. Edurance identifies conceptual gaps in student understanding and provides step-by-step guided learning paths. Built with a dual-agent architecture: a diagnostic agent that maps knowledge gaps, and a tutor agent that adapts explanations in real-time.',
    tags: ['AI/ML', 'Education', 'Multi-Agent Systems'],
    icon: Brain,
    featured: true,
    highlights: [
      'Diagnostic agent identifies knowledge gaps before teaching',
      'Tutor agent adapts explanations to individual learning patterns',
      'Step-by-step guidance, not just Q&A responses',
    ],
  },
  {
    title: 'Proximity Alert Circuit',
    subtitle: 'Hardware-Only Design',
    description: 'A distance-sensing alert system built entirely from discrete components—no microcontroller, no software. Uses an ultrasonic sensor paired with a 555 timer circuit to demonstrate that elegant solutions often come from understanding fundamentals, not adding complexity.',
    tags: ['Embedded Systems', 'Hardware', '555 Timer'],
    icon: Cpu,
    featured: false,
    highlights: [
      'Zero software dependency—pure analog/digital logic',
      'Ultrasonic distance sensing with adjustable thresholds',
      'Demonstrates first-principles hardware design',
    ],
  },
  {
    title: 'HackPrix Season 2',
    subtitle: 'Hackathon Platform',
    description: 'A clean, responsive multi-page website for a competitive hackathon. Focused on clear information architecture and smooth user experience for participants navigating registration, schedules, and resources.',
    tags: ['Web Development', 'UI/UX', 'Event Platform'],
    icon: Globe,
    featured: false,
    highlights: [
      'Responsive design across all device sizes',
      'Clear navigation and information hierarchy',
      'Built with modern web standards',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Selected Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Projects that reflect how I think—each one built to deeply understand a problem, 
            not just solve it superficially.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-elevated overflow-hidden transition-all duration-300 hover:border-primary/30 ${
                project.featured ? 'md:grid md:grid-cols-5' : ''
              }`}
            >
              {project.featured && (
                <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-accent/5 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
                  <div className="relative">
                    <project.icon className="w-24 h-24 text-primary/60" strokeWidth={1} />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-full" />
                  </div>
                </div>
              )}
              
              <div className={`p-8 ${project.featured ? 'md:col-span-3' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {!project.featured && (
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors group">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">→</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
