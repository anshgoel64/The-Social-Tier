export interface BrochurePage {
  id: number;
  title: string;
  category: 'Overview' | 'Marketing' | 'Web & Design' | 'Branding' | 'Content' | 'Contact';
  subtitle: string;
  image: string;
  highlights: string[];
}

export type VideoFormat = '9:16' | '16:9';

export interface VideoProject {
  id: string;
  title: string;
  client: string;
  brandIndustry: string;
  category: 'Commercials' | 'Reels & Shorts' | 'Corporate & Docs' | 'Product & UGC' | '3D & Motion';
  format: VideoFormat;
  duration: string;
  objective: string;
  deliverables: string[];
  description: string;
  aspectLabel: string;
  resolution: string;
  tags: string[];
  posterImage?: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  iconFile: string;
  iconAlt: string;
  deliverables: string[];
  keyHighlights: string[];
  badge?: string;
  isFeatured?: boolean;
}

export const AGENCY_INFO = {
  name: 'The Social Tier',
  legalName: 'The Social Tier Media Pvt. Ltd.',
  founder: 'Ansh Goel',
  tagline: 'Your Next Customer is Just One Strategy Away',
  mantra: 'Discover · Deploy · Design · Grow',
  phone: '+91-8287245528',
  email: 'hello.thesocialtier@gmail.com',
  address: 'C-44, Meerut Road Industrial Area, Ghaziabad-201003, Delhi-NCR, India',
  whatsappUrl: 'https://wa.me/918287245528?text=Hello%20The%20Social%20Tier,%20I%20would%20like%20to%20discuss%20a%20video%20production%20or%20marketing%20project',
};

export const TRUST_PARTNERS = [
  { src: 'partner-logo-1.png', alt: 'Partner Logo 1' },
  { src: 'partner-logo-2.png', alt: 'Partner Logo 2' },
  { src: 'partner-logo-3.png', alt: 'Partner Logo 3' },
  { src: 'partner-logo-4.png', alt: 'Partner Logo 4' },
  { src: 'partner-logo-5.png', alt: 'Partner Logo 5' },
];

