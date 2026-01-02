"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./navBar.module.css";
import Image from "next/image";
const navBar = ({ onMenuClick }) => {
  useState();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faBars} onClick={onMenuClick} />
        </div>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/youtube_icon.png"
            alt="Youtube Icon"
            height={29}
            width={29}
          ></Image>
          <span>YouTube</span>
        </Link>
      </div>
      <div className={styles.middle}>
        <input type="text" placeholder="Search" />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <div className={styles.mike}>
          <button>
            <FontAwesomeIcon icon={faMicrophone} />
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.create}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Create</span>
        </button>
        <button className={styles.notification}>
          <FontAwesomeIcon icon={faBell} />
        </button>
      </div>
    </nav>
  );
};

export default navBar;
