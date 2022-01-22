function Wallet() {
	return (
		<div className=" py-[8rem] relative bg-diamondLayer bg-repeat bg-albyColdGray-800 grid place-items-center text-center">
			<div className="text-center w-[11/12] md:w-[55.625%] max-w-[50.063rem] mx-auto font-primary">
				<h1 className="md:text-5xl text-3xl font-black text-albyColdGray-25">
          This new way of monetization is brought to you by Alby
				</h1>
				<p className="md:text-2xl text-xl font-normal text-albyColdGray-25 pt-4">
          Alby is a browser extension for the Bitcoin Lightning Network. You can connect your own Lightning wallet or use Alby’s wallet and start transacting in Bitcoin with ease.
				</p>
				<button className="bg-albyYellow-300 text-albyColdGray-800 text-lg font-medium py-4 px-8 rounded-[1.875rem] mt-4">
          Try it now
				</button>
			</div>
		</div>
	);
}

export default Wallet;
