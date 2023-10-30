import Link from "next/link";
import Image from "next/image";
import CTSLogo from "../../public/cts.png";
import NurtioLogo from "../../public/nurtio.webp";
import TopRightLogo from "../../public/topright.png";
import NeroLogo from "../../public/nero.svg";
import BKOLogo from "../../public/bko.svg";
import { Container } from "./container";
import { ShimmerButton } from "./shimmer-button";
import FigLogo from "../../public/fig.webp";

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
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href="https://tally.so/r/nraKxo"
                target="_blank"
                className="w-full sm:w-max"
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
              <Link
                target="_blank"
                href="https://calendly.com/wuweiweiwu/30min"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-blue-600/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-[#2971c7]">
                  Book a call
                </span>
              </Link>
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

export function Companies() {
  const entries = [
    {
      url: "https://fig.investments",
      component: (
        <div className="flex items-center gap-3 text-xl font-bold text-black">
          <Image src={FigLogo} alt="Fig" height={30} /> Fig
        </div>
      ),
    },
    {
      url: "https://www.nero.com/ena/?vlang=us",
      component: <Image src={NeroLogo as string} height={30} alt="Nero" />,
    },
    {
      url: "https://www.cognitivetalentsolutions.com/",
      component: (
        <Image src={CTSLogo} alt="Cognitive Talent Solutions" height={30} />
      ),
    },
    {
      url: "https://www.nurtio.com/",
      component: <Image src={NurtioLogo} alt="Nurtio" height={30} />,
    },
    {
      url: "https://www.gotopright.com/",
      component: <Image src={TopRightLogo} alt="TopRight" height={30} />,
    },
    {
      url: "https://www.bko.agency/",
      component: <Image src={BKOLogo} alt="BKO" height={30} />,
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
        <div className="slide-track-5 hover:pause mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-around items-center">
          {[...entries, ...entries].map(({ component, url }, i) => (
            <div
              className="w-[12rem] relative grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0"
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
