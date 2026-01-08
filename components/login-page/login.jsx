"use client";
import { handleAuth } from "../../app/login/actions/data_actions";
import styles from "./login.module.css";
import { useState } from "react";

const Login = ({ onAuthSuccess }) => {
  const [mode, setMode] = useState("login");
  const [message, setMessage] = useState("");
  const clientAction = async (formData) => {
    const result = await handleAuth(formData);
    if (result.error) setMessage(result.error);
    if (result.success) {
      setMessage(result.message);
      if (onAuthSuccess) {
        onAuthSuccess();
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {/* {mode === "login" ? "Welcome Back" : "Create Account"} */}
          Login to watch futher
        </h1>
        <form action={clientAction} key={mode} className={styles.form}>
          <input type="hidden" name="type" value={mode}></input>
          {mode === "signup" && (
            <input
              name="name"
              placeholder="Your Name"
              required
              className={styles.input} // Apply input style
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className={styles.input}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            {mode === "login" ? "Signin" : "Signup"}
          </button>
        </form>
        <p className={styles.message}>{message}</p>
        <button
          className={styles.switchButton}
          onClick={() => {
            setMode(mode === "login" ? "signup" : "login");
          }}
        >
          Switch to {mode === "login" ? "Signup" : "Signin"}
        </button>
      </div>
    </div>
  );
};

export default Login;
