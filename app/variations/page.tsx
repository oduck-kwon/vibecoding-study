import Link from "next/link";
import Source from "@/components/variations/source";
import Design1 from "@/components/variations/design1";
import Design2 from "@/components/variations/design2";
import Design3 from "@/components/variations/design3";
import { profile } from "@/lib/profile";
import styles from "./variations.module.css";

const VariationsPage = () => (
  <div className={styles.showcase}>
    <header className={styles.bar}>
      <div>
        <p className={styles.kicker}>Design Variations Comparison</p>
        <h1 className={styles.heading}>소개 페이지 디자인 비교</h1>
      </div>
      <nav className={styles.jump} aria-label="디자인 바로가기">
        <a href="#source">Original</a>
        <a href="#design1">Minimal</a>
        <a href="#design2">Studio</a>
        <a href="#design3">Vivid</a>
        <Link href="/">메인으로</Link>
      </nav>
    </header>

    <section className={styles.block} id="source">
      <div className={styles.caption}>
        <h2>Original Design</h2>
        <p>에디토리얼 레터. 따뜻한 지면과 세리프 타이포로 편지지처럼 읽힙니다.</p>
      </div>
      <div className={styles.frame}>
        <Source profile={profile} />
      </div>
    </section>

    <section className={styles.block} id="design1">
      <div className={styles.caption}>
        <h2>Variation 1: Minimal Modern</h2>
        <p>여백과 헤어라인. 큰 타이포로 이름과 한 줄을 먼저 보여줍니다.</p>
      </div>
      <div className={styles.frame}>
        <Design1 profile={profile} />
      </div>
    </section>

    <section className={styles.block} id="design2">
      <div className={styles.caption}>
        <h2>Variation 2: Dark Professional · 추천</h2>
        <p>미드나잇 스튜디오. 바이브 코딩의 늦은 밤 작업 분위기에 맞춘 기본 디자인입니다.</p>
      </div>
      <div className={styles.frame}>
        <Design2 profile={profile} />
      </div>
    </section>

    <section className={styles.block} id="design3">
      <div className={styles.caption}>
        <h2>Variation 3: Vibrant Gradient</h2>
        <p>글래스와 네온 액센트. 에너지 있게 첫인상을 남기고 싶을 때 씁니다.</p>
      </div>
      <div className={styles.frame}>
        <Design3 profile={profile} />
      </div>
    </section>
  </div>
);

export default VariationsPage;
