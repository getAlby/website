import RightBee from "../../public/images/right-bee.svg";
import LeftBee from "../../public/images/left-bee.svg";
import ArrowIcon from "../../public/images/arrow-icon.svg";
import DiamondFooter from "../../public/images/diamond-footer.svg";
import TelegramLogo from "../../public/images/telegram.png";
import TwitterLogo from "../../public/images/twitter.png";
import GitHubLogo from "../../public/images/github.png";

function Footer() {
	return (
		<div className="bg-white z-10 pb-72 hover:cursor-pointer">
			<div className="grid place-items-center mt-24 py-[8.75rem] text-center rounded-[2.75rem] max-h-[31.25rem] relative bg-albyYellow-300 w-[85.76%] mx-auto">
				<div className=" z-0 absolute max-h-[31.25rem] max-w-max w-full">
					<img src={DiamondFooter} alt="Diamond Footer" className="w-full h-full" />
				</div>
				<div className="z-10">
					<h2 className="w-[78%] mx-auto  font-primary text-3xl md:text-6xl md:leading-[4.6875rem] font-black relative">
          You don’t have a Lightning Address yet?
						<span className="absolute top-1/2 md:top-3/4 right-0 lg:right-1/4"> <img src={ArrowIcon} /></span>
					</h2>
					<p className=" pt-10 font-primary text-xl md:text-2xl md:leading-[1.875rem] font-medium relative">Find more information here</p>
					<img src={RightBee} alt="Right Bee" className="w-auto mx-auto absolute bottom-[8%] left-[70%] md:left-[85%]" />
					<img src={LeftBee} alt="Left Bee" className="w-auto mx-auto absolute bottom-[14%] left-[82%] md:left-[92%]" />
				</div>
			</div>
			<div className="grid place-items-end pt-48">
				<h3 className="w-11/12 text-center md:w-full font-primary font-bold text-2xl md:text-5xl mx-auto">
          Do you have feedback or need help?
				</h3>
				<div className="md:w-[52.84%] w-11/12 mx-auto pt-8 text-center">
					<p className=" font-primary font-normal text-lg md:text-2xl leading-[2.25rem] text-[#707070]">
          Alby is open-source and currently in alpha stage. Our goal is to create the best online experience to consume and reward content and services online.
					</p>
					<div className="flex items-end gap-5 justify-center pt-10">
						<img src={TelegramLogo} alt="Telegram Logo" className=" lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem] mb-4" />
						<img src={TwitterLogo} alt="Twitter Logo" className="lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4" />
						<img src={GitHubLogo} alt="GitHub Logo" className="lg:w-[1.875rem] w-[1rem] lg:h-[1.875rem] h-[1rem]  mb-4" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
