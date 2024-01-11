import { Container } from "./container";

export function Demo() {
  return (
    <Container>
      <div
        style={{
          position: "relative",
          paddingBottom: "calc(70.63696369636963% + 88px)",
          height: 0,
        }}
      >
        <iframe
          src="https://app.supademo.com/embed/vMhNTqNO23lDmuhBgVvF-"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </Container>
  );
}
