/** 외부 프로필 링크 (GitHub, 이메일 등) */
export interface ProfileLink {
  label: string;
  href: string;
}

/** 카테고리별로 묶인 기술 스택 */
export interface SkillGroup {
  category: string;
  items: string[];
}

/** 소개 페이지에 노출할 작업/프로젝트 */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

/** 소개 페이지 전체에서 공유하는 프로필 모델 */
export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availability: string;
  skills: SkillGroup[];
  projects: Project[];
  links: ProfileLink[];
}

/** 모든 디자인 변주가 동일하게 받는 props */
export interface IntroPageProps {
  profile: Profile;
}

/**
 * CSS Module 클래스 맵.
 * 변주마다 시각만 바꾸고, 클래스 이름은 동일하게 유지합니다.
 */
export type IntroStyles = Record<string, string>;
