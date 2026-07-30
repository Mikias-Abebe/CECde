import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return NextResponse.json({ error: 'API credentials missing' }, { status: 500 });
  }

  try {
    // 1. Fetch channel details to get the uploads playlist ID
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );
    const channelData = await channelRes.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    // 2. Fetch latest videos from the uploads playlist
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${apiKey}`
    );
    const videosData = await videosRes.json();

    // 3. Check for currently active live stream
    const liveRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
    );
    const liveData = await liveRes.json();
    const activeLive = liveData.items?.[0] || null;

    return NextResponse.json({
      liveStream: activeLive,
      sermons: videosData.items || [],
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch YouTube data' }, { status: 500 });
  }
}