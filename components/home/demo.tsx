import { FadeIn } from "../fade-in";
import { SectionHeader, SectionSubtext } from "../headings";

export function Demo() {
  return (
    <section className="relative mx-auto max-w-7xl items-center px-6 py-16 pb-16 font-sans md:pb-24 lg:pb-32 space-y-9 lg:space-y-14">
      <FadeIn className="flex flex-col items-center gap-5 md:gap-6">
        <SectionHeader>Interactive demo</SectionHeader>
        <SectionSubtext>
          Click through the editor to see how easy and quick it is to build a
          test!
        </SectionSubtext>
      </FadeIn>

      <div
        style={{
          position: "relative",
          paddingBottom: "calc(70.63696369636963% + 42px)",
          height: 0,
        }}
      >
        <iframe
          src="https://app.supademo.com/embed/N2t2lIbAXPJfetuF0F8AG"
          frameBorder="0"
          allowFullScreen
          allow="clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </section>
  );
}
