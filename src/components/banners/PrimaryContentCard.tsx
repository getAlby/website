import Image, { StaticImageData } from "next/image";
import { Text, Title } from "@mantine/core";

import styles from "./PrimaryContentCard.module.css";

interface PrimaryContentCardProps {
  title: string;
  description: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  isReversed?: boolean;
}

const PrimaryContentCard = ({
  title,
  description,
  image,
  isReversed = false,
}: PrimaryContentCardProps) => {
  return (
    <div
      className={styles.container + (isReversed ? " " + styles.reversed : "")}
    >
      <div className={styles.imageContainer}>
        <Image src={image.src} alt={image.alt} layout="intrinsic" />
      </div>
      <div className={styles.content}>
        <Title order={2}>{title}</Title>
        <Text size="lg">{description}</Text>
      </div>
    </div>
  );
};

export default PrimaryContentCard;
