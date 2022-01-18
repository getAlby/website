import RightFlyingBee from "../../public/images/right-flying-bee.svg";
import LeftFlyingBee from "../../public/images/left-flying-bee.svg";

function Wallet() {
	return (
		<div className=" py-[18.25rem] min-h-screen relative bg-diamondLayer bg-repeat bg-albyColdGray-800 grid place-items-center text-center">
			<div className="text-center w-[11/12] md:w-[55.625%] max-w-[50.063rem] mx-auto font-primary">
				<h1 className="md:text-5xl text-3xl font-black text-albyColdGray-25">
          This new way of monetization is brought to you by Alby
				</h1>
				<p className="md:text-2xl text-xl font-normal text-albyColdGray-25 pt-9">
          Alby is a browser extension for the Bitcoin Lightning Network. You can connect your own Lightning wallet or use Alby’s wallet and start transacting in Bitcoin with ease.
				</p>
				<button className="bg-albyYellow-300 text-black text-xl md:text-2xl font-bold py-[0.875rem] px-8 rounded-full mt-[3.125rem]">
          Try it now ›
				</button>
			</div>
			<div className="absolute bottom-[-1.8%] left-[-0.23%] ">
				<img src={RightFlyingBee} alt="Right Flying Bee" className="w-auto mx-auto" />
			</div>
			<div className="absolute bottom-[79.14%] right-[4.96%]">
				<img src={LeftFlyingBee} alt="Left Flying Bee" className="w-auto mx-auto" />
			</div>
		</div>
	);
}

export default Wallet;
