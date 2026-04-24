import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavLink {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  {
    label: 'Use Cases',
    href: '#professionals',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Marketing & Ad Teams', href: '#professionals' },
      { label: 'E-Commerce Brands', href: '#professionals' },
      { label: 'UI/UX Designers', href: '#professionals' },
      { label: 'Content Creators', href: '#professionals' },
    ],
  },
  {
    label: 'AI Tools',
    href: '#generator',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Text to Image', href: '#generator' },
      { label: 'Image Edit', href: '#generator' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    label: 'Resources',
    href: '#how-to',
    hasDropdown: true,
    dropdownItems: [
      { label: 'How to Generate', href: '#how-to' },
      { label: 'Model Specs', href: '#specs' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    label: 'Models',
    href: '#comparison',
    hasDropdown: true,
    dropdownItems: [
      { label: 'GPT Image 2', href: '#comparison' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Resolution', href: '#resolution' },
    ],
  },
  { label: 'Gallery', href: '#gallery', hasDropdown: false },
  { label: 'Pricing', href: '#cta', hasDropdown: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimer, setDropdownTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sectionIds = ['hero', 'generator', 'gallery', 'comparison', 'resolution', 'capabilities', 'specs', 'how-to', 'professionals', 'cta', 'faq'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const scrollToSection = useCallback((href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimer) clearTimeout(dropdownTimer);
    setOpenDropdown(label);
  }, [dropdownTimer]);

  const handleDropdownLeave = useCallback(() => {
    const timer = setTimeout(() => setOpenDropdown(null), 150);
    setDropdownTimer(timer);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 8C4 5.79086 5.79086 4 8 4H20C22.2091 4 24 5.79086 24 8V20C24 22.2091 22.2091 24 20 24H8C5.79086 24 4 22.2091 4 20V8Z" fill="white"/>
              <path d="M9 14L12 11L15 14L19 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="19" cy="10" r="2" fill="black"/>
            </svg>
            <span className="text-white font-semibold text-lg tracking-tight">TopView</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => !link.hasDropdown && scrollToSection(link.href)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-[#141414] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden animate-fade-in">
                      {link.dropdownItems?.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => scrollToSection(item.href)}
                          className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 px-5 transition-all duration-200"
            >
              Dashboard
            </Button>
            <Button className="rounded-full bg-purple-500 hover:bg-purple-600 text-white px-5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                onClick={() => {
                  if (!link.hasDropdown) {
                    scrollToSection(link.href);
                  }
                }}
                className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-lg transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
              {link.hasDropdown && link.dropdownItems && (
                <div className="pl-4 space-y-1">
                  {link.dropdownItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-2 border-t border-white/5">
            <Button
              variant="outline"
              className="w-full rounded-full border-white/20 text-white bg-transparent hover:bg-white/10"
            >
              Dashboard
            </Button>
            <Button className="w-full rounded-full bg-purple-500 hover:bg-purple-600 text-white">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
