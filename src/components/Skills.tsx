const skillGroups = [
  {
    title: 'AI & Learning Systems',
    description: 'Things I’m learning while building Edurance',
    skills: ['AI Agents', 'Prompting', 'Learning Systems', 'Basic ML'],
  },
  {
    title: 'Web Development',
    description: 'Tools I use to build websites and apps',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Firebase'],
  },
  {
    title: 'Electronics',
    description: 'Hardware and circuit-level work',
    skills: ['Sensors', '555 Timer', 'Basic Circuits', 'Electronics Design'],
  },
  {
    title: 'Mobile Apps',
    description: 'Building apps for phones',
    skills: ['Flutter', 'Dart', 'UI Design', 'State Handling'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">What I Use</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            These are not just buzzwords — I’ve used these while building real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="card-elevated p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{group.description}</p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-sm rounded-lg border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card-elevated p-8 border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Still Learning</h3>
              <p className="text-muted-foreground text-sm">
                I don’t wait until I “know everything.” If a project needs something new,
                I learn it by trying and failing.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Currently learning: AI Agents & Startups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
