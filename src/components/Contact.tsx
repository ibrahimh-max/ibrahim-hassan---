import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Whether you're working on AI education, embedded systems, or just want to 
            discuss interesting problems—I'm always open to connecting with fellow builders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:hello@ibrahimhassan.dev"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
