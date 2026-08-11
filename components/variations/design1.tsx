import IntroView from "./IntroView";
import type { IntroPageProps } from "./types";
import styles from "../../styles/variations/design1.module.css";

/** Variation 1: Minimal Modern — 여백과 헤어라인 중심의 스위스 스타일 */
const Design1: React.FC<IntroPageProps> = (props) => {
  return <IntroView {...props} styles={styles} />;
};

export default Design1;