export const AGENCY_METRICS = [
  { value: '140K+', label: 'Leads Generated' },
  { value: '320+', label: 'Projects Completed' },
  { value: '65+', label: 'Brands Scaled' },
  { value: '100%', label: 'In-House Studio Production' },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'video-production',
    number: '01',
    name: 'Video Production & Commercial Ad Films',
    shortName: 'Video Production',
    subtitle: 'Full-service in-house production for high-impact social reels and commercial films.',
    description: 'We are a complete audio-visual production house based in Delhi-NCR. From scripting and location scouting to cinema-grade shooting, professional talent casting, high-retention video editing, DaVinci color grading, and visual effects — we deliver ready-to-broadcast video assets for social feeds, broadcast campaigns, and YouTube.',
    iconFile: 'icon-video-production.svg',
    iconAlt: 'Video Production Icon',
    deliverables: [
      'Short-Form Social Reels & Direct-Response Video Ads',
      'Brand Commercials, Broadcast Ad Films & Corporate Documentaries',
      'High-CTR YouTube Video Editing & Storytelling',
      'E-commerce & D2C Product Shoot Videos',
      'Founder Stories & Executive Interviews',
      'Motion Graphics, CGI & Title Sequences'
    ],
    keyHighlights: [
      'Complete Multi-Format Production',
      'In-House Cinema Cameras & Sound Stage',
      'DaVinci Resolve Color Grading & Foley Mastering',
      'Rapid Turnaround with Dedicated Director'
    ],
    badge: 'In-House Studio',
    isFeatured: true
  },
  {
    id: 'seo',
    number: '02',
    name: 'Search Engine Optimization (SEO)',
    shortName: 'SEO',
    subtitle: 'Rank #1 on Google for high-intent customer search queries and build organic market authority.',
    description: 'Sustainable organic growth that drives consistent, high-converting commercial leads month after month without paying per click. We execute comprehensive technical site audits, high-intent keyword strategies, on-page optimization, and authoritative backlink acquisition.',
    iconFile: 'icon-seo.svg',
    iconAlt: 'SEO Icon',
    deliverables: [
      'Complete Technical SEO & Core Web Vitals Optimization',
      'Commercial Intent Keyword Mapping & Competitive Gap Analysis',
      'On-Page Schema Markup & Content Architecture',
      'High-Authority Link Building & Digital PR Outreach',
      'Local SEO & Google Business Profile Optimization'
    ],
    keyHighlights: [
      '100% White-Hat Google Compliant Tactics',
      'Zero Dependency on Recurring Ad Budgets',
      'Monthly Ranking & Traffic Audit Reports'
    ]
  },
  {
    id: 'social-media',
    number: '03',
    name: 'Social Media Management & Growth (SMM)',
    shortName: 'Social Media',
    subtitle: 'Build commanding brand presence across Instagram, LinkedIn, YouTube, and Facebook.',
    description: 'We turn passive viewers into paying customers and brand advocates. Our team plans monthly creative calendars, designs high-engagement visual carousels, shoots viral reels, manages your community, and nurtures inbound direct messages.',
    iconFile: 'icon-social-media.svg',
    iconAlt: 'Social Media Icon',
    deliverables: [
      'Monthly Content Calendars & Creative Direction',
      'Bespoke Graphic Design & Engaging Carousel Sets',
      'Short-Form Video & Reel Scripting and Assembly',
      'Community Management & Inbound DM Nurturing',
      'Influencer Collaborations & Brand Partnerships'
    ],
    keyHighlights: [
      'Dedicated Social Media Manager & Designer',
      'Consistent Brand Aesthetic & Tone of Voice',
      'Weekly Publishing Schedules & Analytics'
    ]
  },
  {
    id: 'ppc-advertising',
    number: '04',
    name: 'Performance Marketing & Paid Ads (PPC)',
    shortName: 'Paid Ads',
    subtitle: 'Data-driven paid ad campaigns across Meta (Instagram/Facebook) and Google Ads.',
    description: 'Maximize customer acquisition with precision media buying. We design high-converting visual ad creatives, write compelling ad copy, build customized landing funnels, and continuously optimize campaigns for maximum return on ad spend.',
    iconFile: 'icon-paid-ads.svg',
    iconAlt: 'Paid Ads Icon',
    deliverables: [
      'Meta Ads (Instagram & Facebook) Full-Funnel Campaigns',
      'Google Search, Display & Performance Max Ads',
      'YouTube Video Advertising & Re-targeting',
      'A/B Creative & Hook Testing Protocols',
      'Advanced Meta Pixel & Conversion API Setup'
    ],
    keyHighlights: [
      'Daily Budget & Bid Management',
      'Custom Video & Graphic Ad Creatives Included',
      'Transparent Weekly Reporting & CAC Tracking'
    ]
  },
  {
    id: 'web-funnels',
    number: '05',
    name: 'Website Design & Conversion Funnels',
    shortName: 'Web & Funnels',
    subtitle: 'Modern, mobile-first websites engineered to turn traffic into qualified client inquiries.',
    description: 'Your website is your 24/7 digital storefront. We design clean, high-performance websites and lead generation landing pages that load instantly, convey trust immediately, and guide visitors smoothly toward booking or purchase.',
    iconFile: 'icon-web-dev.svg',
    iconAlt: 'Web Development Icon',
    deliverables: [
      'Custom Responsive Corporate & Brand Websites',
      'High-Converting Landing Pages & Lead Funnels',
      'Shopify & WooCommerce E-commerce Storefronts',
      'Speed Optimization & Modern Technical Stack',
      'CRM, WhatsApp & Lead Capture Integrations'
    ],
    keyHighlights: [
      'Mobile-First Responsive Layouts',
      'SEO-Friendly Code Architecture',
      'Built-in Lead Capture & WhatsApp Connect'
    ]
  },
  {
    id: 'branding-identity',
    number: '06',
    name: 'Brand Identity & Creative Design',
    shortName: 'Branding',
    subtitle: 'Distinctive visual identities, logos, brochures, and luxury packaging design.',
    description: 'We forge memorable brand identities that command premium pricing and stand out in crowded markets. From iconic logo marks to comprehensive typography guidelines, stationery kits, corporate brochures, and product packaging.',
    iconFile: 'icon-branding.svg',
    iconAlt: 'Brand Design Icon',
    deliverables: [
      'Logo Design & Visual Identity Systems',
      'Comprehensive Brand Guidelines & Color Palettes',
      'Corporate Stationery, Business Cards & Pitch Decks',
      'Product Packaging Design & Mockups',
      'Print Catalogues & Multi-Page Corporate Brochures'
    ],
    keyHighlights: [
      'Bespoke Typography & Color Science',
      'Print-Ready Vector Master Assets',
      'Full Copyright & Commercial Ownership'
    ]
  },
  {
    id: 'content-marketing',
    number: '07',
    name: 'Content Marketing & Copywriting',
    shortName: 'Content',
    subtitle: 'Persuasive copywriting and thought-leadership articles that establish industry authority.',
    description: 'Strategic words that educate, engage, and convert. We write authoritative blog articles, website copy, company profiles, email newsletter sequences, and case studies that turn curious prospects into high-ticket clients.',
    iconFile: 'icon-content.svg',
    iconAlt: 'Content Marketing Icon',
    deliverables: [
      'High-Converting Website & Sales Page Copy',
      'SEO Articles & Industry Thought-Leadership Guides',
      'Email Welcome Sequences & Nurture Newsletters',
      'Company Profiles, Case Studies & Whitepapers',
      'Ad Headlines & Video Commercial Scriptwriting'
    ],
    keyHighlights: [
      'Researched & Written by Senior Copywriters',
      'Optimized for Reader Retention & Search Engines',
      'Brand Tone Alignment Across Touchpoints'
    ]
  },
  {
    id: 'ai-automation',
    number: '08',
    name: 'Marketing Automation & AI Workflows',
    shortName: 'Automation',
    subtitle: 'Automate lead follow-ups, WhatsApp alerts, and CRM workflows for zero inquiry loss.',
    description: 'Streamline your sales pipeline with modern automation. We set up automated WhatsApp notifications, instant email replies, CRM lead routing, and intelligent booking bots so your business responds to hot leads in seconds.',
    iconFile: 'icon-automation.svg',
    iconAlt: 'Automation Icon',
    deliverables: [
      'Instant WhatsApp Lead Alerts & Automated Replies',
      'CRM Pipeline Setup & Lead Scoring',
      'Automated Email & SMS Follow-Up Drip Sequences',
      'Website Live Chat & Appointment Booking Bots',
      'Centralized Real-Time Performance Dashboards'
    ],
    keyHighlights: [
      'Zero-Delay Lead Response Time',
      'Integrates with WhatsApp, Meta, Google & CRMs',
      'Saves Hours of Manual Administrative Work'
    ]
  }
];

