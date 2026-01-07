"use client";
import VideoPlay from "../../../components/playSection/playSection";
import MoreVideos from "../../../components/playSection/moreVideos/moreVideos";
import { useState } from "react";
import { useParams } from "next/navigation";
export default function videoPlay({ children }) {
  const params = useParams();
  const videoId = params.slug;
  const [channel, setChannel] = useState("");
  const onVideoLoaded = (_channel) => {
    setChannel(_channel);
    console.log("Related Video name: ", _channel, channel);
  };
  return (
    <>
      <main>{children}</main>
      <div className="content">
        <VideoPlay videoId={videoId} onVideoLoaded={onVideoLoaded} />
        <MoreVideos channel={channel} />
      </div>
    </>
  );
}
