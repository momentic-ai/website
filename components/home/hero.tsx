import Link from "next/link";
import Image from "next/image";
import CTSLogo from "./images/cts.png";
import NurtioLogo from "./images/nurtio.webp";
import TopRightLogo from "./images/topright.png";
import GPTZeroLogo from "./images/gptzero.png";
import NeroLogo from "./images/nero.svg";
import BKOLogo from "./images/bko.svg";
import { Container } from "./container";
import ShimmerButton from "@/components/magicui/shimmer-button";
import FigLogo from "./images/fig.webp";
import YCLogo from "./images/yc.svg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative">
      <Blur />
      <Container>
        <div className="relative pt-20 md:pt-36 ml-auto">
          <div className="lg:w-[70%] text-center mx-auto">
            <h1 className="text-zinc-900 dark:text-white font-extrabold text-5xl md:text-6xl xl:text-7xl">
              Fast track your test automation{" "}
              <span className="gradient-text inline-block">with AI</span>
            </h1>
            <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-300 leading-8">
              Momentic enables developers to deploy AI agents to test web apps
              end-to-end.{" "}
              <span className="font-medium dark:text-zinc-100 whitespace-nowrap">
                No code required
              </span>{" "}
              - just describe user flows using natural language.
            </p>

            <Link
              href="https://www.ycombinator.com/companies/momentic"
              className="flex gap-2 items-center justify-center mt-8"
            >
              <span>Backed by</span>
              <Image src={YCLogo} height={30} alt="YC" />
            </Link>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-6">
              <Link
                href="https://momentic.ai/waitlist"
                target="_blank"
                className="w-full sm:w-max"
              >
                <ShimmerButton borderRadius="8px">
                  <span className="whitespace-pre-wrap bg-clip-text text-center text-md font-semibold leading-none tracking-tight text-background">
                    Join the waitlist →
                  </span>
                </ShimmerButton>
              </Link>

              <Button variant="outline" size="lg" asChild>
                <Link target="_blank" href="https://momentic.ai/demo">
                  Book a demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 text-center mx-auto">
          <Companies />
        </div>
      </Container>
    </div>
  );
}

export function Blur() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
    >
      <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-br from-cyan-500 to-blue-400"></div>
      <div className="fix-safari-blur blur-[106px] h-32 bg-gradient-to-r from-indigo-400 to-blue-30"></div>
    </div>
  );
}

const IMAGE_SIZE = 40;

export function Companies() {
  const CUSTOMERS = [
    {
      url: "https://gptzero.me",
      component: <Image src={GPTZeroLogo} alt="GPTZero" height={IMAGE_SIZE} />,
    },
    {
      url: "https://fig.investments",
      component: (
        <div className="flex items-center gap-3 text-xl font-bold text-black">
          <Image src={FigLogo} alt="Fig" height={IMAGE_SIZE} /> Fig
        </div>
      ),
    },
    {
      url: "https://www.nero.com/ena/?vlang=us",
      component: <Image src={NeroLogo} height={IMAGE_SIZE} alt="Nero" />,
    },
    {
      url: "https://www.cognitivetalentsolutions.com/",
      component: (
        <Image
          src={CTSLogo}
          alt="Cognitive Talent Solutions"
          height={IMAGE_SIZE}
        />
      ),
    },
    {
      url: "https://www.nurtio.com/",
      component: <Image src={NurtioLogo} alt="Nurtio" height={IMAGE_SIZE} />,
    },
    {
      url: "https://www.gotopright.com/",
      component: (
        <Image src={TopRightLogo} alt="TopRight" height={IMAGE_SIZE} />
      ),
    },
    {
      url: "https://www.bko.agency/",
      component: <Image src={BKOLogo} alt="BKO" height={IMAGE_SIZE} />,
    },
  ];

  return (
    <div className="mt-36 text-center lg:mt-32">
      <div className="uppercase text-sm font-semibold tracking-wider text-zinc-600 dark:text-zinc-400">
        Trusted by companies shipping at{" "}
        <span className="dark:text-white text-black semibold">blazing</span>{" "}
        speeds
      </div>

      <div className="slider">
        <div className="slide-track-7 hover:pause mt-6 flex justify-evenly gap-[20px] items-center">
          {[...CUSTOMERS, ...CUSTOMERS].map(({ component, url }, i) => (
            <div
              className="relative grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0"
              key={i}
            >
              <a
                href={url}
                target="_blank"
                className="flex justify-center w-full"
              >
                {component}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
