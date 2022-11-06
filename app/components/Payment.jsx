import Code from "../../public/images/code.svg";
import CodeMobile from "../../public/images/code-mobile.svg";
import Twitter from "../../public/images/twitter-illustration.svg";
import TwitterMobile from "../../public/images/twitter-mobile.svg";
import Youtube from "../../public/images/youtube-illustration.svg";
import YoutubeMobile from "../../public/images/youtube-mobile.svg";
import Bitcoin from "../../public/images/bitcoin-illustration.svg";
import BitcoinMobile from "../../public/images/bitcoin-mobile.svg";

export default function Payment() {
  return (
    <div className="xl:py-40.5 pt-20 lg:w-[93.3%] w-[91.46%] mx-auto bg-white">
      <h1 className="xl:text-5xxl lg:text-center font-black lg:text-3xl text-2xl">Receiving payments on<br />  existing platforms</h1>

      <div className=" xl:grid xl:grid-cols-2 place-items-center pt-10">
        <div className="2xl:space-y-6 space-y-2 xl:ml-17">
          <h3 className="xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl">Your own Website</h3>
          <p className="xl:text-3xl font-semibold text-lg">How to receive contributions on your website</p>
          <div className="flex flex-col space-y-9">
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
                <p className="flex justify-center mt-2 xl:mt-0">1</p>
              </div>
              <div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">
                <p>Add this in the HTML header section of your website:

                  <br/><b className="break-all"> &lt;meta name=&quot;lightning&quot; content=&quot;lnurlp:you@getalby.com&quot;/&gt;</b>
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5">
                <p className="flex justify-center -mt-3 xl:mt-0">2</p>
              </div>
              <div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">
                <p>Make sure to have an og:image meta tag: <br/><b className="break-all">&lt;meta property=&quot;og:image&quot; content=&quot;https://www.your.blog/YOUR_IMAGE&quot; /&gt;</b>
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                <p className="flex justify-center mt-2 xl:mt-0">3</p>
              </div>
              <p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">Verify if you enhanced your website successfully with the Alby browser extension</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={Code} className="hidden lg:inline-block" alt="code" />
          <img src={CodeMobile} className="image-drop-shadow mx-auto block lg:hidden mt-4" alt="code" />
        </div>
      </div>

      <div className=" xl:grid xl:grid-cols-2 place-items-center pt-10">
        <div className="2xl:space-y-6 space-y-2 xl:ml-17 order-last">
          <h3 className="xl:text-4xl xl:leading-10 font-black  lg:text-2xl text-xl">Twitter</h3>
          <p className="xl:text-3xl font-semibold lg:text-xl text-lg">How to receive contributions on Twitter</p>
          <div className="flex flex-col space-y-9">
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
                <p className="flex justify-center mt-2 xl:mt-0">1</p>
              </div>
              <div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">
                <p>Add this in the description of your Twitter profile: <b>⚡you@getalby.com</b>
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                <p className="flex justify-center mt-2 xl:mt-0">2</p>
              </div>
              <p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">Verify if you enhanced your Twitter profile successfully with the Alby browser extension</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={Twitter} alt="code" className="hidden lg:inline-block" />
          <img src={TwitterMobile} alt="code" className="image-drop-shadow mx-auto block lg:hidden mt-4" />
        </div>
      </div>

      <div className=" xl:grid xl:grid-cols-2 place-items-center pt-10">
        <div className="2xl:space-y-6 space-y-2 xl:ml-17">
          <h3 className="xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl">YouTube</h3>
          <p className="xl:text-3xl font-bold lg:text-xl text-lg">How to receive contributions on YouTube</p>
          <div className="flex flex-col space-y-9">
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
                <p className="flex justify-center mt-2 xl:mt-0">1</p>
              </div>
              <div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">

                <p>Add this in the description of a video in your YouTube channel: <b>⚡you@getalby.com</b>
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                <p className="flex justify-center mt-2 xl:mt-0">2</p>
              </div>
              <p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">Verify if you enhanced your YouTube video successfully with the Alby browser extension</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={Youtube} alt="code" className="hidden lg:inline-block" />
          <img src={YoutubeMobile} alt="code" className="image-drop-shadow mx-auto block lg:hidden mt-4" />
        </div>
      </div>

      <div className=" xl:grid xl:grid-cols-2 place-items-center pt-10 pb-10">
        <div className="2xl:space-y-6 space-y-2 xl:ml-17 order-last">
          <h3 className="xl:text-4xl xl:leading-10 font-black lg:text-2xl text-xl">Bitcoin TV</h3>
          <p className="xl:text-3xl font-bold lg:text-xl text-lg">How to receive contributions on BitcoinTV</p>
          <div className="flex flex-col space-y-9">
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
                <p className="flex justify-center mt-2 xl:mt-0">1</p>
              </div>
              <div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">

                <p>Add this in the description of a video in your BitcoinTV channel: <b>⚡you@getalby.com</b>
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="2xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                <p className="flex justify-center mt-2 xl:mt-0">2</p>
              </div>
              <p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md mt-3">Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={Bitcoin} alt="" className="hidden lg:inline-block" />
          <img src={BitcoinMobile} alt="" className="image-drop-shadow mx-auto block lg:hidden mt-4" />
        </div>
      </div>
    </div>
  );
}
