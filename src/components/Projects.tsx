import { ArrowUpRight, Brain, Cpu, Globe, Mail } from 'lucide-react';

const projects = [
  {
    title: 'Edurance',
    subtitle: 'AI Tutor I’m Actively Building',
    description:
      'Edurance is an AI-based tutoring system I’m building because teachers today aren’t enough and many don’t explain things well. The idea is to make AI agents that actually teach step by step instead of just answering questions. It’s still under development and very hard, but that’s what makes it exciting.',
    tags: ['AI', 'Education', 'Agents'],
    icon: Brain,
    featured: true,
    highlights: [
      'Built to teach, not just answer',
      'Uses AI agents instead of chatbots',
      'Still evolving as I learn',
    ],
  },
  {
    title: 'Zap Mail',
    subtitle: 'Email Automation Tool',
    description:
      'Zap Mail is a tool I built to automate boring email tasks. It helps in sending, managing, and organizing emails faster so people don’t waste time doing the same things again and again. This project taught me a lot about backend logic, automation, and real-world workflows.',
    tags: ['Automation', 'Email', 'Backend'],
    icon: Mail,
    featured: false,
    highlights: [
      'Automates repetitive email tasks',
      'Built for real usage, not demo',
      'Helped me understand backend systems',
    ],
  },
  {
    title: 'FastPark',
    subtitle: 'Smart Parking System',
    description:
      'FastPark is a system I built to make parking easier and faster. The idea is to help users find available parking spots quickly instead of wasting time searching. It focuses on solving a real daily-life problem.',
    tags: ['Smart Systems', 'IoT', 'Web'],
    icon: Globe,
    featured: false,
    highlights: [
      'Solves a real-world daily problem',
      'Focus on speed and simplicity',
      'Built to be practical, not fancy',
    ],
  },
  {
    title: 'HackPrix Season 2',
    subtitle: 'Hackathon Website',
    description:
      'I built a website for a hackathon so participants could easily find schedules, speakers, and details. The goal was simple: make it clear, fast, and easy to use.',
    tags: ['Web', 'UI', 'Hackathon'],
    icon: Globe,
    featured: false,
    highlights: [
      'Easy to navigate',
      'Works on all devices',
      'Built for real users',
    ],
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">My Work</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            These are projects I actually cared about building — not just for marks,
            but because they interested me.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
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
