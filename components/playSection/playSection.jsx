"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./playSection.module.css";
import { videosDetails } from "@/app/constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faBookmark,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { fetchVideo } from "@/app/services/youtubeVideo";

const PlaySection = ({ videoId, onVideoLoaded }) => {
  const [video, setVideo] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!videoId) return;
    fetchVideo(videoId).then((video) => {
      setVideo(video);
      onVideoLoaded(video.snippet.title);
      console.log("Related Video name: ", video);
    });
  }, [videoId]);
  if (!video || !video.snippet || !video.statistics) {
    return <div className={styles.main}>Loading...</div>;
  }

  const MAX_LENGTH = 120;

  // const isLong = text.length > MAX_LENGTH;
  // const displayText = showMore ? text : text.slice(0, MAX_LENGTH);

  return (
    <div className={styles.main}>
      <div className={styles.play}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allowFullScreen
          className={styles.iframe}
        />
      </div>
      <div className={styles.title}>{video.snippet.title}</div>
      <div className={styles.description}>
        <div className={styles.left}>
          <span>{video.statistics.viewCount} views</span>
          <p>
            <button>
              {video.snippet.channelTitle}
              <span>Subscribe</span>
            </button>
          </p>
        </div>
        <div className={styles.right}>
          <button>
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button>
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
          <button>
            <span>Share</span> <FontAwesomeIcon icon={faShare} />
          </button>
          <button>
            <span>Save</span> <FontAwesomeIcon icon={faBookmark} />
          </button>
          <button>
            <FontAwesomeIcon icon={faSliders} />
          </button>
        </div>
      </div>
      <div className={styles.nonVideo + " " + (!showMore ? styles.clamp : "")}>
        <p>Description: {video.snippet.description}</p>
      </div>
    </div>
  );
};

export default PlaySection;
