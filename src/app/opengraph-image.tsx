import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TMK Holding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0e14 0%, #1a2636 100%)",
        }}
      >
        <div
          style={{
            width: 64,
            height: 3,
            background: "#bda57e",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          TMK Holding
        </div>
        <div style={{ fontSize: 32, color: "#bda57e", marginBottom: 16 }}>
          Investments · Real Estate · Marketing · Technology
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          A growth ecosystem for your business since 2017
        </div>
      </div>
    ),
    { ...size },
  );
}
