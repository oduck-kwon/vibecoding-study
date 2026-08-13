import type { Metadata } from "next";
import Link from "next/link";
import { privacyPolicy } from "@/lib/privacy";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 오덕",
  description:
    "오덕(oduck) 소개 사이트의 개인정보 처리와 Google AdSense 광고·쿠키 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          oduck
        </Link>
        <Link className={styles.back} href="/">
          소개로 돌아가기
        </Link>
      </header>

      <main className={styles.main}>
        <p className={styles.kicker}>Legal</p>
        <h1 className={styles.title}>{privacyPolicy.title}</h1>
        <p className={styles.updated}>최종 업데이트: {privacyPolicy.updatedAt}</p>
        <p className={styles.intro}>{privacyPolicy.intro}</p>

        {privacyPolicy.sections.map((section) => (
          <section className={styles.section} key={section.heading}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p className={styles.text} key={paragraph.slice(0, 32)}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </main>

      <footer className={styles.footer}>
        <Link className={styles.back} href="/">
          홈으로
        </Link>
        <Link className={styles.back} href="/#guide">
          가이드 읽기
        </Link>
      </footer>
    </div>
  );
}
