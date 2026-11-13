import React from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onNavigateToServices: () => void;
  onNavigateToVideos: () => void;
  onOpenBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToServices,
  onNavigateToVideos,
  onOpenBrochure,
}) => {
  return (
    <section className="hero-section">
      {/* 3D CSS architectural perspective grid + texture image placeholder */}
      <div className="hero-perspective-grid" aria-hidden="true" />
      <img
        src="hero-background-texture.jpg"
        alt="Hero Background Texture"
        className="hero-bg-texture"
        onError={(e) => e.currentTarget.classList.add('is-placeholder-empty')}
      />

      <div className="hero-container">
        {/* Primary Hero Column */}
        <div>
          <span className="hero-kicker">
            The Social Tier · Digital Marketing &amp; Production Studio · Delhi-NCR
          </span>

          <h1 className="hero-title">
            Your Next Customer Is{' '}
            <span className="accent-word">One Strategy</span> Away.
          </h1>

          <p className="hero-subtitle">
            We are a full-stack digital marketing agency and in-house commercial film
            studio led by Founder {AGENCY_INFO.founder}. We engineer high-converting paid
            campaigns, authority SEO, brand identities, and broadcast-grade video
            production that turn attention into measurable revenue.
          </p>

          <div className="hero-cta-row">
            <button
              type="button"
              onClick={onNavigateToServices}
              className="hero-cta-primary"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onNavigateToVideos}
              className="hero-cta-secondary"
            >
              <Play className="w-4 h-4 text-[#FF7A00]" />
              <span>Video Portfolio</span>
            </button>

            <button
              type="button"
              onClick={onOpenBrochure}
              className="hero-cta-secondary"
            >
              <Download className="w-4 h-4 text-[#FF7A00]" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>

        {/* 3D Tilted Showcase Frame Placeholder */}
        <div className="hero-visual-panel">
          <div className="placeholder-frame-slot">
            <img
              src="hero-agency-showcase.jpg"
              alt="Agency Hero Showreel & Campaign Preview"
              className="placeholder-frame"
              onError={(e) => e.currentTarget.classList.add('is-placeholder-empty')}
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
            <span className="font-semibold text-white">{AGENCY_INFO.mantra}</span>
            <span>In-House Studio · Delhi-NCR</span>
          </div>
        </div>
      </div>
    </section>
  );
};
