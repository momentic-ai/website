import { Container } from "./container";

export function Demo() {
  return (
    <Container>
      <div
        style={{
          position: "relative",
          paddingBottom: "calc(68.43674367436743% + 44px)",
          height: 0,
        }}
      >
        <iframe
          src="https://app.supademo.com/embed/-o_4pra2XX31YXCLCqr-p"
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
