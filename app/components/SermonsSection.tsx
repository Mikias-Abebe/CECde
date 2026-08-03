'use client';

import { useState, useEffect } from 'react';
import { Play, ExternalLink, Tv } from 'lucide-react';

interface Sermon {
  id: string;
  title: string;
  date: string;
  youtubeId: string;
}

export default function SermonsSection({ lang = 'de' }: { lang?: string }) {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    async function fetchChurchSermons() {
      if (!API_KEY || !CHANNEL_ID) {
        console.warn('YouTube API key or Channel ID missing from .env.local');
        setLoading(false);
        return;
      }

      try {
        // Fetch top 6 recent videos from church channel
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`
        );
        const data = await res.json();

        if (data.items) {
          const fetchedSermons: Sermon[] = data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            date: new Date(item.snippet.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),
            youtubeId: item.id.videoId,
          }));

          setSermons(fetchedSermons);
          setSelectedSermon(fetchedSermons[0]);
        }
      } catch (error) {
        console.error('Failed to fetch YouTube sermons:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchChurchSermons();
  }, [API_KEY, CHANNEL_ID]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-6 text-center text-slate-500">
        Loading latest church sermons...
      </div>
    );
  }

  if (!selectedSermon) {
    return null;
  }

  const activeYoutubeId = selectedSermon.youtubeId.trim();

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Main Video Player */}
        <div className="lg:col-span-2 bg-[#121c24] rounded-2xl p-4 md:p-6 text-white shadow-lg space-y-4">
          <div className="flex items-center space-x-2 text-xs font-medium text-red-400">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span>Recent Live Stream / Sermon</span>
          </div>

          <h2 className="text-base md:text-lg font-semibold text-slate-100 line-clamp-1">
            {selectedSermon.title}
          </h2>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
            <iframe
              key={activeYoutubeId}
              src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=0`}
              title={selectedSermon.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
            <span>{selectedSermon.date}</span>
            <a
              href={`https://www.youtube.com/watch?v=${activeYoutubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Playlist Column */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="bg-[#cba864] text-slate-900 p-4 space-y-1">
            <div className="flex items-center space-x-2">
              <Tv className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-lg">Recent Sermons</h3>
            </div>
            <p className="text-xs text-slate-800">
              Select any sermon to play it on the left screen.
            </p>
          </div>

          <div className="p-3 space-y-2.5 max-h-[500px] overflow-y-auto">
            {sermons.map((sermon) => {
              const isSelected = sermon.id === selectedSermon.id;
              const cleanId = sermon.youtubeId.trim();
              const thumbnailUrl = `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`;

              return (
                <button
                  key={sermon.id}
                  onClick={() => setSelectedSermon(sermon)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center space-x-3 group ${
                    isSelected
                      ? 'bg-amber-50 border-amber-300 ring-1 ring-amber-400'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200/80'
                  }`}
                >
                  <div className="relative w-28 aspect-video rounded-lg overflow-hidden shrink-0 bg-slate-200">
                    <img
                      src={thumbnailUrl}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                        isSelected ? 'bg-black/40 opacity-100' : 'bg-black/20 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <Play className="w-5 h-5 text-white fill-white drop-shadow" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    {isSelected && (
                      <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-red-600 uppercase tracking-wide">
                        <Play className="w-2.5 h-2.5 fill-red-600" />
                        <span>Playing</span>
                      </span>
                    )}
                    <h4
                      className={`text-xs font-medium leading-snug line-clamp-2 ${
                        isSelected ? 'text-slate-900 font-bold' : 'text-slate-700'
                      }`}
                    >
                      {sermon.title}
                    </h4>
                    <p className="text-[11px] text-slate-400">{sermon.date}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
} 