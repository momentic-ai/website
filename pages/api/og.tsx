import Logo from "@/components/logo";
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-default-export
export default async function handler(request: NextRequest) {
  const [SpaceGrotesk, SpaceGroteskBold] = await Promise.all([
    fetch(
      String(new URL("../../public/SpaceGrotesk-Medium.ttf", import.meta.url)),
    ).then((res) => res.arrayBuffer()),
    fetch(
      String(new URL("../../public/SpaceGrotesk-Bold.ttf", import.meta.url)),
    ).then((res) => res.arrayBuffer()),
  ]);

  const { searchParams } = new URL(request.url);

  const title = searchParams.has("title")
    ? searchParams.get("title")!.slice(0, 100)
    : "";

  return new ImageResponse(<OgImage title={title} />, {
    width: 800,
    height: 400,
    fonts: [
      {
        name: "Space Grotesk",
        data: SpaceGrotesk,
        weight: 500,
        style: "normal",
      },
      {
        name: "Space Grotesk Bold",
        data: SpaceGroteskBold,
        weight: 700,
        style: "normal",
      },
    ],
  });
}

function OgImage({ title }: { title: string }) {
  return (
    <div
      tw="h-full w-full flex flex-col items-center justify-center bg-[#fff9ec] text-black text-center"
      style={{
        fontFamily: "Space Grotesk",
      }}
    >
      <Logo height={100} />

      {title && (
        <span
          tw="text-5xl font-bold mt-[40px]"
          style={{ fontFamily: "Space Grotesk Bold" }}
        >
          {title}
        </span>
      )}
    </div>
  );
}
