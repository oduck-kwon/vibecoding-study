import IntroView from "./IntroView";
import type { IntroPageProps } from "./types";
import styles from "../../styles/variations/source.module.css";

/** Original: 에디토리얼 레터 — 따뜻한 지면에 세리프 타이포 */
const Source: React.FC<IntroPageProps> = (props) => {
  return <IntroView {...props} styles={styles} />;
};

export default Source;
