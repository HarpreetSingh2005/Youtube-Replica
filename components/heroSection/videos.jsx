"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./videos.module.css";
// import { videosDetails } from "@/app/constants/index";
import Image from "next/image";
import { fetchVideos } from "@/app/services/youtubeSearch";
const videos = (videos) => {
  const [videosDetails, setVideosDetails] = useState([]);
  useEffect(() => {
    fetchVideos("music videos punjabi or english").then(setVideosDetails);
  }, []);
  if (!videosDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.content}>
      {videosDetails.map((item) => (
        <Link
          href={`/watch/${item.id.videoId}`}
          className={styles.videoCard}
          key={item.id.videoId}
        >
          <div className={styles.thumbnail}>
            <Image
              className={styles.image}
              src={
                item.snippet.thumbnails.high.url ||
                item.snippet.thumbnails.medium.url
              }
              alt="Youtube"
              width={400}
              height={340}
            />
          </div>
          <div className={styles.title}>{item.snippet.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default videos;
