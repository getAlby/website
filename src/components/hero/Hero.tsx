import React from "react";
import { NextPage } from "next";
import { Button } from "@mantine/core";
import { Title } from "@mantine/core";

import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  background?: NextPage<any>;
  buttonText?: string;
  buttonLink?: string;
  buttonOnClick?: () => void;
}

const Hero = ({
  title,
  subtitle,
  background: Background,
  buttonText,
  buttonLink,
  buttonOnClick,
}: HeroProps) => {
  return (
    <div className={styles.container}>
      {/* Background will be a component that renders 
      various elements depending on page and screen size */}
      {Background && <Background />}
      <Title order={1} className={styles.title}>
        {title}
      </Title>
      <Title order={4} className={styles.subtitle}>
        {subtitle}
      </Title>
      {buttonText && buttonLink && (
        <Button
          component="a"
          href={buttonLink}
          size="md"
          uppercase
          style={{
            color: "black",
          }}
        >
          {buttonText}
        </Button>
      )}
      {buttonText && buttonOnClick && (
        <Button
          onClick={buttonOnClick}
          size="md"
          uppercase
          style={{
            color: "black",
          }}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default Hero;
