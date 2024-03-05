import { FadeIn } from "../fade-in";
import { FEATURES } from "../features";
import { FeaturesBento } from "../features-bento";
import { GradientSectionBorder } from "../gradient-section-border";
import { Demo } from "./demo";
import { FAQ } from "./faq";
import { Hero } from "./hero";

export function Home() {
  return (
    <main>
      <FadeIn noVertical>
        <Hero />
      </FadeIn>

      <GradientSectionBorder>
        <FadeIn className="py-16 md:py-24 lg:py-32">
          <FeaturesBento
            header="Why Momentic?"
            body="We make AI do the heavy lifting for you: finding elements, reasoning about assertions, visual comparisons, and even generating whole tests!"
            features={FEATURES}
          />
        </FadeIn>
      </GradientSectionBorder>

      <GradientSectionBorder>
        <FadeIn className="py-16 md:py-24 lg:py-32">
          <Demo />
        </FadeIn>
      </GradientSectionBorder>

      {/* <GradientSectionBorder>
        <FadeIn className="py-16 md:py-24 lg:py-32">
          <FAQ />
        </FadeIn>
      </GradientSectionBorder> */}
    </main>
  );
}
