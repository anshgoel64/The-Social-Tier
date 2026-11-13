import React from 'react';
import { Download, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { NavPage } from './Navbar';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenBrochure: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBrochure }) => {
  const goTo = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 text-zinc-300 py-14 px-6">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="nav-logo-slot">
                <img
                  src="/main-brand-logo.png"
                  alt="Agency Logo"
                  className="nav-logo"
                  onError={(e) => {
                    e.currentTarget.classList.add('is-placeholder-empty');
                    e.currentTarget.parentElement?.classList.add('is-empty-logo');
                  }}
                />
              </span>
              <span className="brand-wordmark">THE SOCIAL TIER</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              {AGENCY_INFO.tagline}. Strategic digital marketing and dedicated in-house
              commercial video production engineered for measurable client growth.
            </p>

            <div className="text-xs text-[#FF7A00] font-semibold font-mono-code">
              {AGENCY_INFO.mantra}
            </div>

            <div className="pt-2 text-xs text-zinc-400 space-y-1">
              <div>
                Founder &amp; Managing Director:{' '}
                <strong className="text-white">{AGENCY_INFO.founder}</strong>
              </div>
              <div>Studio &amp; Hub: {AGENCY_INFO.address}</div>
            </div>
          </div>

          {/* Navigation & Services */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xl text-white tracking-wider uppercase">
              Agency Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => goTo('home')}
                  className="text-zinc-400 hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('services')}
                  className="text-zinc-400 hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  All Marketing Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('videos')}
                  className="text-[#FF7A00] hover:underline font-semibold cursor-pointer"
                >
                  Video Production Portfolio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goTo('contact')}
                  className="text-zinc-400 hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  Request A Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xl text-white tracking-wider uppercase">
              Brochure &amp; Direct Line
            </h4>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={onOpenBrochure}
                className="btn-outline-header w-full justify-center"
              >
                <Download className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Download Brochure</span>
              </button>

              <button
                type="button"
                onClick={() => goTo('contact')}
                className="btn-accent-pill w-full"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-3 text-xs space-y-2 text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
                <a href={`tel:${AGENCY_INFO.phone}`} className="hover:text-white">
                  {AGENCY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF7A00]" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white">
                  {AGENCY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#FF7A00]" />
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#FF7A00] font-semibold"
                >
                  WhatsApp Direct Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {AGENCY_INFO.legalName}. All rights reserved.
          </div>
          <div>Ghaziabad, Delhi-NCR · Digital Marketing &amp; Video Production</div>
        </div>
      </div>
    </footer>
  );
};
