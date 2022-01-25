import RightBee from "../../public/images/right-bee.svg";
import LeftBee from "../../public/images/left-bee.svg";
import ArrowIcon from "../../public/images/pointer.svg";
import TelegramLogo from "../../public/images/Telegram.svg";
import TwitterLogo from "../../public/images/Twitter.svg";
import GitHubLogo from "../../public/images/GitHub.svg";

function Footer() {
  return (
    <div className="bg-white z-10 ">
      <div className="grid place-items-center hover:cursor-pointer mt-24 py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-50 w-[85.76%] mx-auto">
        <div className="z-10">
          <h2 className="w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative">
            You don’t have a Lightning Address yet?
            <span className="absolute top-1/2 md:top-[82%] right-0 lg:right-1/4">
              {" "}
              <img src={ArrowIcon} />
            </span>
          </h2>
          <button className="bg-albyYellow-300 relative text-albyColdGray-800 text-lg font-medium py-4 px-16 rounded-[1.875rem] mt-4">
            Learn more
          </button>
          <img
            src={RightBee}
            alt="Right Bee"
            className="w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%]"
          />
          <img
            src={LeftBee}
            alt="Left Bee"
            className="w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[92%]"
          />
        </div>
      </div>
      <div className="grid place-items-end bg-albyYellow-300 py-32 mt-32">
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
              <img src={TwitterLogo} alt="Twitter Logo" className="mb-4" />
            </a>
            <a href="https://t.me/getAlby" target="_blank" rel="noreferrer">
              <img src={TelegramLogo} alt="Telegram Logo" className="mb-4" />
            </a>
            <a
              href="https://github.com/getAlby"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHubLogo} alt="GitHub Logo" className="mb-4" />
            </a>
          </div>
          <a
            href="https://getalby.com/privacy-policy"
            className="text-center text-2xl font-primary underline pt-5"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
