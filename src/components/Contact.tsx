import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Let’s Talk
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            If you like building things, startups, or AI — I’m always open to talking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
<<<<<<< HEAD
              href="mailto:yourname@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
=======
              href="https://mail.google.com/mail/?view=cm&fs=1&to=955ibrahimhassan@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
>>>>>>> 48ae53c (resume add krna hai abhi)
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/ibrahimh-max"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/ibrahimeh"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
