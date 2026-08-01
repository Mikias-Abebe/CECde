'use client';

import { useState, useEffect } from 'react';

interface VideoItem {
  id: string;
  title: string;
  date: string;
  youtubeId: string;
}

// Fallback data in case the YouTube API call fails or is unconfigured
const FALLBACK_SERMONS: VideoItem[] = [
  {
    id: '1',
    title: 'Sunday Worship Service & Sermon',
    date: 'Recent Service',
    youtubeId: 'dQw4w9WgXcQ', // Replace with a default video ID if desired
  },
];

export default function SermonsSection({ lang = 'de' }: { lang?: string }) {
  const [sermons, setSermons] = useState<VideoItem[]>([]);
  const [selectedSermon, setSelectedSermon] = useState<VideoItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestVideos() {
      try {
        // Fetch via internal Next.js Server Route
        const res = await fetch('/api/youtube');
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          const fetchedVideos: VideoItem[] = data.items.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            date: new Date(item.snippet.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),
            youtubeId: item.snippet.resourceId.videoId,
          }));

          setSermons(fetchedVideos);
          setSelectedSermon(fetchedVideos[0]);
        } else {
          console.warn('No items returned from YouTube API. Using fallback.');
          setSermons(FALLBACK_SERMONS);
          setSelectedSermon(FALLBACK_SERMONS[0]);
        }
      } catch (err) {
        console.error('Failed to load YouTube videos:', err);
        setSermons(FALLBACK_SERMONS);
        setSelectedSermon(FALLBACK_SERMONS[0]);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestVideos();
  }, []);

  if (loading) {
    return (
      <section className="bg-slate-100 py-16 px-6 text-center text-slate-600 font-semibold">
        Loading latest sermons...
      </section>
    );
  }

  const activeSermon = selectedSermon || FALLBACK_SERMONS[0];
  const activeList = sermons.length > 0 ? sermons : FALLBACK_SERMONS;

  return (
    <section className="bg-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Player */}
          <div className="lg:col-span-7 bg-[#1c2e3d] text-white rounded-2xl overflow-hidden shadow-lg border border-slate-700">
            <div className="p-4 bg-[#14222e] flex items-center space-x-3 border-b border-slate-700/60">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <div>
                <h3 className="font-bold text-sm text-white">Recent Live Stream / Sermon</h3>
                <p className="text-xs text-slate-400 line-clamp-1">{activeSermon.title}</p>
              </div>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeSermon.youtubeId}?autoplay=0`}
                title={activeSermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-4 flex justify-between items-center text-xs text-slate-300">
              <span className="font-medium">{activeSermon.date}</span>
              <a
                href={`https://www.youtube.com/watch?v=${activeSermon.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded transition"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>

          {/* Video List */}
          <div className="lg:col-span-5 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-[#c8b375] text-slate-950 p-5 border-b border-amber-300">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📹</span>
                <h3 className="font-bold text-lg text-[#1c2e3d]">Recent Sermons</h3>
              </div>
              <p className="text-xs text-slate-800 font-medium mt-1">
                Select any sermon to play it on the left screen.
              </p>
            </div>

            <div className="p-4 space-y-3 divide-y divide-slate-100 max-h-[420px] overflow-y-auto">
              {activeList.map((sermon) => {
                const isSelected = sermon.id === activeSermon.id;
                return (
                  <button
                    key={sermon.id}
                    onClick={() => setSelectedSermon(sermon)}
                    className={`w-full text-left p-3.5 rounded-xl transition flex items-center justify-between group pt-3 ${
                      isSelected ? 'bg-slate-100 border border-slate-300 shadow-sm' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1 pr-3">
                      <div className="flex items-center space-x-2">
                        {isSelected && <span className="text-red-500 text-xs font-bold">▶ Playing</span>}
                        <h4 className={`text-sm font-bold line-clamp-1 ${isSelected ? 'text-indigo-950' : 'text-slate-800 group-hover:text-indigo-900'}`}>
                          {sermon.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{sermon.date}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}