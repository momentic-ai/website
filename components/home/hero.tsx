import Link from "next/link";
import Image from "next/image";
import GPTZeroLogo from "./images/gptzero.png";
import { Container } from "./container";
import ShimmerButton from "@/components/magicui/shimmer-button";
import FigLogo from "./images/fig.webp";
import YCLogo from "./images/yc.svg";
import { Button } from "@/components/ui/button";
import { HeroText, SectionSubtext } from "../headings";
import BestParents from "./images/best-parents.webp";
import Conch from "./images/conch.webp";
import Overview from "./images/overview.png";
// import Talitrix from "./images/talitrix.webp";
import Lunchbreak from "./images/lunchbreak.webp";
// import Ghostcontent from "./images/ghostcontent.svg";
import Thinkful from "./images/thinkful.svg";
import { Gradient } from "../gradient";

export function Hero() {
  return (
    <div className="relative">
      <Container className="pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative min-h-[calc(100svh-var(--nextra-navbar-height))] overflow-hidden">
        <div />

        <div className="flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6 relative">
          <Gradient
            className="top-[-700px] dark:opacity-20 opacity-[0.15] pointer-events-none"
            conic
            height={1000}
            width={1000}
          />

          <HeroText h1>Automated testing with AI</HeroText>

          <SectionSubtext>
            Momentic is an low-code AI-powered testing platform that helps
            developers author E2E tests in minutes, not days.
          </SectionSubtext>

          <Link
            href="https://www.ycombinator.com/companies/momentic"
            className="flex gap-2 items-center justify-center"
          >
            <span>Backed by</span>
            <Image src={YCLogo} height={30} alt="YC" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-6 px-8">
          <Link href="https://momentic.ai/waitlist" target="_blank">
            <ShimmerButton borderRadius="8px">
              <span className="whitespace-pre-wrap bg-clip-text text-center text-md font-semibold leading-none tracking-tight text-background">
                Join the waitlist →
              </span>
            </ShimmerButton>
          </Link>

          <Button variant="outline" size="lg" asChild>
            <Link href="/schedule-demo">Book a demo</Link>
          </Button>
        </div>

        <Companies />

        <div />
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
        <div className="flex items-center gap-1 text-xl font-bold text-black">
          <Image src={FigLogo} alt="Fig" height={IMAGE_SIZE} /> Fig
        </div>
      ),
    },
    {
      url: "https://www.thinkful.com/",
      component: <Image src={Thinkful} alt="Thinkful" height={IMAGE_SIZE} />,
    },
    {
      url: "https://www.bestparents.com/",
      component: (
        <Image src={BestParents} height={IMAGE_SIZE} alt="BestParents" />
      ),
    },
    {
      url: "https://www.getconch.ai/",
      component: (
        <div className="flex items-center gap-1">
          <Image src={Conch} alt="Conch" height={IMAGE_SIZE} />
          <span className="font-semibold text-[#9e91fb] text-3xl">Conch</span>
        </div>
      ),
    },
    {
      url: "https://overview.ai/",
      component: <Image src={Overview} alt="Overview" height={IMAGE_SIZE} />,
    },
    // {
    //   url: "https://talitrix.com/",
    //   component: <Image src={Talitrix} alt="Talitrix" height={IMAGE_SIZE} />,
    // },
    {
      url: "https://lunchbreak.ai/",
      component: (
        <Image src={Lunchbreak} alt="Lunchbreak" height={IMAGE_SIZE} />
      ),
    },
    // {
    //   url: "https://ghostcontent.ai/",
    //   component: (
    //     <Image src={Ghostcontent} alt="GhostContent" height={IMAGE_SIZE} />
    //   ),
    // },
  ];

  return (
    <div className="text-center w-3/4 mx-auto">
      <div className="font-semibold text-lg tracking-wider">
        Trusted by teams around the world
      </div>

      <div className="slider">
        <div className="slide-track-7 hover:pause mt-5 lg:mt-6 flex justify-evenly gap-[40px] items-center">
          {[...CUSTOMERS, ...CUSTOMERS].map(({ component, url }, i) => (
            <div
              className="relative grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0"
              key={i}
            >
              <a href={url} target="_blank" className="flex justify-center">
                {component}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
