import React, { useEffect, useRef, useState } from 'react';

interface PortfolioVideoItem {
  src: string;
  poster: string;
  width: number;
  height: number;
}

const PORTFOLIO_VIDEOS: PortfolioVideoItem[] = [
  { src: '/video-1.mp4', poster: '/posters/video-1.jpg', width: 640, height: 352 },
  { src: '/video-2.mp4', poster: '/posters/video-2.jpg', width: 576, height: 1024 },
  { src: '/video-3.mp4', poster: '/posters/video-3.jpg', width: 624, height: 352 },
  { src: '/video-4.mp4', poster: '/posters/video-4.jpg', width: 480, height: 688 },
  { src: '/video-5.mp4', poster: '/posters/video-5.jpg', width: 640, height: 352 },
  { src: '/video-6.mp4', poster: '/posters/video-6.jpg', width: 384, height: 528 },
  { src: '/video-7.mp4', poster: '/posters/video-7.jpg', width: 576, height: 1024 },
  { src: '/video-8.mp4', poster: '/posters/video-8.jpg', width: 624, height: 352 },
  { src: '/video-9.mp4', poster: '/posters/video-9.jpg', width: 1024, height: 576 },
  { src: '/video-10.mp4', poster: '/posters/video-10.jpg', width: 576, height: 1024 },
  { src: '/video-11.mp4', poster: '/posters/video-11.jpg', width: 640, height: 352 },
];

export const VideoPortfolioPage: React.FC = () => {
  const [blobUrls, setBlobUrls] = useState<Record<string, string>>({});
  const inFlightRef = useRef<Record<string, Promise<string | null>>>({});
  const createdUrlsRef = useRef<string[]>([]);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    return () => {
      createdUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      createdUrlsRef.current = [];
    };
  }, []);

  const fetchAsBlobUrl = async (src: string): Promise<string | null> => {
    if (blobUrls[src]) return blobUrls[src];
    if (src in inFlightRef.current) return inFlightRef.current[src];

    const promise = (async () => {
      try {
        const res = await fetch(src, { credentials: 'include' });
        const contentType = res.headers.get('content-type') || '';
        if (!res.ok || contentType.includes('text/html')) {
          return null;
        }
        const blob = await res.blob();
        const objectUrl = URL.createObjectURL(blob);
        createdUrlsRef.current.push(objectUrl);
        setBlobUrls((prev) => ({ ...prev, [src]: objectUrl }));
        return objectUrl;
      } catch {
        return null;
      } finally {
        delete inFlightRef.current[src];
      }
    })();

    inFlightRef.current[src] = promise;
    return promise;
  };

  const ensurePlayable = async (src: string, shouldAutoPlay: boolean) => {
    const videoEl = videoRefs.current[src];
    if (!videoEl || blobUrls[src]) return;

    const blobUrl = await fetchAsBlobUrl(src);
    if (!blobUrl) return;

    const target = videoRefs.current[src];
    if (!target) return;
    target.src = blobUrl;
    target.load();
    if (shouldAutoPlay) {
      target.play().catch(() => {
        // Fallback: native controls remain ready with loaded local blob duration
      });
    }
  };

  const handlePlayAttempt = (src: string) => {
    const videoEl = videoRefs.current[src];
    if (!videoEl || blobUrls[src]) return;

    if (videoEl.readyState === 0 || !videoEl.duration || Number.isNaN(videoEl.duration)) {
      window.setTimeout(() => {
        const current = videoRefs.current[src];
        if (current && !blobUrls[src] && (current.readyState < 2 || !current.duration)) {
          void ensurePlayable(src, true);
        }
      }, 650);
    }
  };

  return (
    <section className="video-portfolio-section" aria-label="Video Production Portfolio">
      <div className="video-masonry-grid">
        {PORTFOLIO_VIDEOS.map((item) => {
          const activeSrc = blobUrls[item.src] || item.src;
          return (
            <div key={item.src} className="video-slot-card">
              <video
                ref={(el) => {
                  videoRefs.current[item.src] = el;
                }}
                src={activeSrc}
                poster={item.poster}
                width={item.width}
                height={item.height}
                controls
                preload="metadata"
                playsInline
                onError={() => {
                  void ensurePlayable(item.src, false);
                }}
                onPlay={() => {
                  handlePlayAttempt(item.src);
                }}
                onClick={() => {
                  handlePlayAttempt(item.src);
                }}
                style={{
                  aspectRatio: `${item.width} / ${item.height}`,
                  backgroundImage: `url(${item.poster})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="portfolio-video"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
