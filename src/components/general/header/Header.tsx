import React from "react";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import { Text, Burger, Button } from "@mantine/core";

import styles from "./Header.module.css";

import { staticData } from "../../../utils/staticData";
const { header: COMPONENT_DATA } = staticData.components;

const HeaderAction = () => {
  const [opened, setOpened] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Burger
          opened={opened}
          onClick={() => setOpened(!opened)}
          className={styles.burger}
          size="sm"
          color="white"
          onBlur={() => setOpened(false)}
        />
        <div className={styles.logo}>
          <Image
            src={COMPONENT_DATA.logo.src}
            alt={COMPONENT_DATA.logo.alt}
            layout="intrinsic"
          />
        </div>
      </div>
      <div className={styles.links + (opened ? " " + styles.visible : "")}>
        {COMPONENT_DATA.links.map((link, index) => (
          <NextLink href={link.href} key={index}>
            <Text color="white">{link.text}</Text>
          </NextLink>
        ))}
      </div>
      <Button variant="outline" className={styles.button}>
        {COMPONENT_DATA.headerAction.label}
      </Button>
    </div>
  );
};

export default HeaderAction;
