import React from "react";
import { MiniBrowser } from "@code-hike/mini-browser";
import s from "./x.module.css";

export default function Page() {
  const mv = 140;
  const mh = 160;
  const th = -40;
  const bh = 160;
  const tt = -20;
  const bt = 300;
  return (
    <Container>
      <Frame
        style={{ top: tt, left: th }}
        url="https://tailwindcss.com/"
        img="/tailwind.png"
      />
      <Frame
        style={{ top: tt, left: 400 }}
        url="https://open.spotify.com/"
        img="/spotify.png"
      />
      <Frame
        style={{ top: tt, right: th }}
        url="https://youtube.com/"
        img="/whatsapp.png"
      />
      <Frame
        style={{ top: bt, left: bh }}
        url="https://youtube.com/"
        img="/youtube1.png"
      />
      <Frame
        style={{ top: bt, right: bh }}
        url="https://nytimes.com/"
        img="/nyt.png"
      />
    </Container>
  );
}

function Frame({ style, img, url, scale = 0.5 }) {
  return (
    <div
      style={{
        position: "absolute",
        ...style,
        width: 800 * scale,
        height: 480 * scale,
        // transform: "rotateY(-60deg)",
      }}
    >
      <MiniBrowser
        url={url}
        style={{
          width: 800,
          height: 480,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <img src={img} width="100%" />
      </MiniBrowser>
    </div>
  );
}

function Container({ children }) {
  return (
    <div className={s.page}>
      <div
        style={{
          perspective: 800,
          width: "1200px",
          height: "630px",
          background: "#ffffff",
          boxSizing: "border-box",
          position: "relative",
          transform: "scale(0.5)",
        }}
      >
        <div
          style={{
            width: "1200px",
            height: "600px",
            margin: "15px 0",
            boxSizing: "border-box",
            position: "relative",
            transform: "rotateX(22deg)",
            transformOrigin: "50% 80%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
