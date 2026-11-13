import React from 'react';

const PORTFOLIO_VIDEOS = [
  '/video-1.mp4',
  '/video-2.mp4',
  '/video-3.mp4',
  '/video-4.mp4',
  '/video-5.mp4',
  '/video-6.mp4',
  '/video-7.mp4',
  '/video-8.mp4',
  '/video-9.mp4',
  '/video-10.mp4',
  '/video-11.mp4',
];

export const VideoPortfolioPage: React.FC = () => {
  return (
    <section className="video-portfolio-section" aria-label="Video Production Portfolio">
      <div className="video-masonry-grid">
        {PORTFOLIO_VIDEOS.map((videoSrc) => (
          <div key={videoSrc} className="video-slot-card">
            <video
              src={`${videoSrc}#t=1`}
              controls
              preload="metadata"
              playsInline
              onPlay={(e) => {
                const video = e.currentTarget;
                if (!video.dataset.playedOnce) {
                  video.dataset.playedOnce = 'true';
                  video.currentTime = 0;
                }
              }}
              className="portfolio-video"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
