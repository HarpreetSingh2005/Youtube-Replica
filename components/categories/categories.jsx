"use client";
import React from "react";
import styles from "./categories.module.css";
import { category } from "../../app/constants/index";
const categories = () => {
  return (
    <div className={styles.category}>
      {category.map((item) => (
        <button key={item.id}>{item.name}</button>
      ))}
    </div>
  );
};

export default categories;
