import Footer from '~/components/Footer';
import Logo from '../../public/images/logo.png';
import BannerIllustration from '../../public/images/banner-illustration.png';
import TelegramLogo from '../../public/images/telegram.png';
import TwitterLogo from '../../public/images/twitter.png';
import GitHubLogo from '../../public/images/github.png';
import CallToActionLogo from '../../public/images/call-to-action.svg';
import DoItHint from '../../public/images/do-it-hint.png';

export default function index() {
  return (
    <>
      <div className=" bg-albyYellow-300 min-h-screen grid place-items-center relative">
        <div className="w-[93.194%] mx-auto ">
          <div className="flex top-0 pt-5 items-center absolute w-[93.194%] justify-between max-h-[6.25rem]">
            <div>
              <img
                src={Logo}
                alt="Logo"
                className="w-auto lg:h-[3.75rem] h-[2.75rem]"
              />
            </div>
            <div className="flex items-end gap-5 justify-between">
              <img
                src={TelegramLogo}
                alt="Telegram Logo"
                className=" lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem] mb-4"
              />
              <img
                src={TwitterLogo}
                alt="Twitter Logo"
                className="lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4"
              />
              <img
                src={GitHubLogo}
                alt="GitHub Logo"
                className="lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4"
              />
              <button className="bg-white text-black border-[3px] border-solid border-[#333333] font-secondary hidden lg:inline-block text-lg lg:leading-[1.875rem] font-semibold py-2 px-5 rounded-full">
                Add To Chrome
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-secondary">
            <div className="xl:max-w-[39rem] lg:w-1/2 text-albyColdGray-800 text-center lg:text-left lg:pt-40">
              <h1 className="xl:text-[4rem] xl:leading-[110%] text-white md:text-4xl text-3xl font-black">
                Lightning buzz for your Browser
              </h1>
              <p className="lg:text-2xl text-xl font-normal">
                Alby brings Bitcoin to the web with in-browser payments and
                identity, no account required.
              </p>
              <ul className="bullet-lists pt-4 text-xl">
                <li className="nav-item pl-4">
                 Instant payments to your favourite publishers and service providers

                </li>
                <li className="nav-item pl-4">
                  No need to remember a username or password for these websites
                </li>
                <li className="nav-item pl-4">
                  Direct interactions between you and the receiver, no need to worry about third party trackers
                </li>
              </ul>
              <img
                src={CallToActionLogo}
                alt="Call to Action"
                className=" pt-5 hidden lg:block"
							/>
							<div className=" mt-6">
								<img src={DoItHint} alt="Do It Hint" className="hidden lg:block relative left-[17%]" />
							</div>
            </div>
            <div className="pt-10 lg:pt-0 basis-1/2">
              <img
                src={BannerIllustration}
                alt="Header Illustration"
                className="pt-[17%] aspect-[auto_710/760] mx-auto min-w-[19rem] max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
