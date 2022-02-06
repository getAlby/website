import Logo from "../../public/images/logo.svg";
import BannerIllustration from "../../public/images/banner-illustration.png";
import TelegramLogo from "../../public/images/telegram.png";
import TwitterLogo from "../../public/images/twitter.png";
import GitHubLogo from "../../public/images/github.png";
import DoItHint from "../../public/images/do-it-hint.png";
import InstallExtensionButton from "../components/InstallExtensionButton";
import Navigation from "../components/Navigation";

export const meta = () => {
  return {
    title: "Alby — Lightning buzz for your Browser!",
    description: "Alby brings Bitcoin to the web with in-browser payments and identity",
    "og:url": "https://getalby.com",
    "og:title": "Alby",
    "og:site_name": "Alby",
    "og:image": Logo,
    "twitter:site": "@getalby",
    "twitter:creator": "@getalby",
  };
};

export default function index() {
  return (
    <>
      <div className=" bg-albyYellow-300 min-h-screen grid place-items-center relative">
        <div className="w-[93.194%] mx-auto ">
          <Navigation />
          <div className="xl:mt-20 mt-22 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-secondary">
            <div className="xl:max-w-[39rem] lg:w-1/2 text-albyColdGray-800 text-center lg:text-left">
              <h1 className="mb-4 lg:mb-0 xl:text-[4rem] xl:leading-[110%] text-black md:text-4xl text-3xl font-black">
                Lightning buzz for your Browser
              </h1>
              <p className="lg:text-2xl text-xl font-normal">
                Alby brings Bitcoin to the web with in-browser payments and
                identity, no account required.
              </p>
              <ul className="bullet-lists pt-4 text-xl text-left">
                <li className="nav-item pl-4">
                  Instant payments to your favourite publishers and service
                  providers
                </li>
                <li className="nav-item pl-4">
                  No need to remember a username or password for these websites
                </li>
                <li className="nav-item pl-4">
                  Direct interactions between you and the receiver, no need to
                  worry about third party trackers
                </li>
              </ul>

              <InstallExtensionButton />

              <div className=" mt-6">
                <img
                  src={DoItHint}
                  alt=""
                  className="block relative mx-auto lg:mx-0 left-[17%]"
                />
              </div>
            </div>
            <div className="pt-10 lg:pt-0 basis-1/2">
              <img
                src={BannerIllustration}
                alt="Alby screenshot"
                className="pt-0 lg:pt-[17%] aspect-[auto_710/760] mx-auto min-w-[19rem] max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-end bg-albyYellow-300 py-14 lg:py-32 font-secondary">
        <h3 className="w-11/12 text-center md:w-full font-bold text-2xl md:text-5xl mx-auto">
          Do you have feedback or need help?
        </h3>
        <div className="md:w-[52.84%] w-11/12 mx-auto pt-8 text-center">
          <p className=" font-normal text-lg md:text-2xl leading-[2.25rem] text-albyColdGray-800">
            Alby is open-source and currently in alpha stage. Our goal is to
            create the best online experience to consume and reward content and
            services online. We love to hear from you. File a{" "}
            <a
              href="https://github.com/getAlby/lightning-browser-extension/issues"
              className="underline"
            >
              Github issue
            </a>{" "}
            or join the{" "}
            <a href="https://t.me/getAlby" className="underline">
              Telegram channel
            </a>
            .
          </p>
          <iframe src="https://getalby.substack.com/embed" width="100%" height="320" className="" frameBorder="0" scrolling="no"></iframe>
          <div className="flex items-end gap-5 justify-center pt-10">
            <a
              href="https://twitter.com/getalby"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TwitterLogo}
                alt="Twitter"
                className="mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
              />
            </a>
            <a href="https://t.me/getAlby" target="_blank" rel="noreferrer">
              <img
                src={TelegramLogo}
                alt="Telegram"
                className="mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
              />
            </a>
            <a
              href="https://github.com/getAlby"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GitHubLogo}
                alt="GitHub"
                className="mb-4 w-[39px] h-[35px] lg:w-[52.67px] lg:h-[48px]"
              />
            </a>
          </div>

          <a
            href="/privacy-policy"
            className="text-center lg:text-2xl text-base underline pt-5"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}
