import Arrows from "../../public/images/arrows.svg";
import BannerIllustration from "../../public/images/banner-illustration.webp";
import Bee1 from "../../public/images/bee1.svg";
import Bee2 from "../../public/images/bee2.svg";
import Bolt from "../../public/images/bolt.svg";
import ChevronRight from "../../public/images/chevron-right.svg";
import DoItHint from "../../public/images/do-it-hint.png";
import Footer from "~/components/Footer";
import HeadLogo from "../../public/images/alby_icon_head_icon.svg";
import Keys from "../../public/images/keys.png";
import Landing1 from "../../public/images/landing1.webp";
import Landing2 from "../../public/images/landing2.webp";
import Landing3 from "../../public/images/landing3.webp";
import Landing4 from "../../public/images/landing4.webp";
import Navigation from "../components/Navigation";
import Nip05 from "../../public/images/nip05.png";
import Payments from "../../public/images/payments.png";
import Shield from "../../public/images/shield.svg";
import useInstallExtension from "~/hooks/useInstallExtension";

export const meta = () => {
  return {
    title: "Alby — Lightning buzz for your Browser!",
    description:
      "Alby brings Bitcoin to the web with in-browser payments and identity",
    "og:url": "https://getalby.com",
    "og:title": "Alby",
    "og:site_name": "Alby",
    "og:image": HeadLogo,
    "twitter:site": "@getalby",
    "twitter:creator": "@getalby",
  };
};

