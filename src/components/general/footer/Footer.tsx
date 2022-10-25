import Image from "next/image";
import { NextLink } from "@mantine/next";
import { Divider, Text, Title, Button } from "@mantine/core";

import useInstallExtension from "../../../hooks/useInstallExtension";

import styles from "./Footer.module.css";

import { staticData } from "../../../utils/staticData";
const { footer: COMPONENT_DATA } = staticData.components;

const Footer = () => {
  const installExtension = useInstallExtension();

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Title order={2} align="center">
          {COMPONENT_DATA.title}
        </Title>
        <Text component="p" align="center">
          {COMPONENT_DATA.description.map((content, index) => (
            <Text
              key={index}
              component={content.type === "link" ? "a" : "span"}
              href={content.type === "link" ? content.href : undefined}
              underline={content.type === "link"}
              size="lg"
            >
              {content.text}{" "}
            </Text>
          ))}
        </Text>
      </div>

      <Divider my="sm" color="black" />
      <div className={styles.bottomSection}>
        <div className={styles.leftSection}>
          <Title order={3} weight={800}>
            {COMPONENT_DATA.subtitle}
          </Title>
          <div>
            <Button
              component="a"
              color="dark"
              size="lg"
              className={styles.button}
              href={installExtension.link || installExtension.defaultLink}
              onClick={
                installExtension.link
                  ? undefined
                  : () => {
                      alert(
                        COMPONENT_DATA.installContent.alert(
                          installExtension.browser
                        )
                      );
                    }
              }
            >
              {COMPONENT_DATA.installContent.text}
            </Button>
          </div>
          <div className={styles.doItHint}>
            <Image
              src={COMPONENT_DATA.installContent.doItHint.src}
              alt={COMPONENT_DATA.installContent.doItHint.alt}
              layout="intrinsic"
            />
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.referenceContainer}>
            <Title order={4} weight={700}>
              {COMPONENT_DATA.references.alby.title}
            </Title>
            <div className={styles.referenceListContainer}>
              {COMPONENT_DATA.references.alby.links.map((link, index) => (
                <NextLink key={index} href={link.href}>
                  {link.text}
                </NextLink>
              ))}
            </div>
          </div>

          <div className={styles.referenceContainer}>
            <Title order={4} weight={700}>
              {COMPONENT_DATA.references.developers.title}
            </Title>
            <div className={styles.referenceListContainer}>
              {COMPONENT_DATA.references.developers.links.map((link, index) => (
                <NextLink key={index} href={link.href}>
                  {link.text}
                </NextLink>
              ))}
            </div>
          </div>

          <div className={styles.referenceContainer}>
            <Title order={4} weight={700}>
              {COMPONENT_DATA.references.stayInTouch.title}
            </Title>
            <div className={styles.socialLinksContainer}>
              {COMPONENT_DATA.references.stayInTouch.links.map(
                (social, index) => (
                  <NextLink
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={social.icon.src} alt={social.icon.alt} />
                  </NextLink>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
