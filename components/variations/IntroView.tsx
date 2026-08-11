"use client";

import Link from "next/link";
import { useIntroActions } from "./useIntroActions";
import type { IntroPageProps, IntroStyles } from "./types";

interface IntroViewProps extends IntroPageProps {
  styles: IntroStyles;
}

/**
 * 소개 페이지의 공통 마크업입니다.
 * 변주는 styles만 교체하고, 구조와 동작은 그대로 둡니다.
 */
export default function IntroView({ profile, styles }: IntroViewProps) {
  const { copied, copyEmail, year } = useIntroActions(profile.email);

  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <a className={styles.logo} href="#top">
          {profile.nameEn}
        </a>
        <nav className={styles.nav} aria-label="페이지 섹션">
          <a className={styles.navLink} href="#about">
            소개
          </a>
          <a className={styles.navLink} href="#work">
            작업
          </a>
          <a className={styles.navLink} href="#contact">
            연락
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="intro-name">
          <p className={styles.kicker}>{profile.role}</p>
          <h1 className={styles.title} id="intro-name">
            {profile.name}
          </h1>
          <p className={styles.titleEn}>{profile.nameEn}</p>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.status}>{profile.availability}</p>
        </section>

        <section className={styles.section} id="about" aria-labelledby="about-heading">
          <h2 className={styles.sectionLabel} id="about-heading">
            소개
          </h2>
          <p className={styles.bio}>{profile.bio}</p>
          <div className={styles.meta}>
            <p className={styles.metaItem}>{profile.location}</p>
            <p className={styles.metaItem}>{profile.role}</p>
          </div>
          <div className={styles.skillGroups}>
            {profile.skills.map((group) => (
              <div className={styles.skillGroup} key={group.category}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <ul className={styles.skillList}>
                  {group.items.map((item) => (
                    <li className={styles.skill} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="work" aria-labelledby="work-heading">
          <h2 className={styles.sectionLabel} id="work-heading">
            작업
          </h2>
          <ul className={styles.workList}>
            {profile.projects.map((project) => (
              <li className={styles.workItem} key={project.title}>
                <a className={styles.workTitle} href={project.href}>
                  {project.title}
                </a>
                <p className={styles.workDesc}>{project.description}</p>
                <ul className={styles.workTags}>
                  {project.tags.map((tag) => (
                    <li className={styles.workTag} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} id="contact" aria-labelledby="contact-heading">
          <h2 className={styles.sectionLabel} id="contact-heading">
            연락
          </h2>
          <div className={styles.contactBlock}>
            <button
              type="button"
              className={styles.emailButton}
              onClick={copyEmail}
              aria-live="polite"
            >
              {copied ? "이메일을 복사했습니다" : profile.email}
            </button>
            <ul className={styles.links}>
              {profile.links.map((link) => (
                <li key={link.href}>
                  <a
                    className={styles.link}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerNote}>
          © {year} {profile.nameEn}
        </p>
        <Link className={styles.link} href="/variations">
          디자인 비교
        </Link>
      </footer>
    </div>
  );
}
