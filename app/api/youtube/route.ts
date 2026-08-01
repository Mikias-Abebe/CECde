// src/app/api/youtube/route.ts
import { NextResponse } from 'next/server';

export async function GET() { // 👈 Must be GET in uppercase
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return NextResponse.json(
      { error: 'YouTube API configuration missing.' },
      { status: 500 }
    );
  }

  const playlistId = channelId.replace(/^UC/, 'UU');

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=5`,
      { cache: 'no-store' }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch YouTube data' }, { status: 500 });
  }
}