export const VIDEO_PORTFOLIO: VideoProject[] = [
  // 9:16 Vertical Videos (Reels, TikTok, Mobile Ads, Shorts)
  {
    id: 'vid-vertical-1',
    title: 'Doorstep Bike Service: Quick Booking Ad',
    client: 'YVO Doorstep Auto Service',
    brandIndustry: 'Automotive & On-Demand Service',
    category: 'Reels & Shorts',
    format: '9:16',
    duration: '00:34',
    aspectLabel: 'Vertical 9:16 · Mobile First',
    resolution: '4K Ultra HD (1080x1920)',
    objective: 'Create a high-impact direct-response vertical ad highlighting the frustration of waiting in greasy mechanic shops versus the ease of doorstep bike maintenance.',
    deliverables: [
      'Split-Screen Problem vs Solution Visual Hook',
      'Live Action On-Location Technician Filming',
      'Dynamic Animated Text & Kinetic Subtitles',
      'One-Tap WhatsApp Booking CTA'
    ],
    description: 'Engineered specifically for Instagram Reels and Meta vertical feed campaigns. The opening 2-second hook directly addresses bike owners, demonstrating certified mechanics arriving at the customer doorstep with professional toolkits.',
    tags: ['Vertical Ad', 'Meta Reels', 'Direct Response', 'Auto Service'],
    posterImage: '/assets/aistudio/img52_d17e64f9.jpg'
  },
  {
    id: 'vid-vertical-2',
    title: 'Velor Rosemary Water: Daily Hair Ritual',
    client: 'Velor Organics',
    brandIndustry: 'D2C Beauty & Personal Care',
    category: 'Product & UGC',
    format: '9:16',
    duration: '00:28',
    aspectLabel: 'Vertical 9:16 · Mobile First',
    resolution: '4K Ultra HD (1080x1920)',
    objective: 'Produce an aesthetically pleasing viral short reel showcasing steam-distilled rosemary water application, sensory ASMR mist, and botanical ingredients.',
    deliverables: [
      'Crisp ASMR Mist Macro Slow-Motion Capture',
      'Clean Typography Highlighting Clean Ingredients',
      'Algorithm-Optimized Upbeat Sound Design',
      'Seamless Loop Transition for High Re-watch Rate'
    ],
    description: 'Crafted for Instagram Reels discovery and TikTok viral feeds. Emphasizes clean natural sunlight, refreshing macro spray droplets, and transparent botanical ingredient callouts that build immediate product trust.',
    tags: ['Beauty Reel', 'ASMR Hook', 'E-commerce', 'TikTok / Reels']
  },
  {
    id: 'vid-vertical-3',
    title: 'Urban Wardrobe: Autumn Streetwear Drop',
    client: 'Urban Tier Fashion',
    brandIndustry: 'Apparel & Streetwear Fashion',
    category: 'Reels & Shorts',
    format: '9:16',
    duration: '00:22',
    aspectLabel: 'Vertical 9:16 · Mobile First',
    resolution: '4K Ultra HD (1080x1920)',
    objective: 'High-energy fast-cut fashion lookbook reel showcasing the new autumn oversized hoodie and cargo collection in Delhi-NCR urban settings.',
    deliverables: [
      'Gimbal Smooth Tracking & Whip Pan Transitions',
      'Rhythmic Beat-Matched Cut Synchronization',
      'Urban Neon & Golden Hour Color Grading',
      'Direct Swipe-Up Link to Store Collection'
    ],
    description: 'A dynamic vertical reel tailored for Gen-Z and millennial shoppers, blending street aesthetics with quick outfit transitions that keep viewers glued to the screen.',
    tags: ['Fashion Lookbook', 'Streetwear', 'Fast Pacing', '9:16 Mobile']
  },
  {
    id: 'vid-vertical-4',
    title: 'Gourmet Cold Brew: Pour Over Experience',
    client: 'The Roasters Co.',
    brandIndustry: 'Food & Beverage / Artisan Cafe',
    category: 'Product & UGC',
    format: '9:16',
    duration: '00:25',
    aspectLabel: 'Vertical 9:16 · Mobile First',
    resolution: '4K Ultra HD (1080x1920)',
    objective: 'Sensory vertical food video capturing ice swirl, creamy milk cascade, and single-origin coffee extraction.',
    deliverables: [
      '120fps High-Speed Liquid Slow-Motion',
      'Subtle Acoustic Coffee Brewing Foley Sound',
      'Warm Tone Cinema Color Palette',
      'Store Location & Delivery App CTA'
    ],
    description: 'Shot in a bespoke coffee bar with warm tungsten lighting to highlight rich coffee caramel tones. Perfect for enticing local cafe visitors and Swiggy/Zomato delivery orders.',
    tags: ['Food Video', 'Artisan Coffee', 'Liquid Macro', 'Reel']
  },

  // 16:9 Widescreen Videos (Commercials, YouTube Documentaries, Corporate Films)
  {
    id: 'vid-horizontal-1',
    title: 'The Indian Attrawala: Scent of Timeless Royalty',
    client: 'The Indian Attrawala',
    brandIndustry: 'Luxury Fragrance & Heritage Goods',
    category: 'Commercials',
    format: '16:9',
    duration: '01:15',
    aspectLabel: 'Cinematic 16:9 · Broadcast Widescreen',
    resolution: '4K DCI Cinema (3840x2160)',
    objective: 'Produce a luxury heritage commercial emphasizing pure artisanal botanical distillation and the time-honored craft of Kannauj perfumery.',
    deliverables: [
      'Anamorphic Cinema Lens Studio Filming',
      'Slow-Motion 120fps Amber Liquid Droplet Capture',
      'Film-Style DaVinci Resolve Color Grading',
      'Custom Royal Sitar & Orchestral Master Score'
    ],
    description: 'Filmed with cinema-grade prime lenses and precise chiaroscuro studio lighting to highlight the amber clarity of Attar Kewra. Positioned the heritage brand as an artisanal luxury lifestyle artifact for domestic and international gifting.',
    tags: ['Commercial TVC', 'Luxury Goods', 'Heritage', '16:9 Cinema']
  },
  {
    id: 'vid-horizontal-2',
    title: 'The Private Space Race: An Investigative Documentary',
    client: 'Apex Tech Geopolitics Media',
    brandIndustry: 'Digital Journalism & Aerospace Media',
    category: 'Corporate & Docs',
    format: '16:9',
    duration: '14:28',
    aspectLabel: 'Cinematic 16:9 · Broadcast Widescreen',
    resolution: '4K DCI Cinema (3840x2160)',
    objective: 'Create an engaging investigative YouTube documentary examining private space exploration rivalries with 3D orbit maps and immersive soundscapes.',
    deliverables: [
      'Comprehensive Scriptwriting & Historical Research',
      'Custom 3D Orbital Satellite & Rocket Animations',
      'Original Foley & Orchestral Soundscape',
      'High-CTR Thumbnail System for YouTube'
    ],
    description: 'A keynote-level deep dive breaking down commercial spaceflight engineering and financial milestones. Engineered with rhythmic narrative pacing every 4 seconds to maintain over 65% audience retention across the entire 14-minute video.',
    tags: ['Documentary', 'CGI Maps', 'YouTube Video', 'Storytelling']
  },
  {
    id: 'vid-horizontal-3',
    title: 'Agarwal Realtors: Redefining Ultra-Luxury Living',
    client: 'Agarwal Realtors & Developers',
    brandIndustry: 'Luxury Real Estate & Estates',
    category: 'Commercials',
    format: '16:9',
    duration: '02:10',
    aspectLabel: 'Cinematic 16:9 · Broadcast Widescreen',
    resolution: '4K DCI Cinema (3840x2160)',
    objective: 'Showcase premier penthouse and estate architectural designs with aerial drone sweeps, interior walkthroughs, and elegant lifestyle footage.',
    deliverables: [
      'Licensed 4K Drone Aerial Cinematography',
      'Steadicam Interior Architectural Walkthroughs',
      'Golden Hour Sunset Exterior Lighting Capture',
      'Bespoke Classical Piano & Warm Voiceover'
    ],
    description: 'Crafted for ultra-high-net-worth real estate buyers in Delhi-NCR. Highlights marble finishes, panoramic skyline terraces, and exclusive amenities with elegant, unhurried camera choreography.',
    tags: ['Real Estate', 'Aerial Drone', 'Architectural Film', 'Commercial']
  },
  {
    id: 'vid-horizontal-4',
    title: 'NeuralEdge AI: Enterprise Cloud Infrastructure',
    client: 'NeuralEdge Software',
    brandIndustry: 'Enterprise SaaS & Cloud Tech',
    category: '3D & Motion',
    format: '16:9',
    duration: '01:45',
    aspectLabel: 'Cinematic 16:9 · Broadcast Widescreen',
    resolution: '4K DCI Cinema (3840x2160)',
    objective: 'Explain intricate cloud infrastructure workflows and automated data pipelines using sleek 3D glassmorphic motion graphics.',
    deliverables: [
      'Custom 3D Architectural Scene Modeling in Blender',
      'Glassmorphic Abstract UI Motion Systems',
      'Keynote-Grade Immersive Electronic Audio Mix',
      'Corporate Presentation & Website Hero Cuts'
    ],
    description: 'Featured at executive tech summits and on the enterprise homepage, translating complex technical software architectures into intuitive visual metaphors that resonate with enterprise CIOs.',
    tags: ['3D Motion', 'SaaS Explainer', 'Enterprise Tech', '16:9 Widescreen']
  }
];

