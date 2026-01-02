"use client";
import React from "react";
import Link from "next/link";
import styles from "./videos.module.css";
import { videosDetails } from "@/app/constants/index";
import Image from "next/image";
const videos = () => {
  return (
    <div className={styles.content}>
      {videosDetails.map((item) => (
        <Link
          href={`/watch/${item.id}`}
          className={styles.videoCard}
          key={item.id}
        >
          <Image
            className={styles.image}
            src="/images/youtube_icon.png"
            alt="Youtube"
            width={230}
            height={230}
          />
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default videos;
