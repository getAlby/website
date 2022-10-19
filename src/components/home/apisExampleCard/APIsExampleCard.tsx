import Image from "next/image";
import { Text, Title, List, Button } from "@mantine/core";

import styles from "./APIsExampleCard.module.css";

import { staticData } from "../../../utils/staticData";
const { apisExampleCard: COMPONENT_DATA } = staticData.components.index;
const { general: GENERAL_DATA } = staticData;

const APIsExampleCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Text color="var(--cyan---default)" weight={700}>
          {COMPONENT_DATA.subtitle}
        </Text>
        <Title order={3} color="white" weight={600}>
          {COMPONENT_DATA.title}
        </Title>
        <List
          style={{
            color: "white",
          }}
        >
          {COMPONENT_DATA.benefits.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
        <div>
          <Button
            component="a"
            href={COMPONENT_DATA.buttonRedirectTo}
            color="cyan.1"
            style={{
              color: "black",
            }}
          >
            {GENERAL_DATA.content.learnMore}
          </Button>
        </div>
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

export default APIsExampleCard;
