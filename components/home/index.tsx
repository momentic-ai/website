import { FEATURES } from "../features";
import { FeaturesBento } from "../features-bento";
import { FAQ } from "./faq";
import { Hero } from "./hero";

export function Home() {
  return (
    <main>
      <Hero />

      <FeaturesBento
        header="Why Momentic?"
        body="We make AI do the heavy lifting for you: finding elements, reasoning about assertions, visual comparisons, and even generating whole tests!"
        features={FEATURES}
      />

      <FAQ />
    </main>
  );
}
