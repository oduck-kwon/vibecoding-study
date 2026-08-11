import IntroView from "./IntroView";
import type { IntroPageProps } from "./types";
import styles from "../../styles/variations/design3.module.css";

/** Variation 3: Vibrant Gradient — 글래스와 네온 액센트의 에너지 있는 화면 */
const Design3: React.FC<IntroPageProps> = (props) => {
  return <IntroView {...props} styles={styles} />;
};

export default Design3;
