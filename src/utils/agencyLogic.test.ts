import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateLeadForm,
  filterVideos,
  filterBrochurePages,
  getAdjacentBrochurePageIndex,
  LeadFormData
} from './agencyLogic.js';
import { VIDEO_PORTFOLIO, BROCHURE_PAGES } from '../data/agencyData.js';

test('validateLeadForm identifies missing or invalid fields', () => {
  const invalidData: LeadFormData = {
    fullName: '',
    email: 'invalid-email',
    phone: '123',
    companyName: '',
    selectedService: '',
    projectBrief: ''
  };

  const result = validateLeadForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.selectedService);
  assert.ok(result.errors.projectBrief);
});

test('validateLeadForm accepts valid input', () => {
  const validData: LeadFormData = {
    fullName: 'Ansh Goel',
    email: 'client@example.com',
    phone: '+91-8287245528',
    companyName: 'Acme Brands',
    selectedService: 'Video Production & Commercial Ad Films',
    videoFormatInterest: 'Both Formats',
    projectBrief: 'Need 3 commercial reels and 1 brand video for our product launch.'
  };

  const result = validateLeadForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('filterVideos filters by format (9:16 vs 16:9) accurately', () => {
  const allVideos = filterVideos(VIDEO_PORTFOLIO, 'All', 'All');
  assert.equal(allVideos.length, VIDEO_PORTFOLIO.length);

  const verticalVideos = filterVideos(VIDEO_PORTFOLIO, 'All', '9:16');
  assert.ok(verticalVideos.length > 0);
  assert.ok(verticalVideos.every(v => v.format === '9:16'));

  const horizontalVideos = filterVideos(VIDEO_PORTFOLIO, 'All', '16:9');
  assert.ok(horizontalVideos.length > 0);
  assert.ok(horizontalVideos.every(v => v.format === '16:9'));
});

test('filterVideos filters by search query and category', () => {
  const docVideos = filterVideos(VIDEO_PORTFOLIO, 'Corporate & Docs', 'All');
  assert.ok(docVideos.length > 0);
  assert.ok(docVideos.every(v => v.category === 'Corporate & Docs'));

  const searchResults = filterVideos(VIDEO_PORTFOLIO, 'All', 'All', 'attrawala');
  assert.ok(searchResults.length >= 1);
  assert.ok(
    searchResults[0].title.toLowerCase().includes('attrawala') ||
    searchResults[0].client.toLowerCase().includes('attrawala')
  );
});

test('filterBrochurePages filters catalog correctly', () => {
  const allPages = filterBrochurePages(BROCHURE_PAGES, 'All');
  assert.equal(allPages.length, BROCHURE_PAGES.length);

  const brandingPages = filterBrochurePages(BROCHURE_PAGES, 'Branding');
  assert.ok(brandingPages.length > 0);
  assert.ok(brandingPages.every(p => p.category === 'Branding'));
});

test('getAdjacentBrochurePageIndex wraps around both directions', () => {
  const total = 19;
  assert.equal(getAdjacentBrochurePageIndex(0, total, 'next'), 1);
  assert.equal(getAdjacentBrochurePageIndex(18, total, 'next'), 0);
  assert.equal(getAdjacentBrochurePageIndex(0, total, 'prev'), 18);
});
