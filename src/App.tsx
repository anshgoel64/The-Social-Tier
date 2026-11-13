/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { HomeOverview } from './components/HomeOverview';
import { ServicesPage } from './components/ServicesPage';
import { VideoPortfolioPage } from './components/VideoPortfolioPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from './data/agencyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#services') {
        setCurrentPage('services');
      } else if (hash === '#videos' || hash === '#video-production') {
        setCurrentPage('videos');
      } else if (hash === '#contact' || hash === '#consultation') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForQuote = (serviceName?: string) => {
    setSelectedServiceForQuote(serviceName);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeOverview
            onNavigateToServices={() => handleNavigate('services')}
            onNavigateToVideos={() => handleNavigate('videos')}
            onOpenContact={handleSelectServiceForQuote}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigateToVideos={() => handleNavigate('videos')}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}

        {currentPage === 'videos' && <VideoPortfolioPage />}

        {currentPage === 'contact' && (
          <ContactPage
            initialService={selectedServiceForQuote}
          />
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Direct Chat */}
      <a
        href={AGENCY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with The Social Tier"
        className="fixed bottom-5 right-5 z-40 bg-[#FF7A00] hover:bg-[#FF8F29] text-[#070709] px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 font-bold text-xs"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
