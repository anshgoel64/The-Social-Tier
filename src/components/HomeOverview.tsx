import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Hero } from './Hero';
import {
  TRUST_PARTNERS,
  AGENCY_METRICS,
  SERVICES,
  AGENCY_PROCESS,
  AGENCY_INFO,
} from '../data/agencyData';

interface HomeOverviewProps {
  onNavigateToServices: () => void;
  onNavigateToVideos: () => void;
  onOpenContact: (serviceName?: string) => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  onNavigateToServices,
  onNavigateToVideos,
  onOpenContact,
}) => {
  return (
    <div>
      {/* 1. Full-Height Dark Hero */}
      <Hero
        onNavigateToServices={onNavigateToServices}
        onNavigateToVideos={onNavigateToVideos}
        onOpenContact={() => onOpenContact()}
      />

      {/* Slanted Geometric Divider */}
      <div className="slant-to-charcoal" aria-hidden="true" />

      {/* 2. High-Contrast Trust Banner (Partner Logos + Metric Counters) */}
      <section className="trust-banner-section" aria-label="Trusted Partners and Metrics">
        <div className="trust-inner">
          <div className="trust-label">
            Trusted By Ambitious Brands &amp; Growing Enterprises
          </div>

          {/* Partner Logo Placeholders */}
          <div className="partner-logos-strip">
            {TRUST_PARTNERS.map((partner, idx) => (
              <div key={idx} className="partner-logo-slot">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="partner-logo"
                  onError={(e) => e.currentTarget.classList.add('is-placeholder-empty')}
                />
              </div>
            ))}
          </div>

          {/* Large Metric Counters Grid */}
          <div className="metrics-grid">
            {AGENCY_METRICS.map((metric, idx) => (
              <div key={idx} className="metric-block">
                <div className="metric-number font-mono-code">{metric.value}</div>
                <div className="metric-caption">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slanted Diagonal Cut transitioning Dark -> Crisp Light Gray */}
      <div className="slant-to-white" aria-hidden="true" />

      {/* 3. High-Contrast Light Capabilities Preview Block */}
      <section className="services-section">
        <div className="services-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="section-header-light mb-0">
              <span className="section-kicker-light">Core Agency Disciplines</span>
              <h2 className="section-title-light">
                Built To Capture Attention &amp; Scale Revenue
              </h2>
              <p className="section-desc-light">
                Every discipline under one roof: commercial film production, performance
                media buying, search authority, web funnels, and automation.
              </p>
            </div>

            <button
              type="button"
              onClick={onNavigateToServices}
              className="btn-accent-pill self-start md:self-auto"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="services-grid">
            {SERVICES.slice(0, 4).map((service) => (
              <article key={service.id} className="service-card">
                <div>
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <img
                        src={service.iconFile}
                        alt={service.iconAlt}
                        className="service-icon"
                        onError={(e) => e.currentTarget.classList.add('is-placeholder-empty')}
                      />
                    </div>
                    <span className="service-index">{service.number}</span>
                  </div>

                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <p className="service-desc">{service.description}</p>
                </div>

                <div className="service-card-footer">
                  <button
                    type="button"
                    onClick={() => onOpenContact(service.name)}
                    className="service-cta-btn"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Slanted Diagonal Cut transitioning Light -> Pure Black */}
      <div className="slant-white-to-black" aria-hidden="true" />

      {/* 4. Dark In-House Studio, Process & Founder Section */}
      <section className="bg-[#070709] text-white py-20 px-6">
        <div className="max-w-[1320px] mx-auto space-y-20">
          {/* Studio & Leadership Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="hero-kicker">
                {AGENCY_INFO.mantra}
              </span>
              <h2 className="display-heading text-5xl sm:text-6xl text-white">
                In-House Studio. <span className="text-[#FF7A00]">Founder-Led</span> Execution.
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Headquartered in Ghaziabad (Delhi-NCR), {AGENCY_INFO.legalName} owns
                dedicated cinema production gear, lighting rigs, sound stages, and
                post-production suites. Founder {AGENCY_INFO.founder} and our senior
                strategists oversee every creative concept and campaign launch directly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {AGENCY_PROCESS.map((item) => (
                  <div
                    key={item.step}
                    className="bg-[#111216] border border-white/10 rounded-xl p-5 hover:border-[#FF7A00] transition-colors"
                  >
                    <div className="font-display text-3xl text-[#FF7A00] leading-none mb-2">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-white text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Blank Image Placeholders for Studio & Founder */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-[#111216] border border-white/10 rounded-2xl p-4 space-y-3">
                <div className="placeholder-frame-slot">
                  <img
                    src="studio-production-floor.jpg"
                    alt="In-House Production Studio Floor"
                    className="placeholder-frame"
                    onError={(e) => e.currentTarget.classList.add('is-placeholder-empty')}
                  />
                </div>
                <div className="text-xs font-semibold text-white">
                  In-House Production Floor
                </div>
              </div>

              <div className="bg-[#111216] border border-white/10 rounded-2xl p-4 space-y-3">
                <div className="placeholder-frame-slot">
                  <img
                    src="team-member-ansh-goel.jpg"
                    alt="Founder Ansh Goel"
                    className="placeholder-frame"
                    onError={(e) => e.currentTarget.classList.add('is-placeholder-empty')}
                  />
                </div>
                <div className="text-xs font-semibold text-white">
                  {AGENCY_INFO.founder} · Founder &amp; MD
                </div>
              </div>
            </div>
          </div>

          {/* Closing Conversion Callout */}
          <div className="bg-[#111216] border border-white/10 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <h2 className="display-heading text-4xl sm:text-5xl text-white">
                Ready To Scale With Us?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base">
                Book a direct strategy call for performance campaigns, SEO, or commercial
                video production.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="hero-cta-primary"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <button
                type="button"
                onClick={onNavigateToVideos}
                className="hero-cta-secondary"
              >
                <span>View Video Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
