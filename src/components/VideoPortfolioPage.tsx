import React from 'react';

const PORTFOLIO_SLOTS = Array.from({ length: 9 }, (_, i) => i + 1);

export const VideoPortfolioPage: React.FC = () => {
  return (
    <section className="video-portfolio-section" aria-label="Video Production Portfolio">
      <div className="video-masonry-grid">
        {PORTFOLIO_SLOTS.map((slot) => (
          <div key={slot} className="video-slot-card">
            <video
              src="YOUR-VIDEO-HERE.mp4"
              controls
              className="portfolio-video"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
