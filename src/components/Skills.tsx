const skillGroups = [
  {
    title: 'AI & Machine Learning',
    description: 'Building intelligent systems that understand and adapt',
    skills: ['Multi-Agent Architectures', 'Diagnostic AI', 'Educational AI Systems', 'Prompt Engineering'],
  },
  {
    title: 'Web Development',
    description: 'Full-stack applications from concept to deployment',
    skills: ['HTML/CSS/JavaScript', 'Node.js & Express', 'Firebase', 'React Fundamentals'],
  },
  {
    title: 'Embedded Systems',
    description: 'Hardware design and low-level programming',
    skills: ['Sensors & Actuators', '555 Timer Circuits', 'Basic Microcontrollers', 'Circuit Design'],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile application development',
    skills: ['Flutter', 'Dart', 'Mobile UI/UX', 'State Management'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Technical Toolkit
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Not just a list of technologies—these are tools I've used to build real systems 
            and solve real problems.
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

        {/* Additional context */}
        <div className="mt-12 card-elevated p-8 border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Always Learning</h3>
              <p className="text-muted-foreground text-sm">
                This list grows with every project. I don't just learn tools—I understand 
                when and why to use them. If a project needs something new, I learn it by building.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Currently exploring: Advanced AI Agents
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