export const BROCHURE_PAGES: BrochurePage[] = [
  {
    id: 1,
    title: 'Company Profile Cover',
    category: 'Overview',
    subtitle: 'The Social Tier™ — Strategic Digital Marketing Agency',
    image: '/assets/aistudio/img20_ba3a385b.jpg',
    highlights: ['Official Company Profile', 'The Social Tier Brand Mark', 'Dark Textured Luxury Theme']
  },
  {
    id: 2,
    title: 'Brand Identity & Stationery',
    category: 'Branding',
    subtitle: 'Founder Ansh Goel & Brand Kit Showcase',
    image: '/assets/aistudio/img4_a5eec585.jpg',
    highlights: ['Founder Ansh Goel Contact System', 'Executive Stationery & Merch', 'Color Palette: Amber Orange & Obsidian']
  },
  {
    id: 3,
    title: 'Agency Philosophy & Mantra',
    category: 'Overview',
    subtitle: 'Discover. Deploy. Design. Grow.',
    image: '/assets/aistudio/img32_7875f56d.jpg',
    highlights: ['Holistic Growth Framework', 'Data & Creative Convergence', 'End-to-End Client Execution']
  },
  {
    id: 4,
    title: 'Social Media Marketing',
    category: 'Marketing',
    subtitle: 'Consistent presence. Real engagement.',
    image: '/assets/aistudio/img24_0a6d1ee7.jpg',
    highlights: ['Content Planning', 'Community Management', 'Profile Optimization']
  },
  {
    id: 5,
    title: 'Social Media Case Study',
    category: 'Marketing',
    subtitle: 'Doorstep Bike Repair (YVO Service) Full Social Growth',
    image: '/assets/aistudio/img52_d17e64f9.jpg',
    highlights: ['10k+ Carousel Views', 'Doorstep Service Funnel', 'High Conversion Offer Creatives']
  },
  {
    id: 6,
    title: 'Performance Marketing',
    category: 'Marketing',
    subtitle: 'Data-driven ads that scale revenue.',
    image: '/assets/aistudio/img8_69bd77b2.jpg',
    highlights: ['Meta, Google & YouTube Ads', 'Lower Acquisition Costs', 'Attribution & Optimization']
  },
  {
    id: 7,
    title: 'Website & Funnel Design',
    category: 'Web & Design',
    subtitle: 'Modern websites engineered to convert traffic.',
    image: '/assets/aistudio/img44_1f312697.jpg',
    highlights: ['NeuralEdge AI Website Design', 'High-Converting Landing Pages', 'Speed & UX Optimization']
  },
  {
    id: 8,
    title: 'Website Design Case Study',
    category: 'Web & Design',
    subtitle: 'Agarwal Realtors Luxury Real Estate Portal',
    image: '/assets/aistudio/img60_7970513e.jpg',
    highlights: ['Redefining Luxury Living', 'Bespoke Advisory UI', 'Interactive Property Showcases']
  },
  {
    id: 9,
    title: 'Branding Discipline',
    category: 'Branding',
    subtitle: 'Crafting identities that stick in customer minds.',
    image: '/assets/aistudio/img28_51eb8bd0.jpg',
    highlights: ['Creative Direction', 'Storytelling Systems', 'Visual Identity Architecture']
  },
  {
    id: 10,
    title: 'Luxury Perfume Branding',
    category: 'Branding',
    subtitle: 'The Indian Attrawala — Packaging & Social Grid',
    image: '/assets/aistudio/img36_8ad4c536.jpg',
    highlights: ['Kewra Attar Luxury Bottle Design', 'Botanical Line Art Packaging', 'Aesthetic Instagram Grid']
  },
  {
    id: 11,
    title: 'Corporate Branding Case Study',
    category: 'Branding',
    subtitle: 'WorkBuddyHR — Enterprise Identity & Mobile Assets',
    image: '/assets/aistudio/img76_41f8752c.jpg',
    highlights: ['Corporate Color Hierarchy (#0c004b / #ff7c08)', 'Stationery & ID Badges', 'Tablet & App UI Layouts']
  },
  {
    id: 12,
    title: 'Product Design & Packaging',
    category: 'Branding',
    subtitle: 'Velor Rosemary Water Hair Spray',
    image: '/assets/aistudio/img40_1f120713.jpg',
    highlights: ['Natural Origin Bottle Mockup', 'Clean Minimalist Label Typo', 'Packaging Regulatory Specs']
  },
  {
    id: 13,
    title: 'Amazon A+ Content',
    category: 'Content',
    subtitle: 'Energy You Can Wear — Natural Gemstones Showcase',
    image: '/assets/aistudio/img56_76dfa853.jpg',
    highlights: ['High-Conversion Lifestyle Photos', 'Gemstone Attribute Callouts', 'Luxury E-Commerce Modules']
  },
  {
    id: 14,
    title: 'Brochure Design',
    category: 'Web & Design',
    subtitle: 'Agarwal Group of Companies & ICIMN 2026',
    image: '/assets/aistudio/img64_7d8ede23.jpg',
    highlights: ['Healthcare & Logistics Catalog', 'Corporate Tri-fold Architecture', 'Stall Package Presentation']
  },
  {
    id: 15,
    title: 'High-CTR Thumbnail Division',
    category: 'Content',
    subtitle: 'Thumbnail Design — The 0.5s Click Trigger',
    image: '/assets/aistudio/img68_77c5b84c.jpg',
    highlights: ['High Contrast Color Schemes', 'Curiosity Gap Composition', 'Psychological Trigger Layouts']
  },
  {
    id: 16,
    title: 'YouTube Thumbnails Portfolio',
    category: 'Content',
    subtitle: 'Millions of Views Generated with Viral Visuals',
    image: '/assets/aistudio/img72_17cf8627.jpg',
    highlights: ['Elon Musk Geopolitical Series', 'Trade War (Modi vs Trump)', 'Billion Dollar Space War']
  },
  {
    id: 17,
    title: 'Search Engine Optimization',
    category: 'Marketing',
    subtitle: 'Visibility that compounds over time.',
    image: '/assets/aistudio/img12_dcdf75f2.jpg',
    highlights: ['Keyword Research', 'On-Page SEO', 'Technical SEO & Link Building']
  },
  {
    id: 18,
    title: 'AI Marketing & Automation',
    category: 'Overview',
    subtitle: 'AI-Integrated Smart Marketing & Workflows',
    image: '/assets/aistudio/img48_ca799f5b.jpg',
    highlights: ['AI Chatbots & Workflows', 'Smart Content Automation', 'Automated Lead Nurturing']
  },
  {
    id: 19,
    title: 'Next Step & Contact',
    category: 'Contact',
    subtitle: 'Your next customer is just one strategy away.',
    image: '/assets/aistudio/img16_d25beec3.jpg',
    highlights: ['Call: +91-8287245528', 'Email: hello.thesocialtier@gmail.com', 'Ghaziabad, NCR Hub']
  }
];

