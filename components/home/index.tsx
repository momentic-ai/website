import { CTA } from "./cta";
import { FAQ } from "./faq";
import { Hero } from "./hero";
import { Demo } from "./demo";
import { Pricing } from "./pricing";

export function Home() {
  return (
    <main className="space-y-40 mb-40">
      <Hero />
      <Demo />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
