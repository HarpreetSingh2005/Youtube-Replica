import React from "react";
import styles from "./searchResults.module.css";
// import { videosDetails } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
const searchResults = ({ search_query, videos }) => {
  const videosDetails = videos;
  return (
    <>
      <p className={styles.show}> Showing Results for {search_query}</p>
      <div className={styles.content}>
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
                alt="Video"
                width={500}
                height={244}
              />
            </div>
            <div className={styles.title}>
              <p className={styles.heading}>{item.snippet.title}</p>
              <p>{item.snippet.description.slice(0, 250)}...</p>
              <p>{item.views} views</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default searchResults;
