import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  defaultShowCopyCode: true,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ["react-tweet", "geist"],
  redirects: async () => {
    return [
      {
        source: "/docs/sdk",
        destination: "/docs/cli",
        permanent: true,
      },
      {
        source: "/chat",
        destination: "https://discord.gg/PhgrpJfmFK",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/PhgrpJfmFK",
        permanent: true,
      },
      {
        source: "/beta",
        destination: "https://discord.gg/PhgrpJfmFK",
        permanent: true,
      },
      {
        source: "/discovery",
        destination: "https://cal.com/wuweiweiwu/momentic-discovery",
        permanent: true,
      },
      {
        source: "/waitlist",
        destination: "https://tally.so/r/nraKxo",
        permanent: true,
      },
    ];
  },
};

// eslint-disable-next-line import/no-default-export
export default withNextra(nextConfig);
