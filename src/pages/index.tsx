/* module imports */
import type { NextPage } from "next";
import Head from "next/head";

/* component imports */
import Hero from "./../components/hero";

/* style imports */
import styles from "./index.module.css";

/* util imports */
import { staticData } from "./../utils/staticData";
const { index: PAGE_DATA } = staticData.pages;

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{PAGE_DATA.headers.title}</title>
        <meta name="description" content={PAGE_DATA.headers.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero
          title={PAGE_DATA.hero.title}
          subtitle={PAGE_DATA.hero.subtitle}
          buttonText={PAGE_DATA.hero.button.text}
          buttonLink={PAGE_DATA.hero.button.link}
        />
      </main>
    </div>
  );
};

export default HomePage;
