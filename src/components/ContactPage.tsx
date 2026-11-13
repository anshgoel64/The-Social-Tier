import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Download,
  ChevronDown,
} from 'lucide-react';
import { AGENCY_INFO, FAQS } from '../data/agencyData';
import { validateLeadForm, LeadFormData } from '../utils/agencyLogic';

interface ContactPageProps {
  initialService?: string;
  onOpenBrochure: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialService,
  onOpenBrochure,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    selectedService: initialService || 'Video Production & Commercial Ad Films',
    projectBrief: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, selectedService: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div>
      {/* Dark Page Banner */}
      <section className="bg-[#070709] text-white pt-16 pb-14 px-6">
        <div className="max-w-[1320px] mx-auto space-y-4">
          <span className="hero-kicker">Direct Inquiries</span>
          <h1 className="display-heading text-6xl sm:text-7xl lg:text-8xl text-white">
            Start Your <span className="text-[#FF7A00]">Project</span>
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Ready to produce high-impact brand videos or launch a digital marketing
            growth campaign? Connect directly with our Delhi-NCR team.
          </p>
        </div>
      </section>

      <div className="slant-to-white bg-[#070709]" aria-hidden="true" />

      {/* Crisp Light Form & Direct Contact Section */}
      <section className="bg-[#F4F5F7] text-[#0E0F13] py-14 px-6">
        <div className="max-w-[1320px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Lead Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="display-heading text-3xl text-slate-900">
                      Consultation Request Received
                    </h2>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.fullName}</strong>. Founder{' '}
                      {AGENCY_INFO.founder} and our senior strategists have received your
                      inquiry for <strong>{formData.selectedService}</strong>.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent-pill"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          companyName: '',
                          selectedService: 'Video Production & Commercial Ad Films',
                          projectBrief: '',
                        });
                      }}
                      className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-300 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-200 pb-4">
                    <h2 className="display-heading text-3xl text-slate-900">
                      Request A Proposal &amp; Strategy Call
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Share your goals and our leadership team will reply within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-xs font-bold text-slate-700">
                        Full Name <span className="text-[#FF7A00]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white ${
                          errors.fullName
                            ? 'border-red-500'
                            : 'border-slate-300 focus:border-[#FF7A00]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700">
                        Work Email <span className="text-[#FF7A00]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@brand.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white ${
                          errors.email
                            ? 'border-red-500'
                            : 'border-slate-300 focus:border-[#FF7A00]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700">
                        Phone Number <span className="text-[#FF7A00]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white ${
                          errors.phone
                            ? 'border-red-500'
                            : 'border-slate-300 focus:border-[#FF7A00]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="companyName" className="text-xs font-bold text-slate-700">
                        Company / Brand Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Brands"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#FF7A00]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="selectedService" className="text-xs font-bold text-slate-700">
                      Primary Service <span className="text-[#FF7A00]">*</span>
                    </label>
                    <select
                      id="selectedService"
                      name="selectedService"
                      value={formData.selectedService}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#FF7A00]"
                    >
                      <option value="Video Production & Commercial Ad Films">
                        Video Production &amp; Commercial Ad Films
                      </option>
                      <option value="Search Engine Optimization (SEO)">
                        Search Engine Optimization (SEO)
                      </option>
                      <option value="Social Media Management (SMM)">
                        Social Media Management (SMM)
                      </option>
                      <option value="Performance Marketing & Paid Ads (PPC)">
                        Performance Marketing &amp; Paid Ads (PPC)
                      </option>
                      <option value="Website Design & Conversion Funnels">
                        Website Design &amp; Conversion Funnels
                      </option>
                      <option value="Brand Identity & Creative Design">
                        Brand Identity &amp; Creative Design
                      </option>
                      <option value="Content Marketing & Copywriting">
                        Content Marketing &amp; Copywriting
                      </option>
                      <option value="Marketing Automation & AI Workflows">
                        Marketing Automation &amp; AI Workflows
                      </option>
                      <option value="Custom Full-Funnel Package">
                        Custom Full-Funnel Package
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="projectBrief" className="text-xs font-bold text-slate-700">
                      Project Requirements / Goals <span className="text-[#FF7A00]">*</span>
                    </label>
                    <textarea
                      id="projectBrief"
                      name="projectBrief"
                      rows={4}
                      value={formData.projectBrief}
                      onChange={handleChange}
                      placeholder="Tell us about your product, target audience, video shoot needs, or marketing goals..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white resize-none ${
                        errors.projectBrief
                          ? 'border-red-500'
                          : 'border-slate-300 focus:border-[#FF7A00]'
                      }`}
                    />
                    {errors.projectBrief && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectBrief}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent-pill w-full py-3.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Proposal Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-5 shadow-sm">
                <div className="space-y-1">
                  <span className="section-kicker-light mb-0">Studio &amp; Office</span>
                  <h3 className="display-heading text-3xl text-slate-900">
                    Connect Directly
                  </h3>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${AGENCY_INFO.phone}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-[#FF7A00] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">Phone</span>
                      <span className="text-sm font-bold text-slate-900">
                        {AGENCY_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-[#FF7A00] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">Email</span>
                      <span className="text-sm font-bold text-slate-900 break-all">
                        {AGENCY_INFO.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={AGENCY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-[#FF7A00] transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">
                        WhatsApp Direct
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        Chat with Founder {AGENCY_INFO.founder}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">
                        Delhi-NCR Hub &amp; Studio
                      </span>
                      <span className="text-xs text-slate-700 leading-relaxed block mt-0.5">
                        {AGENCY_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Company Profile PDF</span>
                  <button
                    type="button"
                    onClick={onOpenBrochure}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7A00] hover:underline cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="display-heading text-4xl text-center text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 cursor-pointer"
                    >
                      <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#FF7A00] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
