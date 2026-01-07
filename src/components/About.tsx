const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Building to understand,<br />
              <span className="text-muted-foreground">not to impress.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I don't learn by watching tutorials or memorizing theory. I learn by building 
                systems that force me to understand every layer—from the hardware up to 
                the user experience.
              </p>
              <p>
                My current focus is on AI-driven education. Not chatbots that answer questions, 
                but systems that diagnose how students think and guide them through their 
                conceptual gaps. I believe education technology should adapt to the learner, 
                not the other way around.
              </p>
              <p>
                When I'm not writing code, I'm designing circuits, exploring embedded systems, 
                or thinking about how to make complex ideas accessible.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="card-elevated p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-mono text-sm">01</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Systems Thinking</h3>
                  <p className="text-sm text-muted-foreground">
                    Every project I build considers the full stack—from user needs to implementation details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-mono text-sm">02</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hardware + Software</h3>
                  <p className="text-sm text-muted-foreground">
                    I bridge the gap between physical systems and digital solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-mono text-sm">03</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Education-First AI</h3>
                  <p className="text-sm text-muted-foreground">
                    Building AI that teaches, not just responds—understanding gaps before filling them.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
