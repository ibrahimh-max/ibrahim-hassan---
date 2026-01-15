const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Building to understand,
              <br />
              <span className="text-muted-foreground">not to show off.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I mostly learn by doing. Sometimes I watch tutorials, but real learning
                starts when I try to build something myself and get stuck.
              </p>
              <p>
                College doesn’t really teach me what I want to learn. A lot of it feels
                forced and boring, and there aren’t many teachers who explain things in a
                way that clicks for me. So I teach myself by building things I care about.
              </p>
              <p>
                Right now I’m building Edurance — an AI tutor. It’s hard, messy, and still
                under development, but it pushes me to learn new concepts every day.
                That’s the kind of challenge I enjoy.
              </p>
              <p>
                When I’m not coding, I watch sitcoms, read startup books, and play football.
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
                    I like understanding how things work from top to bottom, not just one layer.
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
                    I enjoy working where software meets real-world hardware.
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
                    I’m trying to build AI that can actually teach, not just answer questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
