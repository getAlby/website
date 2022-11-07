import Code from "../../public/images/web.svg";
import Twitter from "../../public/images/twitter.svg";
import Youtube from "../../public/images/youtube.svg";

export default function Receiving() {
  return (
    <div className="xl:pt-40.5 pt-20 xl:px-17">
      <h1 className="xl:text-5xxl text-center font-black text-3xl">Receiving payments on<br /> existing platforms</h1>

      <div className="xl:grid xl:grid-cols-2 pt-10 px-5 place-items-center">
        <div className="2xl:ml-14 xl:ml-14 space-y-3 xl:space-y-3">
          <h3 className="2xl:text-4xl xl:leading-10 font-black text-2xl">Your own Website</h3>
          <p className="2xl:text-2xl font-normal text-lg text-albyColdGray-20">Receive payments by adding a meta tag to your website</p>
          <button className="text-albyColdGray-800 2xl:text-2xl font-bold rounded-full">Try it now ›
          </button>
        </div>
        <div className="image-shadow">
          <img src={Code} alt="" />
        </div>
      </div>

      <div className=" xl:grid xl:grid-cols-2 pt-10 px-5 place-items-center">
        <div className="2xl:ml-32 xl:ml-17 space-y-3 xl:space-y-3">
          <h3 className="2xl:text-4xl xl:leading-10 font-black text-2xl">Twitter</h3>
          <p className="2xl:text-2xl font-normal text-lg text-albyColdGray-20">Receive tips on Twitter by adding a Lightning address to your profile</p>
          <button className="text-albyColdGray-800 2xl:text-2xl font-bold rounded-full">Try it now ›
          </button>
        </div>
        <div className="image-shadow">
          <img src={Twitter} alt="" />
        </div>
      </div>

      <div className="xl:grid xl:grid-cols-2 pt-10 px-5 place-items-center">
        <div className="2xl:ml-32 xl:ml-17 space-y-3 xl:space-y-3">
          <h3 className="2xl:text-4xl xl:leading-10 font-black text-2xl">Youtube and BitcoinTV</h3>
          <p className="2xl:text-2xl font-normal text-lg text-albyColdGray-20">Receive contributions on video platforms such as YouTube or BitcoinTV </p>
          <button className="text-albyColdGray-800 2xl:text-2xl font-bold rounded-full">Try it now ›
          </button>
        </div>
        <div className="image-shadow">
          <img src={Youtube} alt="" />
        </div>
      </div>

    </div>
  );
}
