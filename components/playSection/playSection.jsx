"use client";
import React from "react";
import { useState } from "react";
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
const PlaySection = ({ videoId }) => {
  const video = videosDetails.find((video) => video.id.toString() == videoId);
  const text = video.description;
  const MAX_LENGTH = 120;
  if (!video) {
    return <div>Video not found</div>;
  }

  const [showMore, setShowMore] = useState(false);
  const isLong = text.length > MAX_LENGTH;
  const displayText = showMore ? text : text.slice(0, MAX_LENGTH);

  return (
    <div className={styles.main}>
      <div className={styles.play}>
        <Image
          src="/images/youtube_icon.png"
          alt="Youtube"
          width={400}
          height={400}
          style={{ width: "auto", height: "100%" }}
        ></Image>
      </div>
      <div className={styles.title}>{video.title}</div>
      <div className={styles.description}>
        <div className={styles.left}>
          <span>{video.views} views</span>
          <button>
            <span>Subscribe</span>
          </button>
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
        <p>
          Description: {displayText}
          {
            <button
              className={styles.moreBtn}
              onClick={() => setShowMore(!showMore)}
            >
              {" "}
              {showMore ? ".. show less  .." : "... more ... "}
            </button>
          }
        </p>
      </div>
    </div>
  );
};

export default PlaySection;
