import React from 'react';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface BrochurePageProps {
  onRequestQuote: () => void;
}

const PDF_PREVIEW_PAGES = Array.from({ length: 19 }, (_, idx) => {
  const num = String(idx + 1).padStart(2, '0');
  return {
    page: idx + 1,
    src: `./brochure-pages/page-${num}.jpg`,
    label: `Company Profile Page ${idx + 1} of 19`,
  };
});

export const BrochurePage: React.FC<BrochurePageProps> = ({ onRequestQuote }) => {
  return (
    <div>
      {/* Dark Page Banner */}
      <section className="bg-[#070709] text-white pt-14 pb-12 px-6">
        <div className="max-w-[60rem] mx-auto space-y-5">
          <span className="hero-kicker">Official Company Profile · 19 Pages</span>
          <h1 className="display-heading text-5xl sm:text-7xl text-white">
            Company Profile <span className="text-[#FF7A00]">Brochure</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Preview the complete brochure below, or open and download the PDF copy to
            share with your team.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={AGENCY_INFO.brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary no-underline"
            >
              <ExternalLink className="w-4 h-4 text-[#FF7A00]" />
              <span>Open PDF</span>
            </a>

            <a
              href={AGENCY_INFO.brochurePdfUrl}
              download={AGENCY_INFO.brochureFileName}
              className="hero-cta-primary no-underline"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Embedded Scrollable PDF Document Preview */}
      <section className="bg-[#0b0c10] py-8 sm:py-12 px-4 sm:px-6 border-t border-white/10">
        <main className="max-w-[60rem] mx-auto space-y-6">
          <div className="bg-[#111216] border border-white/15 rounded-2xl p-3 sm:p-5 shadow-2xl">
            <div
              className="pdf-preview overflow-y-auto space-y-5 p-2 sm:p-4"
              aria-label="Company Profile PDF Preview"
            >
              {PDF_PREVIEW_PAGES.map((item) => (
                <div
                  key={item.page}
                  className="bg-[#070709] rounded-lg overflow-hidden border border-white/10 shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    loading={item.page <= 3 ? 'eager' : 'lazy'}
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Download Prompt & CTA */}
          <div className="bg-[#111216] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="space-y-1">
              <h2 className="display-heading text-3xl text-white">
                Save A Copy Of The Brochure PDF
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Download the full 19-page Company Profile PDF or start a conversation with our team.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={AGENCY_INFO.brochurePdfUrl}
                download={AGENCY_INFO.brochureFileName}
                className="btn-accent-pill no-underline"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={onRequestQuote}
                className="btn-outline-header"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00]" />
              </button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};
