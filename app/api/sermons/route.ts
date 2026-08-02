    import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY || 'AIzaSyBsk8KUoUmQjIifiA6_IKlMPiB2VaKEw50';
  const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uZZ5FSM9Ttw';

  // Fallback data in case YouTube credentials are missing or API fails
  const fallbackSermons = [
    {
      id: 'fallback1',
      snippet: {
        title: "Christ's Evangelical Church Service",
        publishedAt: new Date().toISOString(),
        resourceId: { videoId: '5qap5aO4i9A' },
        thumbnails: { medium: { url: 'https://img.youtube.com/vi/5qap5aO4i9A/mqdefault.jpg' } }
      }
    }
  ];

  if (!apiKey) {
    console.warn('⚠️ YOUTUBE_API_KEY is missing in .env.local');
    return NextResponse.json({ sermons: fallbackSermons, liveStream: null });
  }

  try {
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );
    const channelData = await channelRes.json();

    if (channelData.error) {
      console.error('❌ YouTube API Error:', channelData.error.message);
      return NextResponse.json({ sermons: fallbackSermons, error: channelData.error.message });
    }

    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      return NextResponse.json({ sermons: fallbackSermons, liveStream: null });
    }

    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=6&key=${apiKey}`
    );
    const playlistData = await playlistRes.json();

    return NextResponse.json({
      sermons: playlistData.items || fallbackSermons,
      liveStream: null
    });
  } catch (error: any) {
    console.error('❌ Server error fetching sermons:', error.message);
    return NextResponse.json({ sermons: fallbackSermons, liveStream: null });
  }
}   