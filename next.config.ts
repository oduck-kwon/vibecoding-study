import type { NextConfig } from "next";

// GitHub Pages(프로젝트 사이트)로 올릴 때만 정적보내기와 basePath를 켭니다.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/vibecoding-study",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
