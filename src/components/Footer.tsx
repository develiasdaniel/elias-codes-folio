const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-muted/20 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Elias Daniel Sanchez. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with 
            <span className="text-primary">React</span> 
            & 
            <span className="text-secondary">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