export const AGENCY_PROCESS = [
  {
    step: '01',
    title: 'In-Depth Discovery & Market Audit',
    description: 'We analyze your current digital presence, direct competitors, audience touchpoints, and commercial goals to craft a high-leverage execution roadmap.'
  },
  {
    step: '02',
    title: 'Creative Scripting & Strategy',
    description: 'For video projects, we write hooks, scripts, and storyboards. For marketing, we architect audience targeting, keyword clusters, and conversion funnels.'
  },
  {
    step: '03',
    title: 'Production, Shooting & Launch',
    description: 'Our in-house production crew shoots on cinema cameras with professional lighting, while our marketing team launches conversion-tested campaigns.'
  },
  {
    step: '04',
    title: 'Optimization & Growth Review',
    description: 'We track real customer inquiries, refine video edits based on audience retention drop-offs, and scale high-performing campaigns.'
  }
];

export const AGENCY_VALUES = [
  {
    title: 'In-House Studio Production',
    description: 'We own our gear, sound stage, and editing suites. We do not outsource your video projects to unvetted freelancers.'
  },
  {
    title: 'Multi-Format Video Craft',
    description: 'From viral short-form social reels engineered for mobile feeds to broadcast-quality commercial films for cinema and YouTube.'
  },
  {
    title: 'Founder-Led Attention',
    description: 'Founder Ansh Goel and our senior team oversee strategy, creative direction, and campaign execution personally.'
  },
  {
    title: 'Transparent Collaboration',
    description: 'Direct communication, weekly progress check-ins, and clear deliverables with zero jargon or hidden costs.'
  }
];

