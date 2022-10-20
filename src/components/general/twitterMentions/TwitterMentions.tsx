import React from "react";
import { LoadingOverlay, Title } from "@mantine/core";
import { Tweet } from "react-twitter-widgets";

import styles from "./TwitterMentions.module.css";

import { staticData } from "../../../utils/staticData";
const { twitterMentions: COMPONENT_DATA } = staticData.components;

const TwitterMentions = () => {
  const [loading, setLoading] = React.useState(
    COMPONENT_DATA.tweets.reduce((acc, tweets) => (acc += tweets.length), 0)
  );

  return (
    <div className={styles.container}>
      <Title color="white" order={2}>
        {COMPONENT_DATA.title}
      </Title>

      <div className={styles.tweetsWrapper}>
        <LoadingOverlay
          loaderProps={{ variant: "bars", color: "#FBC02D" }}
          visible={loading !== 0}
          overlayOpacity={0}
        />

        <div className={styles.tweets}>
          {COMPONENT_DATA.tweets.map((tweets, index) => (
            <div key={index} className={styles.tweetsColumn}>
              {tweets.map((tweet, index) => (
                <Tweet
                  key={index}
                  tweetId={tweet}
                  options={{
                    theme: "dark",
                  }}
                  onLoad={() => setLoading((prev) => prev - 1)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwitterMentions;
