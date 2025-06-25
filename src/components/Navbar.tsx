import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop < 300 && sectionTop >= -300) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when nav item is clicked
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (    <nav className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold font-mono">
          <span className="text-secondary">&lt;</span>
          <span className="text-textPrimary">Harsh</span>
          <span className="text-secondary">/&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">          {navItems.map((item) => (
            <button              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative overflow-hidden px-3 py-2 nav-button font-medium transition-colors duration-300 font-display tracking-wide ${
                activeSection === item.id ? 'text-secondary' : 'text-textPrimary'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform duration-300 ${
                activeSection === item.id ? 'scale-x-100' : ''
              }`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-textPrimary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-primary/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-2">
          {navItems.map((item) => (            <button              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-3 px-3 nav-button font-medium transition-colors duration-300 font-display tracking-wide ${
                activeSection === item.id ? 'text-secondary' : 'text-textPrimary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
