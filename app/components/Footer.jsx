import RightBee from "../../public/images/right-bee.svg";
import LeftBee from "../../public/images/left-bee.svg";
import ArrowIcon from "../../public/images/pointer.svg";
import TelegramLogo from "../../public/images/Telegram.svg";
import TwitterLogo from "../../public/images/twitter-logo.svg";
import GitHubLogo from "../../public/images/GitHub.svg";

function Footer() {
  return (
    <div className="bg-white z-10 ">
      <div className="grid place-items-center hover:cursor-pointer mt-16 lg:mt-24 py-8 lg:py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-50 w-[91.46%] lg:w-[85.76%] mx-auto">
        <div className="z-10">
          <h2 className="w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative">
            You don’t have a Lightning Address yet?
            <span className="absolute top-1/2 md:top-[82%] right-0 lg:right-[27.5%] hidden lg:inline-block">
              {" "}
              <img src={ArrowIcon} />
            </span>
          </h2>
          <a href="/lightning-address">
            <button className="bg-albyYellow-300 relative text-albyColdGray-800 text-lg font-medium py-3 lg:py-4 px-4 lg:px-16 rounded-[1.875rem] mt-4">
              Learn more
            </button>
          </a>
          <img
            src={RightBee}
            alt=""
            className="w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%] hidden md:block"
          />
          <img
            src={LeftBee}
            alt=""
            className="w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[91%] hidden md:block"
          />
        </div>
      </div>
      <div className="grid place-items-end bg-albyYellow-300 py-14 lg:py-32 mt-16 lg:mt-32">
        <h3 className="w-11/12 text-center md:w-full font-primary font-bold text-2xl md:text-5xl mx-auto">
          Do you have feedback or need help?
        </h3>
        <div className="md:w-[52.84%] w-11/12 mx-auto pt-8 text-center">
          <p className=" font-primary font-normal text-lg md:text-2xl leading-[2.25rem] text-albyColdGray-800">
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
            className="text-center lg:text-2xl text-base font-primary underline pt-5"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
