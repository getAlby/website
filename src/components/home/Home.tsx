import type { NextComponentType } from "next";

import styles from "./Home.module.css";

import { staticData } from "../../utils/staticData";
const { home: COMPONENT_DATA } = staticData.pages.components;

const Home: NextComponentType = () => {
  return <h1 className={styles.heading}>{COMPONENT_DATA.title}</h1>;
};

export default Home;
