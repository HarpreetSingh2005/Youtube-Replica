"use client";
import VideoPlay from "../../../components/playSection/playSection";
import MoreVideos from "../../../components/playSection/moreVideos/moreVideos";
import Login from "@/components/login-page/login";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getCookie } from "cookies-next";

export default function videoPlay({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [channel, setChannel] = useState("");
  const params = useParams();
  const videoId = params.slug;
  useEffect(() => {
    const session = getCookie("user_session");

    if (session) {
      setIsAuthenticated(true);
    }
    // setLoading(false);
  }, [channel]);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const onVideoLoaded = (_channel) => {
    setChannel(_channel);
  };
  return (
    <>
      <main>{children}</main>
      {isAuthenticated ? (
        <div className="content">
          <VideoPlay videoId={videoId} onVideoLoaded={onVideoLoaded} />
          <MoreVideos channel={channel} />
        </div>
      ) : (
        <>
          {/* <h3>You must be signed in to watch this video</h3> */}
          <Login onAuthSuccess={handleAuthSuccess} />
        </>
      )}
    </>
  );
}
