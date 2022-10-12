import { Title } from "@mantine/core";

import styles from "./TitleBanner.module.css";

interface TitleBannerProps {
  title: string;
  subtitle: string;
}

const TitleBanner = ({ title, subtitle }: TitleBannerProps) => {
  return (
    <div className={styles.container}>
      <Title order={2} align="center">
        {title}
      </Title>
      <Title order={4} align="center" className={styles.subtitle}>
        {subtitle}
      </Title>
    </div>
  );
};

export default TitleBanner;
