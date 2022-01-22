import Logo from "../../public/images/Logo.svg";
import HeaderIllustration from "../../public/images/header-illustration.svg";


function Header() {
	return (
		<div className=" bg-albyYellow-300 min-h-screen grid place-items-center relative">
			<div className="w-[93.194%] mx-auto ">
				<div className="flex top-0 pt-5 items-center absolute w-[93.194%] justify-between max-h-[6.25rem]">
					<div>
						<img src={Logo} alt="Logo" className="w-auto lg:h-[3.75rem] h-[2.75rem]" />
					</div>
					<div className="flex items-end gap-5 justify-between">
						<button className="bg-transparent text-albyWarmGray-800 border-2 border-solid border-albyWarmGray-800 font-primary  lg:inline-block text-lg lg:leading-[1.75rem] font-semibold py-2 px-5 rounded-[30px]">
							Add to Chrome
						</button>

					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-primary">
					<div className="xl:max-w-[39.75rem] lg:w-1/2 text-albyColdGray-800 text-center lg:text-left">
						<h1 className="xl:text-6xl md:text-4xl text-3xl font-black">
              Direct contributions from your audience
						</h1>
						<p className="lg:text-2xl text-xl font-normal pt-9">
              Use a Lightning Address to receive value for value payments in Bitcoin from your audience 
						</p>
					</div>
					<div className="pt-10 lg:pt-40 ">
						<img src={HeaderIllustration} alt="Header Illustration" className="w-[42vw] mx-auto min-w-[19rem] h-auto" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
