import RightBee from "../../public/images/right-bee.svg";
import LeftBee from "../../public/images/left-bee.svg";
import ArrowIcon from "../../public/images/pointer.svg";

function Wallet() {
  return (
    <>
      <div className="  py-[8rem] relative bg-diamondLayer bg-repeat bg-albyColdGray-800 grid place-items-center text-center">
        <div className=" w-[91.46%] text-center md:w-[55.625%] max-w-[50.063rem] mx-auto font-primary">
          <h1 className="md:text-5xl text-3xl font-black text-albyColdGray-25">
            Alby - the new way to monetize!
          </h1>
          <p className="md:text-2xl text-base font-normal text-albyColdGray-25 pt-4">
            Alby is a browser extension for the Bitcoin Lightning Network. You
            can connect your own Lightning wallet or use Alby’s wallet and start
            transacting in Bitcoin with ease.
          </p>
          <a href="/">
            <button className="bg-albyYellow-300 text-albyColdGray-800 text-base lg:text-lg font-medium py-3 lg:py-4 px-4 lg:px-8 rounded-[1.875rem] mt-4">
              Try it now
            </button>
          </a>
        </div>
      </div>

      <div className="grid place-items-center hover:cursor-pointer my-16 lg:my-24 py-8 lg:py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] max-w-[77.1875rem] relative bg-albyYellow-50 w-[91.46%] lg:w-[85.76%] mx-auto">
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
    </>
  );
}

export default Wallet;
