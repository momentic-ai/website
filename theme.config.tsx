import React from "react";
import { useRouter } from "next/router";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { DiscordIcon } from "@/components/icons/discord-icon";
import { TwitterXIcon } from "@/components/icons/twitter-x-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { Frame } from "@/components/frame";
import Link from "next/link";

const ogConfig = {
  title: "Momentic | Fast track your web test automation with AI",
  description:
    "Momentic enables developers to deploy AI agents to test web apps end-to-end. No code required - just describe user flows using natural language.",
  author: {
    twitter: "MomenticAI",
  },
};

const footerLegalNav = [
  {
    name: "Terms of Service",
    href: "/tos",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
];

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <span>
        <svg
          style={{
            height: "1.8rem",
          }}
          viewBox="0 0 251 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.18 45.48C59.02 45.48 55.78 44.16 53.46 41.52C51.18 38.88 50.04 34.74 50.04 29.1C50.04 23.46 51.18 19.32 53.46 16.68C55.78 14.04 59.02 12.72 63.18 12.72C67.34 12.72 70.56 14.04 72.84 16.68C75.16 19.32 76.32 23.46 76.32 29.1C76.32 34.74 75.16 38.88 72.84 41.52C70.56 44.16 67.34 45.48 63.18 45.48ZM63.18 39.6C66.86 39.6 68.7 37.44 68.7 33.12V25.08C68.7 20.76 66.86 18.6 63.18 18.6C59.5 18.6 57.66 20.76 57.66 25.08V33.12C57.66 37.44 59.5 39.6 63.18 39.6Z"
            fill="black"
          />
          <path
            d="M82.3116 44.76V13.44H89.5716V18.66H90.4116C91.6516 14.7 94.1116 12.72 97.7916 12.72C101.712 12.72 104.252 14.78 105.412 18.9H106.132C106.812 16.78 107.852 15.22 109.252 14.22C110.692 13.22 112.432 12.72 114.472 12.72C117.112 12.72 119.172 13.68 120.652 15.6C122.132 17.48 122.872 20.18 122.872 23.7V44.76H115.612V24.96C115.612 20.88 114.152 18.84 111.232 18.84C109.832 18.84 108.632 19.28 107.632 20.16C106.672 21 106.192 22.2 106.192 23.76V44.76H98.9316V24.96C98.9316 22.8 98.5716 21.24 97.8516 20.28C97.1316 19.32 96.0516 18.84 94.6116 18.84C93.2116 18.84 92.0116 19.28 91.0116 20.16C90.0516 21 89.5716 22.2 89.5716 23.76V44.76H82.3116Z"
            fill="black"
          />
          <path
            d="M142.237 45.48C140.197 45.48 138.317 45.16 136.597 44.52C134.917 43.84 133.477 42.84 132.277 41.52C131.077 40.16 130.137 38.46 129.457 36.42C128.817 34.34 128.497 31.9 128.497 29.1C128.497 23.46 129.617 19.32 131.857 16.68C134.137 14.04 137.377 12.72 141.577 12.72C145.777 12.72 148.997 14.04 151.237 16.68C153.517 19.32 154.657 23.46 154.657 29.1V30.84H136.117V32.88C136.117 34.96 136.697 36.6 137.857 37.8C139.017 39 140.617 39.6 142.657 39.6C144.377 39.6 145.817 39.24 146.977 38.52C148.177 37.76 149.197 36.68 150.037 35.28L153.997 39.42C152.837 41.26 151.277 42.74 149.317 43.86C147.357 44.94 144.997 45.48 142.237 45.48ZM141.577 18.3C137.937 18.3 136.117 20.46 136.117 24.78V26.34H147.037V24.78C147.037 20.46 145.217 18.3 141.577 18.3Z"
            fill="black"
          />
          <path
            d="M160.71 44.76V13.44H167.97V18.66H168.81C170.05 14.7 172.55 12.72 176.31 12.72C179.11 12.72 181.27 13.68 182.79 15.6C184.31 17.48 185.07 20.18 185.07 23.7V44.76H177.81V24.96C177.81 20.88 176.29 18.84 173.25 18.84C171.77 18.84 170.51 19.28 169.47 20.16C168.47 21 167.97 22.2 167.97 23.76V44.76H160.71Z"
            fill="black"
          />
          <path
            d="M201.284 44.76C198.764 44.76 196.944 44.2 195.824 43.08C194.704 41.96 194.144 40.18 194.144 37.74V19.26H190.004V13.44H192.164C193.204 13.44 193.904 13.2 194.264 12.72C194.664 12.24 194.864 11.48 194.864 10.44V4.92H201.404V13.44H207.044V19.26H201.404V38.94H206.564V44.76H201.284Z"
            fill="black"
          />
          <path
            d="M216.283 8.52C214.763 8.52 213.663 8.2 212.983 7.56C212.303 6.88 211.963 5.98 211.963 4.86V3.66C211.963 2.54 212.303 1.66 212.983 1.02C213.663 0.34 214.763 0 216.283 0C217.803 0 218.903 0.34 219.583 1.02C220.263 1.66 220.603 2.54 220.603 3.66V4.86C220.603 5.98 220.263 6.88 219.583 7.56C218.903 8.2 217.803 8.52 216.283 8.52ZM212.683 13.44H219.943V44.76H212.683V13.44Z"
            fill="black"
          />
          <path
            d="M238.9 45.48C234.66 45.48 231.42 44.16 229.18 41.52C226.98 38.88 225.88 34.74 225.88 29.1C225.88 23.46 226.98 19.32 229.18 16.68C231.42 14.04 234.66 12.72 238.9 12.72C241.98 12.72 244.42 13.42 246.22 14.82C248.06 16.22 249.38 18.14 250.18 20.58L244.24 23.22C243.92 21.7 243.34 20.56 242.5 19.8C241.7 19 240.5 18.6 238.9 18.6C235.3 18.6 233.5 20.76 233.5 25.08V33.12C233.5 37.44 235.3 39.6 238.9 39.6C240.58 39.6 241.86 39.2 242.74 38.4C243.62 37.6 244.28 36.36 244.72 34.68L250.36 37.38C248.52 42.78 244.7 45.48 238.9 45.48Z"
            fill="black"
          />
          <path d="M0 11.7601H8V44.7601H0V11.7601Z" fill="#2971C7" />
          <path
            d="M12 11.7601C16.4183 11.7601 20 15.3418 20 19.7601V33.7601C15.5817 33.7601 12 30.1784 12 25.7601V11.7601Z"
            fill="#2971C7"
          />
          <path
            d="M24 33.9845C28.3299 33.9845 31.84 30.4744 31.84 26.1445V11.9845C27.5101 11.9845 24 15.4946 24 19.8245V33.9845Z"
            fill="#2971C7"
          />
          <path d="M36 11.76H44V44.76H36V11.76Z" fill="#2971C7" />
        </svg>

        <style jsx>{`
          span {
            padding: 0.5rem 0.5rem 0.5rem 0;
            mask-image: linear-gradient(
              60deg,
              #bba0ff 25%,
              rgba(187, 160, 255, 0.2) 50%,
              #bba0ff 75%
            );
            mask-size: 400%;
            mask-position: 0%;
          }
          span:hover {
            mask-position: 100%;
            transition:
              mask-position 1s ease,
              -webkit-mask-position 1s ease;
          }
        `}</style>
      </span>
    );
  },
  project: {
    link: "https://www.linkedin.com/company/momentic-ai",
    icon: <LinkedInIcon />,
  },
  chat: {
    link: "https://momentic.ai/discord",
    icon: <DiscordIcon />,
  },
  nextThemes: {
    defaultTheme: "light",
    forcedTheme: "light",
  },
  docsRepositoryBase: "https://github.com/momentic-ai/website/blob/main",
  footer: {
    text: (
      <div className="flex md:justify-between md:flex-row flex-col items-center flex-1 flex-wrap gap-2 text-sm">
        <div className="text-primary/80">
          Copyright © {new Date().getFullYear()} Momentic, Inc. All rights
          reserved.
        </div>

        <div className="md:order-last flex flex-col lg:flex-row gap-y-1 gap-x-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end">
            {footerLegalNav.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className="inline rounded-none leading-6 text-primary/80 hover:text-primary whitespace-nowrap"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  navbar: {
    extraContent: <TwitterXIcon />,
  },
  head: () => {
    const { asPath, pathname } = useRouter();
    const { frontMatter } = useConfig();

    const title = String(frontMatter.title || ogConfig.title);
    const description = String(frontMatter.description || ogConfig.description);
    const note =
      (frontMatter.date as string | undefined) ?? pathname === "/"
        ? "momentic.ai"
        : pathname;
    const canonical = new URL(asPath, "https://momentic.ai").toString();

    const ogUrl = frontMatter.ogImage
      ? `https://momentic.ai${frontMatter.ogImage}`
      : pathname === "/"
        ? `https://momentic.ai/default-og.png`
        : `https://momentic.ai/api/og?title=${title}&description=${description}&note=${note}`;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="twitter:site" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:creator" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content={ogUrl} />

        <link rel="icon" href="/favicon.png" type="image/png" />

        <meta name="apple-mobile-web-app-title" content={title} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </>
    );
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  search: {
    placeholder: "Search...",
  },
  toc: {
    float: true,
    backToTop: true,
  },
  darkMode: false,
  components: {
    Frame,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    return {
      titleTemplate:
        asPath === "/"
          ? ogConfig.title
          : asPath.startsWith("/blog/")
            ? "%s | Momentic Blog"
            : asPath.startsWith("/docs/")
              ? "%s | Momentic Docs"
              : asPath.startsWith("/changelog/")
                ? "%s | Momentic Changelog"
                : "%s | Momentic",
    };
  },
  primaryHue: 216,
  primarySaturation: 66,
};

// eslint-disable-next-line import/no-default-export
export default config;
