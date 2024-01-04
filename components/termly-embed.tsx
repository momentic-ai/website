import React, { useEffect } from "react";

export default function TermlyEmbed(props: { id: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div
      // @ts-ignore
      name="termly-embed"
      data-id={props.id}
      data-type="iframe"
    ></div>
  );
}
