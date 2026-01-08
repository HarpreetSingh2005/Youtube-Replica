import React, { useEffect, useState } from "react";
import styles from "./moreVideos.module.css";
import Image from "next/image";
import Link from "next/link";
import Categories from "@/components/categories/categories";
import { fetchRelatedVideos } from "@/app/services/youtubeRelatedSearch";

const moreVideos = ({ channel }) => {
  const [videosDetails, setVideosDetails] = useState([]);
  useEffect(() => {
    if (videosDetails.length === 0) {
      fetchRelatedVideos(channel).then(setVideosDetails);
    }
  }, [channel]);
  if (!channel) {
    return <div className={styles.main}>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.categoryWrapper}>
        <Categories />
      </div>
      {videosDetails.map((item) => (
        <Link
          href={`/watch/${item.id.videoId}`}
          className={styles.videoCard}
          key={item.id.videoId}
        >
          <div className={styles.video}>
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
          <div className={styles.title}>
            <p className={styles.heading}>{item.snippet.title}</p>
            <p>{item.snippet.descrription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default moreVideos;
