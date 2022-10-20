import Image from "next/image";
import { Button, Title, Text } from "@mantine/core";

import styles from "./OpensourceMeetBanner.module.css";

import { staticData } from "../../../utils/staticData";
const { opensourceMeetBanner: COMPONENT_DATA } = staticData.components.index;

const OpensourceMeetBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Button
          variant="outline"
          component="a"
          href={COMPONENT_DATA.button.redirectTo}
          className={styles.button}
        >
          {COMPONENT_DATA.button.text}
        </Button>
        <Title order={1} weight={900}>
          {COMPONENT_DATA.title}
        </Title>
        <Text> {COMPONENT_DATA.description}</Text>
      </div>
      <div className={styles.rightSection}>
        <Image
          src={COMPONENT_DATA.coverImage.src}
          alt={COMPONENT_DATA.coverImage.alt}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default OpensourceMeetBanner;
