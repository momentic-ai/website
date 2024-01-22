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
    ];
  },
};

// eslint-disable-next-line import/no-default-export
export default withNextra(nextConfig);
