import { useState, useEffect } from "react";
import UAParser from "ua-parser-js";

import { staticData } from "../utils/staticData";
const { useInstallExtension: HOOK_DATA } = staticData.hooks;

const useInstallExtension = () => {
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    var parser = new UAParser();
    setBrowser(parser.getBrowser().name);
  }, []);

  return {
    browser,
    icon: HOOK_DATA.icons[browser]?.src,
    link: HOOK_DATA.installLinks[browser],
    defaultLink: HOOK_DATA.defaultLink,
    loading: browser === "",
  };
};

export default useInstallExtension;
