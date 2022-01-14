import Logo from "../../public/images/logo.png";
import HeaderIllustration from "../../public/images/header-illustration.png";
import TelegramLogo from "../../public/images/telegram.png";
import TwitterLogo from "../../public/images/twitter.png";
import GitHubLogo from "../../public/images/github.png";

function Header() {
	return (
		<div className=" bg-albyYellow-300 min-h-screen">
			<div className="w-[93.194%] mx-auto">
				<div className="flex top-0 pt-5 items-center justify-between max-h-[6.25rem]">
					<div>
						<img src={Logo} alt="Logo" className="w-auto h-[3.75rem]  mb-4" />
					</div>
					<div className="flex items-center gap-5 justify-between">
						<img src={TelegramLogo} alt="Telegram Logo" className=" w-[1.875rem] h-[1.875rem]  mb-4" />
						<img src={TwitterLogo} alt="Twitter Logo" className="w-[1.875rem]  h-[1.875rem]  mb-4" />
						<img src={GitHubLogo} alt="GitHub Logo" className="w-[1.875rem]  h-[1.875rem]  mb-4" />

					</div>
				</div>
				<div className="flex justify-between font-primary">
					<div className="max-w-[39.75rem] text-albyColdGray-800 pt-52">
						<h1 className="text-6xl font-black">
              Direct contributions from your audience
						</h1>
						<p className="text-2xl font-normal pt-9">
              Use a Lightning Address to receive value for value payments in Bitcoin from your audience 
						</p>
					</div>
					<div className=" pt-16">
						<img src={HeaderIllustration} alt="Header Illustration" className="w-[42vw] h-auto" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
