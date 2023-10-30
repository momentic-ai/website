import Link from "next/link";
import { Container } from "./container";
import { Blur } from "./hero";
import { ShimmerButton } from "./shimmer-button";

export function CTA() {
  return (
    <div className="relative">
      <Blur />
      <Container>
        <div className="relative">
          <div className="mt-48 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Get started in seconds
            </h1>
            <p className="mt-3 text-center text-zinc-600 dark:text-zinc-300 md:text-md lg:text-lg">
              Increase developer velocity by eliminating bugs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://tally.so/r/nraKxo"
                className="h-12 w-fullsm:w-max"
                target="_blank"
              >
                <ShimmerButton
                  className="relative w-full sm:w-max flex items-center justify-center transition-all hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]"
                  background="#2971c7"
                >
                  <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10">
                    Join the waitlist →
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
