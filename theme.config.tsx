import React from "react";
import { useRouter } from "next/router";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { DiscordIcon } from "@/components/icons/discord-icon";
import { TwitterXIcon } from "@/components/icons/twitter-x-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { Frame } from "@/components/frame";
import Logo from "@/components/logo";
import Link from "next/link";

interface Frontmatter {
  title: string;
  overrideTitle: string;
  description: string;
  ogImage: string;
}

const OG_CONFIG = {
  title: "Momentic | Fast track your web test automation with AI",
  description:
    "Momentic enables developers to deploy AI agents to test web apps end-to-end. No code required - just describe user flows using natural language.",
  author: {
    twitter: "MomenticAI",
  },
};

const FOOTER_LEGAL_NAV = [
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
        <Logo
          style={{
            height: "1.8rem",
          }}
        />

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
            {FOOTER_LEGAL_NAV.map((nav) => (
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath, pathname } = useRouter();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const config = useConfig();
    const frontMatter = config.frontMatter as Frontmatter;
    const pageTitle = config.title;

    const title = String(frontMatter.title || pageTitle || OG_CONFIG.title);
    const description = String(
      frontMatter.description || OG_CONFIG.description,
    );

    const canonical = new URL(asPath, "https://momentic.ai").toString();

    const ogUrl = frontMatter.ogImage
      ? `https://momentic.ai${frontMatter.ogImage}`
      : pathname === "/"
        ? `https://momentic.ai/default-og.png`
        : `https://momentic.ai/api/og?title=${encodeURIComponent(title)}`;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="twitter:site" content={`@${OG_CONFIG.author.twitter}`} />
        <meta name="twitter:creator" content={`@${OG_CONFIG.author.twitter}`} />
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
    const nextraConfig = useConfig();

    const frontMatter = nextraConfig.frontMatter as Frontmatter;

    return {
      titleTemplate:
        asPath === "/"
          ? OG_CONFIG.title
          : asPath.startsWith("/blog")
            ? "%s | Momentic Blog"
            : asPath.startsWith("/docs")
              ? "%s | Momentic Docs"
              : asPath.startsWith("/changelog")
                ? "%s | Momentic Changelog"
                : "%s | Momentic",
      description: frontMatter.description || OG_CONFIG.description,
    };
  },
  primaryHue: 216,
  primarySaturation: 66,
};

export default config;
