import React, { useState, useEffect } from 'react';
import { X, Download, ChevronLeft, ChevronRight, ZoomIn, Eye, Sparkles, Check, Printer, FileText, ArrowUpRight } from 'lucide-react';
import { BROCHURE_PAGES, BrochurePage, AGENCY_INFO } from '../data/agencyData';
import { getAdjacentBrochurePageIndex, filterBrochurePages } from '../utils/agencyLogic';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

const CATEGORIES = ['All', 'Overview', 'Marketing', 'Web & Design', 'Branding', 'Content', 'Contact'];

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, onBookCall }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const displayedPages = filterBrochurePages(BROCHURE_PAGES, selectedCategory);
  const currentPage: BrochurePage = displayedPages[currentPageIndex] || BROCHURE_PAGES[0];

  // Reset index when category changes
  useEffect(() => {
    setCurrentPageIndex(0);
  }, [selectedCategory]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setCurrentPageIndex((prev) => getAdjacentBrochurePageIndex(prev, displayedPages.length, 'next'));
      }
      if (e.key === 'ArrowLeft') {
        setCurrentPageIndex((prev) => getAdjacentBrochurePageIndex(prev, displayedPages.length, 'prev'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, displayedPages.length, onClose]);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    setDownloadSuccess(false);

    // Simulate high-res bundle generation and trigger print / PDF save
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);

      // Create an instant downloadable summary presentation text / print sheet
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${AGENCY_INFO.name} — Official Company Profile Brochure</title>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0B0B0C; color: #FFF; margin: 0; padding: 40px; }
                .cover { text-align: center; padding: 60px 20px; border-bottom: 2px solid #FF7C08; }
                h1 { color: #FF7C08; font-size: 38px; margin: 0; }
                .mantra { font-size: 18px; color: #BBB; letter-spacing: 2px; margin-top: 10px; }
                .contact-box { background: #16161A; border: 1px solid #333; padding: 24px; border-radius: 12px; margin: 30px auto; max-width: 600px; text-align: left; }
                .page-item { margin: 40px 0; page-break-after: always; text-align: center; }
                .page-img { max-width: 90%; border-radius: 8px; border: 1px solid #333; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                .page-meta { font-size: 14px; color: #FF7C08; margin-top: 12px; }
                @media print { body { background: #FFF; color: #000; padding: 20px; } .page-img { border: 1px solid #ccc; } }
              </style>
            </head>
            <body>
              <div class="cover">
                <h1>${AGENCY_INFO.legalName}</h1>
                <p class="mantra">${AGENCY_INFO.mantra}</p>
                <p style="color: #AAA;">Founder: ${AGENCY_INFO.founder}</p>
                <div class="contact-box">
                  <p><strong>Phone:</strong> ${AGENCY_INFO.phone}</p>
                  <p><strong>Email:</strong> ${AGENCY_INFO.email}</p>
                  <p><strong>Studio:</strong> ${AGENCY_INFO.address}</p>
                  <p><strong>Core Capabilities:</strong> Video Production, Performance Meta/Google Ads, Funnels, Branding, AI Automations</p>
                </div>
                <p style="font-size: 12px; color: #888;">Complete 19-Page Agency Profile & Video Production Portfolio</p>
              </div>
              ${BROCHURE_PAGES.map(
                (p) => `
                <div class="page-item">
                  <img src="${p.image}" class="page-img" alt="${p.title}" />
                  <div class="page-meta">Page ${p.id} of 19 · ${p.title}</div>
                  <p style="color: #AAA; font-size: 13px;">${p.subtitle}</p>
                </div>
              `
              ).join('')}
              <script>
                window.onload = function() {
                  setTimeout(function() { window.print(); }, 500);
                };
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }

      setTimeout(() => setDownloadSuccess(false), 5000);
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-[#121215] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto animate-fadeIn flex flex-col max-h-[94vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10 bg-[#0B0B0C] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF7C08]/20 flex items-center justify-center text-[#FF7C08]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="brochure-modal-title" className="text-sm sm:text-base font-bold text-white font-display">
                The Social Tier™ — Company Profile Brochure
              </h3>
              <p className="text-[11px] font-mono-code text-neutral-400">
                19 Original Pages · Digital Marketing & Video Production
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Brochure Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-white bg-[#FF7C08] hover:bg-[#E66A00] rounded-lg transition-all shadow-md shadow-[#FF7C08]/20 cursor-pointer disabled:opacity-50"
            >
              {isDownloading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Preparing PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Opened Print/PDF!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download / Print PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close brochure viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1 px-5 py-2.5 bg-[#0E0E11] border-b border-white/5 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[11px] font-mono-code text-neutral-400 mr-2 whitespace-nowrap">
            Filter Sections:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Viewing Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-black/60 relative">
          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentPageIndex((prev) =>
                getAdjacentBrochurePageIndex(prev, displayedPages.length, 'prev')
              )
            }
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/80 hover:bg-[#FF7C08] text-white border border-white/15 transition-all shadow-xl cursor-pointer"
            aria-label="Previous brochure page"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentPageIndex((prev) =>
                getAdjacentBrochurePageIndex(prev, displayedPages.length, 'next')
              )
            }
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/80 hover:bg-[#FF7C08] text-white border border-white/15 transition-all shadow-xl cursor-pointer"
            aria-label="Next brochure page"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Current Page Display */}
          <div className="w-full max-w-3xl flex flex-col items-center space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-[#16161A] group">
              <img
                src={currentPage.image}
                alt={currentPage.title}
                className="max-h-[58vh] sm:max-h-[64vh] w-auto object-contain mx-auto transition-transform duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-xs text-neutral-300">
                <span>Page {currentPage.id} of 19 · {currentPage.category}</span>
                <span className="text-[#FF7C08] font-mono-code font-semibold">{currentPage.title}</span>
              </div>
            </div>

            {/* Page Caption & Highlights */}
            <div className="w-full text-center space-y-1.5 px-4">
              <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-[#FF7C08]">
                <span>Page {currentPage.id} of 19</span>
                <span>·</span>
                <span>{currentPage.category}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white font-display">
                {currentPage.title} — {currentPage.subtitle}
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {currentPage.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-neutral-300 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="px-5 py-3 bg-[#0B0B0C] border-t border-white/10 shrink-0">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            {displayedPages.map((page, idx) => (
              <button
                key={page.id}
                onClick={() => setCurrentPageIndex(idx)}
                className={`relative shrink-0 w-14 sm:w-16 aspect-video rounded-md overflow-hidden border transition-all cursor-pointer ${
                  currentPageIndex === idx
                    ? 'border-[#FF7C08] ring-2 ring-[#FF7C08]/50 scale-105'
                    : 'border-white/15 opacity-60 hover:opacity-100'
                }`}
                title={`Jump to Page ${page.id}: ${page.title}`}
              >
                <img
                  src={page.image}
                  alt={`Page ${page.id}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 px-1 py-0.2 bg-black/80 text-[8px] font-mono-code text-white">
                  {page.id}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Footer Action inside modal */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-white/5 text-xs text-neutral-400 gap-2">
            <span>
              Direct Inquiries: <strong className="text-white">{AGENCY_INFO.phone}</strong> ·{' '}
              <strong className="text-white">{AGENCY_INFO.email}</strong>
            </span>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="text-[#FF7C08] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Schedule Strategy Call with Founder Ansh Goel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
