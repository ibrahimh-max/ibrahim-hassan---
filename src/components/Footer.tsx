const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Ibrahim Hassan</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Built with intention</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
