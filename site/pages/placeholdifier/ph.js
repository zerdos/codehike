import React from "react";
import { MiniBrowser } from "@code-hike/mini-browser";
import s from "./ph.module.css";

export default function Page() {
  return (
    <Container>
      <Frame url="http://foo.com" img="/tailwind.png" />
    </Container>
  );
}

function Frame({ url, scale = 1 }) {
  return (
    <div
      style={{
        margin: "16px 12px",
        // transform: "rotateY(-60deg)",
      }}
    >
      <MiniBrowser
        url={url}
        style={{
          width: 216,
          height: 200,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="content"
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/icon.png" style={{ borderRadius: "30%" }} width="30%" />
            <div style={{ width: 20 }}></div>
            <div
              style={{
                width: 84,
                color: "#338",
                fontWeight: "bold",
                lineHeight: "1.05em",
              }}
            >
              Turn websites into live wireframes
            </div>
          </div>
          <div style={{ height: 15 }} />
          <h2
            style={{
              textAlign: "center",
              margin: 0,
              color: "#222",
              fontSize: "1.66em",
            }}
          >
            Placeholdifier
          </h2>
        </div>
      </MiniBrowser>
    </div>
  );
}

function Container({ children }) {
  return (
    <div className={s.page}>
      <div
        style={{
          width: "240px",
          height: "240px",
          background: "#ffffff",
          // boxSizing: "border-box",
          border: "5px solid white",
          position: "relative",
          overflow: "hidden",
          // transform: "scale(calc(1 / 3))",
        }}
      >
        {children}
      </div>
    </div>
  );
}
