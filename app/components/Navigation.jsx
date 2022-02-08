import Logo from "../../public/images/logo.svg";
import TelegramLogo from "../../public/images/telegram.png";
import TwitterLogo from "../../public/images/twitter.png";
import GitHubLogo from "../../public/images/github.png";
import InstallExtensionButton from "./InstallExtensionButton";

function Navigation() {
  return (
    <div className="flex justify-center">
      <div className="block md:flex top-0 pt-5 pb-8 lg:pb-0 items-center static md:absolute w-[93.194%] justify-center lg:justify-between max-h-[6.25rem]">
        <div>
          <a href="/">
            <img
              src={Logo}
              alt="Alby"
              className="w-[12.5rem] text-black lg:w-auto lg:h-[3.75rem] h-24 mx-auto md:mx-0"
            />
          </a>
        </div>
        <div className="flex items-end gap-5 justify-center md:justify-between xl:pt-0 pt-3">
          <a
            href="/value4value"
            class="border border-black rounded-full w-32 text-center py-2"
          >
            Learn more
          </a>
          <a
            href="/login"
            class="border border-black rounded-full w-32 text-center py-2"
          >
            Login
          </a>
          <div class="hidden lg:flex items-end gap-5 justify-between">
            <a href="https://t.me/getAlby" target="_blank" rel="noreferrer">
              <img
                src={TelegramLogo}
                alt="Telegram"
                className="w-[1.875rem] h-[1.875rem] mb-4"
              />
            </a>
            <a
              href="https://twitter.com/getalby"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TwitterLogo}
                alt="Twitter"
                className="w-[1.875rem] h-[1.875rem]  mb-4"
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
                className="w-[1.875rem] h-[1.875rem]  mb-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
