import React from "react";
import { MiniBrowser } from "@code-hike/mini-browser";
import s from "./p.module.css";

export default function Page() {
  return (
    <div
      className={s.page}
      style={{
        background: "salmon",
        width: "1400px",
        height: "560px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -46,
          top: 80,
          transform: "scale(0.75)",
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
          left: 632,
          top: 80,
          transform: "scale(0.75)",
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
