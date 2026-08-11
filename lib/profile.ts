import type { Profile } from "@/components/variations/types";

/**
 * 소개 페이지에 쓰이는 프로필 데이터입니다.
 * 이름, 소개, 링크, 작업만 바꾸면 네 가지 디자인에 모두 반영됩니다.
 */
export const profile: Profile = {
  name: "오덕",
  nameEn: "oduck",
  role: "프론트엔드 개발자",
  tagline: "아이디어와 코드 사이를 빠르게 잇습니다.",
  bio: "바이브 코딩으로 제품을 만들고, 사람이 쓰기 편한 화면을 다듬습니다. 복잡한 흐름을 작은 인터페이스로 풀어내는 일을 좋아하며, 동작하는 초안을 먼저 만든 뒤 감각과 구조를 함께 다듬습니다.",
  location: "서울, 대한민국",
  email: "hello@oduck.dev",
  availability: "새로운 협업을 받고 있습니다",
  skills: [
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Product",
      items: ["UI 설계", "프로토타이핑", "바이브 코딩"],
    },
    {
      category: "Tooling",
      items: ["Node.js", "Supabase", "Git"],
    },
  ],
  projects: [
    {
      title: "Vibe Coding Lab",
      description:
        "아이디어를 바로 화면으로 옮기는 실험 공간. 이 소개 페이지도 여기서 시작했습니다.",
      tags: ["Next.js", "TypeScript", "Design"],
      href: "#top",
    },
    {
      title: "Focus Board",
      description:
        "오늘의 할 일과 집중 시간을 한 화면에 모아, 산만함을 줄이는 개인 도구.",
      tags: ["React", "Local-first"],
      href: "#work",
    },
    {
      title: "Quiet Notes",
      description:
        "짧은 메모가 쌓여도 읽기 쉽게 남도록, 타이포와 여백을 중심에 둔 노트 UI.",
      tags: ["UI", "Typography"],
      href: "#work",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/oduck" },
    { label: "이메일", href: "mailto:hello@oduck.dev" },
  ],
};
