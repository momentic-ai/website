import { CTA } from "./cta";
import { FAQ } from "./faq";
import { Hero } from "./hero";
import { Video } from "./video";

export function Home() {
  return (
    <main className="space-y-40 mb-40">
      <Hero />
      <Video />
      <FAQ />
      <CTA />
    </main>
  );
}