export const FAQS = [
  {
    q: 'What kind of video production services do you offer?',
    a: 'We shoot and produce both short-form social reels (Instagram Reels, YouTube Shorts, and direct-response Meta ads) and long-form widescreen videos (brand commercials, corporate documentaries, and YouTube films). We handle scriptwriting, multi-camera filming, casting, editing, color grading, and sound design in-house.'
  },
  {
    q: 'Can we hire The Social Tier exclusively for Video Production?',
    a: 'Yes! While many brands choose our complete digital marketing retainer (SEO, Paid Ads, Social Media), we frequently take on standalone video production assignments, brand commercial shoots, or monthly reel bundles.'
  },
  {
    q: 'How does your video production process work?',
    a: 'We begin with a briefing call to understand your product, audience, and platform goals. We then script the video and storyboards. Once approved, our in-house crew films on location or in-studio, followed by high-retention post-production, DaVinci color grading, sound mastering, and delivery within 7 to 10 days.'
  },
  {
    q: 'Where is your studio located and do you travel for shoots?',
    a: 'Our main office and production hub is located in Ghaziabad (Delhi-NCR), India. We routinely film across Delhi-NCR, Noida, Gurgaon, and travel pan-India for on-location brand commercial shoots and corporate documentaries.'
  },
  {
    q: 'How can I download or inspect your official company brochure?',
    a: 'Click the "Download Brochure" button in the top navigation bar at any time to browse all 19 original pages in our interactive reader or print/download a high-resolution PDF copy.'
  }
];

