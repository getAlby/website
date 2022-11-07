import { useState } from "react";

import TelegramLogo from "../../public/images/Telegram.svg";
import TwitterLogo from "../../public/images/twitter-logo.svg";
import GitHubLogo from "../../public/images/GitHub.svg";
import YouTubeLogo from "../../public/images/youtube-icon.svg";
import DoItHint from "../../public/images/do-it-hint.png";
import useInstallExtension from "~/hooks/useInstallExtension";

function Footer() {
  const installExtension = useInstallExtension();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className="bg-albyYellow-300 py-32 px-4 md:px-10 relative">
        <h3 className="w-11/12 text-center md:w-full font-primary font-bold text-4xl mx-auto">
          Do you have feedback or need help?
        </h3>
        <div className="w-full lg:w-[50%] mx-auto pt-2 text-center">
          <p className="font-primary font-normal text-xl leading-[2.25rem] text-albyColdGray-800">
            Alby is open-source and currently in alpha stage. Our goal is to
            create the best online experience to consume and reward content and
            services online. We love to hear from you. File a{" "}
            <a
              href="https://github.com/getAlby/lightning-browser-extension/issues/new/choose"
              className="underline"
            >
              Github issue
            </a>
            , use the{" "}
            <a href="https://feedback.getalby.com/" className="underline">
              Feedback board
            </a>{" "}
            for feature requests or join the{" "}
            <a href="https://t.me/getAlby" className="underline">
              Telegram channel
            </a>
            .
          </p>
        </div>

        <div className="border-b border-black w-[95%] xl:w-[80%] mx-auto mt-24" />
        <div className="flex justify-center">
          <div className="pt-10 pb-20 block lg:flex justify-center lg:space-x-10 xl:space-x-20">
            <div>
              <h3 className="text-2xl font-extrabold w-2/3">
                The Bitcoin Lightning App for your Browser
              </h3>
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
              <img src={DoItHint} alt="" className="block my-2 ml-20" />
            </div>

            <div className="flex gap-10 xl:gap-20">
              <div className="space-y-2">
                <p className="text-xl font-bold">Alby</p>
                <a href="mailto:hello@getalby.com" className="block">
                  Contact us
                </a>
                <a href="https://blog.getalby.com/" className="block">
                  Blog
                </a>
                <a href="https://github.com/getAlby/media" className="block">
                  Media
                </a>
                <a href="https://guides.getalby.com/" className="block">
                  Guides
                </a>
                <a href="mailto:support@getalby.com" className="block">
                  Support
                </a>
                <a href="/terms-of-service" className="block">
                  Terms of Service
                </a>
                <a href="/privacy-policy" className="block">
                  Privacy Policy
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-xl font-bold">Developers</p>
                <a
                  href="https://github.com/getAlby/lightning-browser-extension#lightning-web-extension"
                  className="block"
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/getAlby/lightning-browser-extension/issues"
                  className="block"
                >
                  Open Issues
                </a>
                <a
                  href="https://github.com/getAlby/lightning-browser-extension/wiki/Bounties"
                  className="block"
                >
                  Open Bounties
                </a>
              </div>
            </div>

            <div>
              <p className="mt-10 lg:mt-0 text-xl font-bold">Stay in touch</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://twitter.com/getalby"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={TwitterLogo} alt="Twitter" className="w-10 h-10" />
                </a>
                <a href="https://t.me/getAlby" target="_blank" rel="noreferrer">
                  <img
                    src={TelegramLogo}
                    alt="Telegram"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://github.com/getAlby"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GitHubLogo} alt="GitHub" className="w-10 h-10" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCIICdm6mox3VkCAv-yHMeMw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={YouTubeLogo} alt="YouTube" className="w-10 h-10" />
                </a>
              </div>
              <p className="mt-5 text-lg md:text-xl font-bold">
                {!success ? (
                  <span>
                    Subscribe to our newsletter <i>Alby Buzz</i>
                  </span>
                ) : (
                  "You're signed up!"
                )}
              </p>
              {!success ? (
                <form
                  data-members-form="subscribe"
                  className="w-80"
                  onSubmit={() => setSuccess(true)}
                >
                  <div className="flex mt-2">
                    <input
                      data-members-email
                      type="email"
                      required="true"
                      className="w-[65%] rounded-l-full border border-white bg-white/25 p-3 placeholder:text-black"
                      placeholder="Email address..."
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (email.length === 0) {
                          setConsent(false);
                        }
                      }}
                    />
                    <button
                      disabled={(email && !consent) || !email}
                      type="submit"
                      className={`${
                        email && !consent ? "opacity-50" : ""
                      } rounded-r-full bg-[#272828] text-white py-3 px-4`}
                    >
                      Sign up
                    </button>
                  </div>
                  {email && (
                    <div>
                      <input
                        type="checkbox"
                        checked={consent}
                        required="true"
                        className="mt-4"
                        name="consent"
                        onChange={() => setConsent(!consent)}
                      />
                      <label htmlFor="consent" className="ml-2">
                        I want to get notified about upcoming features and
                        announcements.
                      </label>
                    </div>
                  )}
                </form>
              ) : (
                <p>Check your inbox for a confirmation email.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
