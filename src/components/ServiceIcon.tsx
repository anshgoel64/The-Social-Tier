import React from 'react';
import {
  Film,
  Search,
  Share2,
  Target,
  LayoutTemplate,
  Palette,
  FileText,
  Bot,
} from 'lucide-react';

interface ServiceIconProps {
  serviceId: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  serviceId,
  className = 'w-6 h-6 text-[#FF7A00]',
}) => {
  switch (serviceId) {
    case 'video-production':
      return <Film className={className} aria-hidden="true" />;
    case 'seo':
      return <Search className={className} aria-hidden="true" />;
    case 'social-media':
      return <Share2 className={className} aria-hidden="true" />;
    case 'ppc-advertising':
      return <Target className={className} aria-hidden="true" />;
    case 'web-funnels':
      return <LayoutTemplate className={className} aria-hidden="true" />;
    case 'branding-identity':
      return <Palette className={className} aria-hidden="true" />;
    case 'content-marketing':
      return <FileText className={className} aria-hidden="true" />;
    case 'ai-automation':
      return <Bot className={className} aria-hidden="true" />;
    default:
      return <Film className={className} aria-hidden="true" />;
  }
};
