/**
 * AdSense 심사 대응용 정보성 가이드 콘텐츠.
 * 본문만 합쳐 2,000자 이상을 목표로 작성했습니다.
 */
export interface GuideStep {
  title: string;
  before: string;
  after: string;
  body: string;
}

export interface GuideMistake {
  title: string;
  problem: string;
  fix: string;
}

export interface GuideContent {
  title: string;
  lead: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
  }[];
  steps: GuideStep[];
  mistakes: GuideMistake[];
  tools: {
    name: string;
    reason: string;
  }[];
  checklist: string[];
  closing: string;
}

export const guide: GuideContent = {
  title: "바이브 코딩으로 프론트엔드 초안을 만드는 실전 가이드",
  lead:
    "완벽한 설계를 기다리기보다, 아이디어를 먼저 화면에 올려 검증하는 편이 빠를 때가 많습니다. 이 글은 프론트엔드 개인 개발자와 사이드 프로젝트 기준으로, 바이브 코딩을 어떻게 실무처럼 쓰는지 단계별로 정리합니다.",
  sections: [
    {
      id: "what",
      heading: "바이브 코딩이란 무엇인가",
      paragraphs: [
        "바이브 코딩은 AI와 함께 ‘의도’와 ‘감각’을 먼저 동작하는 화면으로 옮기고, 이후에 구조와 품질을 다듬는 작업 방식입니다. 문서로만 합의하거나, 처음부터 완성도만 집착하는 방식과 다릅니다. 초안이 보여야 피드백이 생기고, 피드백이 있어야 다음 결정이 분명해집니다.",
        "중요한 점은 AI가 코드를 대신 짜 주는 것 자체가 목표가 아니라는 사실입니다. AI는 초안 속도를 높이는 도구이고, 무엇을 만들지·어디까지 만들지·무엇이 읽히는지 판단하는 일은 여전히 사람의 몫입니다. 이 관점을 잃으면 생성 코드만 쌓이고 제품은 앞으로 나가지 않습니다.",
      ],
    },
    {
      id: "why-frontend",
      heading: "왜 프론트엔드에 특히 잘 맞나",
      paragraphs: [
        "프론트엔드는 결과가 눈에 바로 보입니다. 버튼 하나, 여백 하나, 문장 한 줄이 바뀌어도 사용자가 느끼는 차이가 큽니다. 그래서 실험 비용이 낮고, “이게 맞는지”를 말로 설명하기보다 화면을 눌러보며 확인할 수 있습니다.",
        "소개 페이지, 메모 도구, 할 일 보드처럼 범위가 작은 제품일수록 이 장점이 커집니다. 백엔드·인프라를 먼저 크게 짓기보다, 사람이 실제로 마주할 첫 화면부터 완성도를 올리는 편이 학습과 배포 모두에 유리합니다.",
      ],
    },
  ],
  steps: [
    {
      title: "1. 한 문장으로 목적을 정의한다",
      before: "멋진 포트폴리오 사이트를 만든다",
      after: "방문자가 30초 안에 내가 무엇을 만드는지 이해하게 한다",
      body: "누가 / 무엇을 / 왜를 한 문장으로 적습니다. 문장이 길거나 모호하면 화면 범위도 같이 흔들립니다. 목적 문장은 이후 모든 섹션을 잘라내는 기준이 됩니다.",
    },
    {
      title: "2. 첫 화면 범위를 과감하게 줄인다",
      before: "소개, 경력, 블로그, 갤러리, 문의 폼을 한 번에",
      after: "브랜드, 한 줄 소개, 짧은 설명, CTA만",
      body: "첫 뷰포트에 넣을 요소를 최소로 둡니다. 통계 카드, 일정, 배지, 여러 홍보 문구를 동시에 넣으면 시선이 분산됩니다. 초안 단계에서는 ‘한 가지 메시지’가 더 중요합니다.",
    },
    {
      title: "3. 동작하는 초안을 먼저 만든다",
      before: "컴포넌트 설계와 폴더 구조부터 완벽히",
      after: "더미 데이터로라도 클릭·복사·이동이 되는 화면",
      body: "완벽한 아키텍처보다 상호작용이 있는 초안이 우선입니다. 이메일 복사, 앵커 이동, 작업 목록 렌더링처럼 작은 동작만 있어도 ‘제품처럼’ 느껴집니다. 구조 정리는 초안이 읽힌 뒤에 해도 늦지 않습니다.",
    },
    {
      title: "4. 읽기 품질을 다듬는다",
      before: "색과 효과부터 화려하게",
      after: "제목 계층, 행간, 여백, 대비를 먼저",
      body: "타이포와 여백이 정리되면 같은 문구도 신뢰감이 달라집니다. 폰트 크기 단계, 본문 줄간격, 섹션 간 호흡을 먼저 맞추고 장식은 나중에 더합니다. 모바일에서 한 줄이 너무 길지 않은지도 같이 확인합니다.",
    },
    {
      title: "5. 구조를 정리하고 배포한다",
      before: "로컬에서만 확인하고 미룸",
      after: "공개 URL로 공유 가능한 상태까지",
      body: "초안이 안정되면 컴포넌트 분리, 접근성, 메타데이터, 배포를 진행합니다. 배포된 주소가 있어야 피드백이 현실적으로 들어옵니다. ‘거의 다 됐는데 안 올린’ 상태가 가장 오래 가는 병목입니다.",
    },
  ],
  mistakes: [
    {
      title: "기능을 너무 일찍 늘린다",
      problem:
        "첫 화면에 일정, 통계, 프로모션, 여러 CTA를 동시에 넣어 메시지가 흐려집니다.",
      fix: "핵심 한 문장과 관련된 요소만 남기고, 나머지는 다음 반복으로 미룹니다.",
    },
    {
      title: "AI 생성 코드를 검증 없이 붙인다",
      problem:
        "비슷한 스타일과 중복 컴포넌트가 쌓여 수정 비용이 커지고, 접근성·의미 구조가 깨집니다.",
      fix: "생성 결과는 ‘초안 재료’로만 보고, 클래스·마크업·상호작용을 직접 한 번 읽으며 정리합니다.",
    },
    {
      title: "디자인 규칙 없이 색과 간격을 섞는다",
      problem:
        "페이지마다 여백·둥글기·강조색이 달라져 하나의 제품처럼 보이지 않습니다.",
      fix: "배경·본문·보조·강조 색 네 개와 간격 스케일만 먼저 정하고, 예외는 최소화합니다.",
    },
  ],
  tools: [
    {
      name: "TypeScript",
      reason: "의도를 타입으로 남겨, 초안이 커져도 수정 지점을 빠르게 찾게 합니다.",
    },
    {
      name: "Next.js",
      reason: "페이지 구성과 배포 흐름을 단순하게 유지해, 실험 결과를 공개하기 쉽습니다.",
    },
    {
      name: "Tailwind CSS / CSS Modules",
      reason: "시각 실험을 빠르게 반복하면서도, 변주별 스타일을 분리해 관리할 수 있습니다.",
    },
  ],
  checklist: [
    "한 문장 목적이 적혀 있는가",
    "첫 화면에 요소가 과하지 않은가",
    "모바일에서도 본문이 읽히는가",
    "소개·작업·연락 경로가 분명한가",
    "배포 URL로 다른 사람이 열어볼 수 있는가",
  ],
  closing:
    "바이브 코딩의 핵심은 속도만이 아닙니다. 보이는 초안으로 판단을 앞당기고, 읽히는 화면으로 신뢰를 만드는 일입니다. 오늘은 범위를 줄인 첫 화면 하나만 완성해 보세요. 그 한 화면이 다음 결정의 가장 정확한 설계 문서가 됩니다.",
};

/** 본문 텍스트 길이 확인용 (공백 포함 문자 수) */
export function countGuideCharacters(content: GuideContent = guide): number {
  const parts = [
    content.title,
    content.lead,
    ...content.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
    ]),
    ...content.steps.flatMap((step) => [
      step.title,
      step.before,
      step.after,
      step.body,
    ]),
    ...content.mistakes.flatMap((item) => [
      item.title,
      item.problem,
      item.fix,
    ]),
    ...content.tools.flatMap((tool) => [tool.name, tool.reason]),
    ...content.checklist,
    content.closing,
  ];

  return parts.join("").length;
}
