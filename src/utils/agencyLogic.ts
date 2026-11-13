import { VideoProject, BrochurePage } from '../data/agencyData';

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  selectedService: string;
  videoFormatInterest?: 'Vertical 9:16 (Reels/Shorts)' | 'Horizontal 16:9 (Commercials/Films)' | 'Both Formats' | 'Digital Marketing (SEO/Ads/Web)';
  estimatedTimeline?: string;
  projectBrief: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof LeadFormData, string>>;
}

export function validateLeadForm(data: LeadFormData): ValidationResult {
  const errors: Partial<Record<keyof LeadFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid work email address.';
  }

  const cleanPhone = data.phone ? data.phone.replace(/[\s\-\(\)\+]/g, '') : '';
  if (!data.phone || cleanPhone.length < 8) {
    errors.phone = 'Please provide a valid phone number (min 8 digits).';
  }

  if (!data.selectedService || data.selectedService.trim() === '') {
    errors.selectedService = 'Please select a primary service of interest.';
  }

  if (!data.projectBrief || data.projectBrief.trim().length < 5) {
    errors.projectBrief = 'Please share a brief note about your project requirements.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function filterVideos(
  videos: VideoProject[],
  category: string,
  format: string = 'All',
  searchQuery: string = ''
): VideoProject[] {
  return videos.filter((video) => {
    const matchesCategory =
      category === 'All' || video.category.toLowerCase() === category.toLowerCase();

    const matchesFormat =
      format === 'All' || video.format === format;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      video.title.toLowerCase().includes(query) ||
      video.client.toLowerCase().includes(query) ||
      video.brandIndustry.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query) ||
      video.objective.toLowerCase().includes(query) ||
      video.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesFormat && matchesSearch;
  });
}

export function filterBrochurePages(
  pages: BrochurePage[],
  category: string,
  searchQuery: string = ''
): BrochurePage[] {
  return pages.filter((page) => {
    const matchesCategory =
      category === 'All' || page.category.toLowerCase() === category.toLowerCase();
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      page.title.toLowerCase().includes(query) ||
      page.subtitle.toLowerCase().includes(query) ||
      page.highlights.some((h) => h.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

export function getAdjacentBrochurePageIndex(
  currentIndex: number,
  total: number,
  direction: 'next' | 'prev'
): number {
  if (total <= 0) return 0;
  if (direction === 'next') {
    return (currentIndex + 1) % total;
  }
  return (currentIndex - 1 + total) % total;
}
