import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/IMG-20251115-WA0003_1763193600932.jpg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="JEXLA Logo" 
            className="w-10 h-10 rounded-full"
            data-testid="img-logo"
          />
          <div className="text-xl font-extrabold text-foreground">
            <span className="text-primary">JEXLA Group</span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-muted-foreground hover:text-primary transition duration-150"
            data-testid="link-about"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('promoters')} 
            className="text-muted-foreground hover:text-primary transition duration-150"
            data-testid="link-promoters"
          >
            Promoters
          </button>
          <button 
            onClick={() => scrollToSection('business')} 
            className="text-muted-foreground hover:text-primary transition duration-150"
            data-testid="link-business"
          >
            Businesses
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground hover:text-primary transition duration-150"
            data-testid="link-contact"
          >
            Contact
          </button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-card-border">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left text-muted-foreground hover:text-primary transition duration-150"
              data-testid="link-about-mobile"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('promoters')} 
              className="text-left text-muted-foreground hover:text-primary transition duration-150"
              data-testid="link-promoters-mobile"
            >
              Promoters
            </button>
            <button 
              onClick={() => scrollToSection('business')} 
              className="text-left text-muted-foreground hover:text-primary transition duration-150"
              data-testid="link-business-mobile"
            >
              Businesses
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left text-muted-foreground hover:text-primary transition duration-150"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
