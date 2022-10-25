import Image from "next/image";
import { NextLink } from "@mantine/next";
import { Title, Text, Tooltip, UnstyledButton } from "@mantine/core";

import styles from "./BitcoinApps.module.css";

import { staticData } from "../../../utils/staticData";
const { bitcoinApps: COMPONENT_DATA } = staticData.components;

const BitcoinApps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title order={2}>{COMPONENT_DATA.title}</Title>
        <Text size="lg">{COMPONENT_DATA.description}</Text>
      </div>
      <div className={styles.apps}>
        <div className={styles.appListWrapper}>
          {COMPONENT_DATA.apps.map((app, index) => (
            <Tooltip
              key={index}
              label={app.name}
              openDelay={400}
              closeDelay={100}
            >
              <NextLink
                href={app.url}
                className={styles.appImage}
                target="_blank"
              >
                <Image
                  src={app.image.src}
                  alt={app.image.alt}
                  layout="intrinsic"
                />
              </NextLink>
            </Tooltip>
          ))}
        </div>
        <div>
          <UnstyledButton component={"a"} href={COMPONENT_DATA.moreApps.link}>
            <Text transform="uppercase" weight={600}>
              {COMPONENT_DATA.moreApps.text}
            </Text>
          </UnstyledButton>
        </div>
      </div>
    </div>
  );
};

export default BitcoinApps;
