import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("channelId");

  try {
    const ytRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        q
      )}&type=video&maxResults=10&key=${process.env.API}`
    );
    console.log("Id is :", q);

    const data = await ytRes.json();
    console.log("Data using related search:", data);
    console.log(data.items);
    return NextResponse.json({ items: data.items });
  } catch (error) {
    return NextResponse.json(
      { error: "failed to fetch data" },
      { status: 500 }
    );
  }
}
