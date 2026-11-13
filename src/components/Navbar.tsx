import React, { useState } from 'react';
import { Download, Menu, X, ArrowRight, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { InstagramIcon } from './SocialIcons';

export type NavPage = 'home' | 'services' | 'videos' | 'brochure';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBrochure,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'videos', label: 'Video Portfolio' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Zone 1: Logo only (no wordmark text) */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="brand-link"
          aria-label="The Social Tier Home"
        >
          <span className="nav-logo-slot">
            <img
              src="./main-brand-logo.png"
              alt="Agency Logo"
              className="nav-logo"
              onError={(e) => {
                e.currentTarget.classList.add('is-placeholder-empty');
                e.currentTarget.parentElement?.classList.add('is-empty-logo');
              }}
            />
          </span>
        </button>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`nav-link-btn ${currentPage === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Direct Phone + Instagram (always visible on mobile & desktop) + Brochure + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href={`tel:${AGENCY_INFO.phone}`}
            className="header-phone-link"
            aria-label={`Call The Social Tier at ${AGENCY_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
            <span>{AGENCY_INFO.phone}</span>
          </a>

          <a
            href={AGENCY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-insta-link"
            aria-label="Follow The Social Tier on Instagram"
            title="Instagram — @thesocialtier"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <div className="header-actions">
            <button
              type="button"
              onClick={onOpenBrochure}
              className="btn-outline-header"
              title="Preview & Download Company Brochure PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Download Brochure</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/15 bg-white/5 text-white cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E0F14] border-t border-white/10 px-5 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#FF7A00]/15 text-[#FF7A00]'
                      : 'text-zinc-200 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                onOpenBrochure();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white border border-white/20 rounded-full cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#FF7A00]" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