export default function index() {
  const installExtension = useInstallExtension();
  const getStartedNode =
    installExtension.loading || installExtension.link ? (
      <a
        href={installExtension.link || installExtension.defaultLink}
        className="flex justify-center bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 px-8 rounded-full mt-4 w-48 mx-auto"
      >
        Get started
      </a>
    ) : (
      <a
        href={installExtension.defaultLink}
        onClick={() => {
          alert(
            `We currently do not yet support ${installExtension.browser}. But maybe you can install it from source.`
          );
        }}
        className="flex justify-center bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 px-8 rounded-full mt-4"
      >
        Available for Firefox, Chrome, Opera and others
      </a>
    );

  return (
    <>
      <div
        id="top"
        className="bg-albyYellow-300 min-h-screen grid place-items-center relative"
      >
        <div className="w-full mx-auto ">
          <Navigation />
          <div className="md:px-20 px-0 flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-secondary 2xl:justify-center 2xl:gap-20">
            <div className="px-6 md:px-0 xl:max-w-[39rem] lg:w-1/2 text-albyColdGray-800 text-center lg:text-left">
              <h1 className="mb-4 lg:mb-0 xl:leading-[110%] text-black text-4xl md:text-5xl lg:text-6xl font-black">
                The Bitcoin Lightning App for your Browser
              </h1>
              <p className="lg:text-2xl text-xl font-normal">
                Alby brings Bitcoin payments to the web with in-browser payments
                and identity, all with your own wallet.
              </p>

              {installExtension.loading || installExtension.link ? (
                <a
                  href={installExtension.link || installExtension.defaultLink}
                  className="bg-[#272828] text-white rounded-full px-16 text-center py-3 inline-block mt-6"
                >
                  Install Alby
                </a>
              ) : (
                <a
                  href={installExtension.defaultLink}
                  onClick={() => {
                    alert(
                      `We currently do not yet support ${installExtension.browser}. But maybe you can install it from source.`
                    );
                  }}
                  className="bg-[#272828] text-white rounded-full px-2 text-center py-3 inline-block mt-6"
                >
                  Available for Firefox, Chrome, Opera and others
                </a>
              )}

              <div className=" mt-6">
                <img
                  src={DoItHint}
                  alt=""
                  className="block relative mx-auto lg:mx-0 left-[13%]"
                />
              </div>
            </div>
            <div className="pt-10 lg:pt-0 basis-1/2 2xl:basis-auto">
              <img
                src={BannerIllustration}
                alt="Alby screenshot"
                className="pt-0 lg:pt-[17%] aspect-[auto_710/760] mx-auto min-w-[19rem] 2xl:max-w-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 xl:px-56 py-20 block md:flex justify-center items-center md:space-x-10">
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-3xl font-extrabold text-center">
            Quick & Easy Setup
          </h2>
          <p className="text-xl text-center text-albyColdGray-600">
            Just connect your existing Bitcoin Lightning wallet or create a new
            wallet in a few clicks.
          </p>
          {getStartedNode}
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-2/3 flex justify-end">
          <img src={Landing1} alt="" />
        </div>
      </div>

      <div className="px-4 xl:px-56 py-20 block md:flex justify-center items-center md:space-x-10">
        <div className="hidden md:block w-2/3">
          <img src={Landing2} alt="" />
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-center text-3xl font-extrabold">
            Convenient & Secure
          </h2>
          <p className="text-xl text-center text-albyColdGray-600">
            When a website requests a payment you will be prompted for
            confirmation. No need searching for your credit card, no QR-Code
            scanning or app-switching.
          </p>
          {getStartedNode}
        </div>
        <div className="flex justify-center md:hidden w-full">
          <img src={Landing2} alt="" />
        </div>
      </div>

      <div className="px-4 xl:px-56 py-20 block md:flex justify-center items-center md:space-x-10">
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-center text-3xl font-extrabold">
            Control your Budget
          </h2>
          <p className="text-xl text-center text-albyColdGray-600">
            Set your budget and manage your allowances for each website to
            automate the payment process.
          </p>
          {getStartedNode}
        </div>
        <div className="w-full md:w-2/3 flex justify-center md:justify-end">
          <img src={Landing3} alt="" />
        </div>
      </div>

      <div className="px-4 xl:px-56 py-20 block md:flex justify-center items-center md:space-x-10">
        <div className="hidden md:block w-2/3">
          <img src={Landing4} alt="" />
        </div>
        <div className="w-full md:w-1/3 space-y-10">
          <h2 className="text-center text-3xl font-extrabold">Use Cases</h2>
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold">Content Monetization</h3>
            <p className="text-xl text-albyColdGray-600">
              Send and receive payments on websites, Twitter or YouTube and
              other social media platforms.
            </p>
            <a href="/value4value" className="font-bold">
              Learn more <img src={ChevronRight} alt="" className="inline" />
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold">Passwordless logins</h3>
            <p className="text-xl text-albyColdGray-600">
              Authenticate with a Bitcoin Lightning wallet. No need to remember
              a username or password.
            </p>
            <a href="#top" className="font-bold">
              Try it out <img src={ChevronRight} alt="" className="inline" />
            </a>
          </div>
          <div className="flex justify-center md:hidden w-full">
            <img src={Landing4} alt="" />
          </div>
        </div>
      </div>

      <div
        id="nostr"
        className="px-4 xl:px-56 py-20 block md:flex flex-col justify-center items-center md:space-x-10 pb-32"
      >
        <h2 className="text-center text-3xl font-extrabold mb-6">
          <a href="#nostr" className="hover:underline">Explore Nostr with Alby</a>
        </h2>

        <p className="mb-6 text-xl">
          Alby lets you dive into the new, emerging world of Nostr - a simple
          and open protocol that aims to create censorship-resistant social
          networks.
        </p>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 flex flex-col items-center px-4 text-lg mb-10 lg:mb-0">
            <img src={Keys} className="mb-4 w-2/3 md:w-1/2 lg:w-auto" loading="lazy" />
            <h3 className="text-2xl font-extrabold mb-6">Manage your keys</h3>
            <p className="mb-4">
              Generate and manage multiple Nostr keys in the Alby extension.
              <br className="mb-4" />
              <a
                href="https://blog.getalby.com/how-to-use-nostr-with-the-alby-extension"
                className="underline self-start"
              >
                Learn more
              </a>
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center px-4 text-lg mb-10 lg:mb-0">
            <img src={Payments} className="mb-4 w-2/3 md:w-1/2 lg:w-auto" loading="lazy" />
            <h3 className="text-2xl font-extrabold mb-6">Tips & payments</h3>
            <p className="mb-4">
              Create and receive lightning payments in Nostr clients.
              <br className="mb-4" />
              <a
                href="https://blog.getalby.com/how-to-use-nostr-with-the-alby-extension"
                className="underline self-start"
              >
                Learn more
              </a>
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center px-4 text-lg mb-10 lg:mb-0">
            <img src={Nip05} className="mb-4 w-2/3 md:w-1/2 lg:w-auto" loading="lazy" />
            <h3 className="text-2xl font-extrabold mb-6">
              Get a unique identifier
            </h3>
            <p className="text-lg">
              Verify your Nostr profile with your Alby account.
              <br className="mb-4" />
              <a
                href="https://blog.getalby.com/how-to-use-nostr-with-the-alby-extension"
                className="underline self-start"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative space-y-4 bg-albyYellow-300 py-56 md:py-32">
        <img src={Bee1} alt="" className="absolute top-0 left-5" />
        <h2 className="text-center text-4xl font-extrabold">
          Get a Lightning address
        </h2>
        <p className="text-xl text-center px-4 md:px-0 w-full md:w-1/3 mx-auto">
          Like an email address, but for bitcoin. Easy to share and remember.
        </p>
        <div className="flex justify-center items-center">
          <a
            href="/lightning-address"
            className="bg-[#272828] text-white rounded-full px-10 text-center py-3"
          >
            Create Lightning Address
          </a>
        </div>
        <img src={Bee2} alt="" className="absolute bottom-0 right-5" />
      </div>

      <div className="bg-albyColdGray-800 py-20">
        <h2 className="text-4xl font-extrabold text-white text-center mb-4">
          Other Features
        </h2>
        <div className="block md:flex justify-center items-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-20">
          <div className="w-full md:w-1/3 bg-black/20 space-y-4 p-4 rounded-lg">
            <img src={Shield} alt="" />
            <h3 className="text-white text-2xl font-extrabold">
              No Tracking Software
            </h3>
            <p className="text-xl text-albyColdGray-300">
              No stats, analytics, or other trackers come with the extension.
            </p>
          </div>

          <div className="w-full md:w-1/3 bg-black/20 space-y-4 p-4 rounded-lg">
            <img src={Bolt} alt="" />
            <h3 className="text-white text-2xl font-extrabold">Open Source</h3>
            <p className="text-xl text-albyColdGray-300">
              Completely open code that can be audited and extended by anyone.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-black/20 space-y-4 p-4 rounded-lg">
            <img src={Arrows} alt="" />
            <h3 className="text-white text-2xl font-extrabold">
              Transaction History
            </h3>
            <p className="text-xl text-albyColdGray-300">
              View the details of past payments, deposits, and other activities
              (soon).
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
