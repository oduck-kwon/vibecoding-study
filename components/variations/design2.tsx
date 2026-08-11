import IntroView from "./IntroView";
import type { IntroPageProps } from "./types";
import styles from "../../styles/variations/design2.module.css";

/** Variation 2: Dark Professional — 바이브 코딩 스튜디오에 맞춘 추천안 */
const Design2: React.FC<IntroPageProps> = (props) => {
  return <IntroView {...props} styles={styles} />;
};

export default Design2;
