import React from "react";
import { MiniBrowser } from "@code-hike/mini-browser";
import s from "./p.module.css";

export default function Page() {
  return (
    <div
      className={s.page}
      style={{
        width: "1280px",
        background: "#fafafa",
        height: "800px",
        padding: 40,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        className={s.first}
        style={{
          position: "absolute",
          left: 143,
          top: 100,
          transform: "scale(1.2)",
        }}
      >
        <MiniBrowser
          url="https://youtube.com"
          style={{ width: 800, height: 480 }}
        >
          <img src="/youtube0.png" width="100%" />
        </MiniBrowser>
      </div>
      <div
        style={{
          position: "absolute",
          left: 308,
          top: 220,
          transform: "scale(1.2)",
        }}
      >
        <MiniBrowser
          url="https://youtube.com"
          style={{ width: 800, height: 480 }}
        >
          <img src="/youtube1.png" width="100%" />
        </MiniBrowser>
      </div>
    </div>
  );
}
