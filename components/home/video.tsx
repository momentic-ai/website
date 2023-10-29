import dynamic from "next/dynamic";
import { Container } from "./container";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export function Video() {
  return (
    <Container>
      <div className="player-wrapper flex items-center justify-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KBANJo5Tpwg"
          className="react-player"
          width="100%"
          height="100%"
          style={{
            boxShadow: "0 0 48px 0 rgba(41, 113, 199, 0.25)",
            borderRadius: 6,
            overflow: "hidden",
          }}
        />
      </div>
    </Container>
  );
}
