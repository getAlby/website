import Code from "../../public/images/code.svg";
import Twitter from "../../public/images/twitter-illustration.svg";
import Youtube from "../../public/images/youtube-illustration.svg";
import Bitcoin from "../../public/images/bitcoin-illustration.svg";

export default function Payment() {
	return (
		<div className="xl:pt-40.5 pt-20 w-[93.3%] mx-auto">
			<h1 className="xl:text-5xxl text-center font-black text-3xl">Receiving payments<br /> existing platforms</h1>

			<div className=" xl:grid xl:grid-cols-2 place-items-center pt-10">
				<div className="2xl:space-y-6 space-y-5 xl:ml-17">
					<h3 className="xl:text-4xl xl:leading-10 font-black text-2xl">Your own Website</h3>
					<p className="xl:text-3xl font-semibold text-xl">Receive payments by adding a meta tag to your website</p>
					<div className="flex flex-col space-y-9">
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
								<p className="flex justify-center mt-2 xl:mt-0">1</p>
							</div>
							<div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">
								<p>Add this in the HTML header section of your website: 
									<br/><b className="break-all"> &lt;meta name=&quot;lightning&quot; content=&quot;you@lightning.address&quot;/&gt;</b>
								</p>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5">
								<p className="flex justify-center -mt-3 xl:mt-0">2</p>
							</div>
							<div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">
								<p>Make sure to have an og:image meta tag: <br/><b className="break-all">&lt;meta property=&quot;og:image&quot; content=&quot;https://www.youre.blog/YOUR_IMAGE&quot; /&gt;</b>
								</p>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
								<p className="flex justify-center mt-2 xl:mt-0">3</p>
							</div>
							<p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">Verify if you enhanced your website successfully with the Alby browser extension</p>
						</div>
					</div>
				</div>
				<div className=" image-shadow">
					<img src={Code} className="" alt="code" />
				</div>
			</div>

			<div className=" xl:grid xl:grid-cols-2 place-items-center pt-10">
				<div className="2xl:space-y-6 space-y-5 xl:ml-17 order-last">
					<h3 className="xl:text-4xl xl:leading-10 font-black  text-2xl">Twitter</h3>
					<p className="xl:text-3xl font-semibold text-xl">Receive tips on Twitter by adding a Lightning address to your profile</p>
					<div className="flex flex-col space-y-9">
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
								<p className="flex justify-center mt-2 xl:mt-0">1</p>
							</div>
							<div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">
								<p>Add this in the description of your Twtter profile: <b>⚡you@lightning.address</b>
								</p>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
								<p className="flex justify-center mt-2 xl:mt-0">2</p>
							</div>
							<p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">Verify if you enhanced your Twitter profile successfully with the Alby browser extension</p>
						</div>
					</div>
				</div>
				<div className=" image-shadow">
					<img src={Twitter} alt="code" />
				</div>
			</div>

			<div className=" xl:grid xl:grid-cols-2 place-items-center pt-10">
				<div className="2xl:space-y-6 space-y-5 xl:ml-17">
					<h3 className="xl:text-4xl xl:leading-10 font-black  text-2xl">YouTube</h3>
					<p className="xl:text-3xl font-semibold text-xl">Receive contributions on YouTube by adding a Lightning address to your video description</p>
					<div className="flex flex-col space-y-9">
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
								<p className="flex justify-center mt-2 xl:mt-0">1</p> 
							</div>
							<div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">
								<p>Add this in the description of a video in your YouTube channel: <b>⚡you@lightning.address</b>
								</p>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:text-2xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
								<p className="flex justify-center mt-2 xl:mt-0">2</p>
							</div>
							<p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">Verify if you enhanced your YouTube video successfully with the Alby browser extension</p>
						</div>
					</div>
				</div>
				<div className=" image-shadow">
					<img src={Youtube} alt="code" />
				</div>
			</div>

			<div className=" xl:grid xl:grid-cols-2 place-items-center pt-10 pb-10">
				<div className="2xl:space-y-6 space-y-5 xl:ml-17 order-last">
					<h3 className="xl:text-4xl xl:leading-10 font-black  text-2xl">Bitcoin TV</h3>
					<p className="xl:text-3xl font-semibold text-xl">Receive tips on Bitcoin TV by adding a Lightning address to your video description</p>
					<div className="flex flex-col space-y-9">
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
								<p className="flex justify-center mt-2 xl:mt-0">1</p>
							</div>
							<div className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">
								<p>Add this in the description of a video in your BitcoinTV channel: <b>⚡you@lightning.address</b>
								</p>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
								<p className="flex justify-center mt-2 xl:mt-0">2</p>
							</div>
							<p className="xl:text-2xl 2xl:leading-8 font-normal xl:text-md">Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension</p>
						</div>
					</div>
				</div>
				<div className=" image-shadow">
					<img src={Bitcoin} alt="code" />
				</div>
			</div>
		</div>
	);
}