'use client';

import { useEffect, useState } from 'react';

interface VideoItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    resourceId?: { videoId: string };
    id?: { videoId: string };
    thumbnails: { medium: { url: string } };
  };
}

export default function SermonsSection({ lang }: { lang: 'de' | 'en' }) {
  const [sermons, setSermons] = useState<VideoItem[]>([]);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch('/api/sermons');
        const data = await res.json();

        if (data.liveStream) {
          setIsLive(true);
          setActiveVideoId(data.liveStream.id.videoId);
        } else if (data.sermons && data.sermons.length > 0) {
          setActiveVideoId(data.sermons[0].snippet.resourceId?.videoId || null);
        }

        setSermons(data.sermons || []);
      } catch (err) {
        console.error('Failed to load YouTube videos:', err);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  return (
    <section id="sermons" className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-950">
          {lang === 'de' ? 'Predigten & Livestream' : 'Sermons & Live Stream'}
        </h2>
        <p className="text-slate-600 mt-2">
          {lang === 'de'
            ? 'Sehen Sie unsere neuesten Gottesdienste direkt hier'
            : 'Watch our latest services and live streams directly here'}
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-500 font-medium">
          {lang === 'de' ? 'Videos werden geladen...' : 'Loading videos...'}
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Main Embedded Player */}
          {activeVideoId && (
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 max-w-4xl mx-auto">
              {isLive && (
                <div className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  <span>{lang === 'de' ? 'JETZT LIVE' : 'LIVE NOW'}</span>
                </div>
              )}

              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0`}
                  title="Church Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Video Grid / Playlist */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {lang === 'de' ? 'Kürzliche Predigten' : 'Recent Sermons'}
            </h3>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sermons.map((item) => {
                const videoId = item.snippet.resourceId?.videoId;
                const isSelected = videoId === activeVideoId;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (videoId) {
                        setActiveVideoId(videoId);
                        setIsLive(false);
                      }
                    }}
                    className={`cursor-pointer bg-white rounded-xl overflow-hidden border transition shadow-sm hover:shadow-md ${
                      isSelected ? 'ring-2 ring-indigo-600 border-indigo-600' : 'border-slate-200'
                    }`}
                  >
                    <div className="aspect-video relative bg-slate-100">
                      <img
                        src={item.snippet.thumbnails?.medium?.url}
                        alt={item.snippet.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-slate-900 text-sm line-clamp-2">
                        {item.snippet.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2">
                        {new Date(item.snippet.publishedAt).toLocaleDateString(
                          lang === 'de' ? 'de-DE' : 'en-US'
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}
    </section>
  );
}