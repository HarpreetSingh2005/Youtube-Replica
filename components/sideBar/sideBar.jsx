"use client";
import React from "react";
import styles from "./sideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const sideBar = ({ open }) => {
  return (
    <aside className={styles.sidePanel + " " + (open ? styles.open : "")}>
      {open ? (
        <>
          <button className={styles.home}>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </button>
          <button className={styles.shorts}>
            <Image
              src="/images/shorts_icon.png"
              alt="shorts"
              width={27}
              height={27}
            />
            <span>Shorts</span>
          </button>
          <button className={styles.subscriptions}>
            <FontAwesomeIcon icon={faYoutube} />
            <span>Subscriptions</span>
          </button>
          <button className={styles.profile}>
            <FontAwesomeIcon icon={faCircleUser} />
            <span>You</span>
          </button>
        </>
      ) : (
        <>
          <button className={styles.home}>
            <FontAwesomeIcon icon={faHouse} />
          </button>
          <button className={styles.shorts}>
            <Image
              src="/images/shorts_icon.png"
              alt="shorts"
              width={27}
              height={27}
            />
          </button>
          <button className={styles.subscriptions}>
            <FontAwesomeIcon icon={faYoutube} />
          </button>
          <button className={styles.profile}>
            <FontAwesomeIcon icon={faCircleUser} />
          </button>
        </>
      )}
    </aside>
  );
};

export default sideBar;
