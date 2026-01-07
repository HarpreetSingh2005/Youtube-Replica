import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("query");

  try {
    const ytRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${q}&key=${process.env.API}`
    );
    const data = await ytRes.json();
    return NextResponse.json({ items: data.items });
  } catch (error) {
    return NextResponse.json(
      { error: "failed to fetch data" },
      { status: 500 }
    );
  }
}
