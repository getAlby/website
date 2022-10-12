/* This file contains all static data that is used in the application. */

export const staticData = {
  pages: {
    index: {
      // This is an example of data that is used in the index page.
      // The data can be accessed in the page using the following syntax:
      // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
      // const { index: PAGE_DATA } = staticData.pages;
      headers: {
        title: "Alby — Lightning buzz for your Browser!",
        description:
          "Alby brings Bitcoin to the web with in-browser payments and identity.",
      },
      hero: {
        title: "Your Bitcoin Lightning wallet",
        subtitle:
          "Pay seamlessly as consumer, Receive payments directly as creator Integrate wallets as developer",
        button: {
          text: "Install it Now",
          link: "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
        },
      },
    },
    components: {
      home: {
        // This is an example of data that is used in the home component.
        // The data can be accessed in the component using the following syntax:
        // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
        // const { home: COMPONENT_DATA } = staticData.pages.components;
      },
    },
  },
};
