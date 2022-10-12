import Image from "next/image";

import styles from "./Background.module.css";

import { staticData } from "../../../utils/staticData";

const {
  index: {
    hero: { background: BACKGROUND_DATA },
  },
} = staticData.components;

const Background = () => {
  return (
    <div className={"heroBackground " + styles.container}>
      <div className={styles.coinFlip}>
        <Image
          src={BACKGROUND_DATA.images.coinFLip.src}
          alt={BACKGROUND_DATA.images.coinFLip.alt}
        />
      </div>
      <div className={styles.coinFlipV2}>
        <Image
          src={BACKGROUND_DATA.images.coinFLipV2.src}
          alt={BACKGROUND_DATA.images.coinFLipV2.alt}
        />
      </div>
      <div className={styles.polygon}>
        <Image
          src={BACKGROUND_DATA.images.polygon.src}
          alt={BACKGROUND_DATA.images.polygon.alt}
        />
      </div>
    </div>
  );
};
0;
export default Background;
