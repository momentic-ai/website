import React, { useEffect } from "react";

const policies = {
  "terms-of-service": "8839207b-d836-4d18-8bf7-1ebe23d9e264",
  privacy: "1a252ccf-f01a-41e9-986d-9b4bd0f51a96",
};

export function TermlyEmbed(props: { policy: keyof typeof policies }) {
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
      data-id={policies[props.policy]}
      data-type="iframe"
    ></div>
  );
}
