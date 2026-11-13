import React from 'react';
import { Download, MessageSquare } from 'lucide-react';
import { SERVICES, AGENCY_INFO } from '../data/agencyData';
import { ServiceIcon } from './ServiceIcon';

interface ServicesPageProps {
  onNavigateToVideos: () => void;
  onOpenBrochure: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateToVideos,
  onOpenBrochure,
}) => {
  return (
    <div>
      {/* Dark Dramatic Page Banner */}
      <section className="bg-[#070709] text-white pt-16 pb-14 px-6">
        <div className="max-w-[1320px] mx-auto space-y-5">
          <span className="hero-kicker">Full-Stack Growth Architecture</span>
          <h1 className="display-heading text-6xl sm:text-7xl lg:text-8xl text-white max-w-4xl">
            Digital Marketing &amp; <span className="text-[#FF7A00]">Production</span> Services
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Eight specialized practice areas designed to capture attention, rank high
            organically, convert qualified leads, and automate client acquisition.
          </p>
        </div>
      </section>

      {/* Slanted Diagonal Cut transitioning Dark -> Crisp Light Gray */}
      <div className="slant-to-white bg-[#070709]" aria-hidden="true" />

      {/* Crisp Light Card-Based UI Grid */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header-light">
            <span className="section-kicker-light">Capabilities Matrix</span>
            <h2 className="section-title-light">What We Deliver</h2>
            <p className="section-desc-light">
              Select any practice area below to request a custom scope, monthly
              retainer, or project sprint.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((service) => (
              <article key={service.id} className="service-card">
                <div>
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <ServiceIcon serviceId={service.id} />
                    </div>
                    <span className="service-index">{service.number}</span>
                  </div>

                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <p className="service-desc">{service.description}</p>

                  <ul className="service-deliverables">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-footer">
                  {service.id === 'video-production' ? (
                    <button
                      type="button"
                      onClick={onNavigateToVideos}
                      className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] hover:underline cursor-pointer"
                    >
                      Open Video Portfolio →
                    </button>
                  ) : (
                    <span className="text-xs font-medium text-slate-500">
                      Retainer or Project Sprint
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Slanted Cut Light -> Dark Closing Banner */}
      <div className="slant-white-to-black" aria-hidden="true" />

      <section className="bg-[#070709] text-white py-16 px-6">
        <div className="max-w-[1320px] mx-auto bg-[#111216] border border-white/10 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="display-heading text-4xl sm:text-5xl text-white">
              Need A Custom Retainer Or Video Shoot?
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base">
              Speak directly with Founder Ansh Goel for a tailored digital growth roadmap
              and transparent project pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-primary no-underline"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

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
      </section>
    </div>
  );
};
