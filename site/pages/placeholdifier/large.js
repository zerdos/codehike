import React from "react";
import { MiniBrowser } from "@code-hike/mini-browser";
import s from "./p.module.css";

export default function Page() {
  return (
    <div
      className={s.page}
      style={{
        width: "100%",
        background: "#fafafa",
        height: "100vh",
        padding: 40,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute" }}>
        <MiniBrowser
          url="https://youtube.com"
          style={{ width: 800, height: 480 }}
        >
          <img src="/youtube0.png" width="100%" />
        </MiniBrowser>
      </div>
      <div style={{ position: "absolute", left: 100, top: 100 }}>
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
