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
        transform: "scale(0.5)",
      }}
    >
      <div
        className={s.first}
        style={{
          position: "absolute",
          left: 238,
          top: 148,
          transform: "scale(1.5)",
        }}
      >
        <MiniBrowser
          url="https://web.whatsapp.com"
          style={{ width: 800, height: 480 }}
        >
          <img src="/whatsapp.png" width="100%" />
        </MiniBrowser>
      </div>
    </div>
  );
}
