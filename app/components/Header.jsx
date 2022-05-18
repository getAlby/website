import Logo from "../../public/images/logo.svg";
import HeaderIllustration from "../../public/images/header-illustration.svg";
import BelowButtonIllustration from "../../public/images/button-below.svg";
import BelowHeaderIllustration from "../../public/images/header-below.svg";
import GroupDiamond from "../../public/images/group-diamond.svg";
import useInstallExtension from "~/hooks/useInstallExtension";

function Header() {
  const installExtension = useInstallExtension();

  return (
    <div className=" bg-albyYellow-300 lg:min-h-screen grid place-items-center relative">
      <div className="lg:w-[93.194%] w-[91.46%] mx-auto ">
        <div className="mx-auto block md:flex items-center w-full justify-between">
          <div>
            <a href="/">
              <img
                src={Logo}
                alt="Alby"
                className="mt-4 md:mt-0 mx-auto w-auto lg:h-[3.75rem] h-[2.75rem]"
              />
            </a>
          </div>
          <div className="flex items-end gap-5 justify-between relative">
            <div className="mx-auto md:mr-10">
              {installExtension.loading ? null : installExtension.link ? (
                <a
                  href={installExtension.link || installExtension.defaultLink}
                  className="mx-auto bg-[#272828] text-white font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-3 px-7 rounded-full lg:mt-0 mt-4"
                >
                  {installExtension.browser && (
                    <img
                      src={installExtension.icon}
                      className="inline pr-3 max-h-8"
                    />
                  )}
                  Add To {installExtension.browser}
                </a>
              ) : (
                <a
                  href={installExtension.defaultLink}
                  onClick={() => {
                    alert(
                      `We currently do not yet support ${installExtension.browser}. But maybe you can install it from source.`
                    );
                  }}
                  className="bg-[#272828] text-white font-secondary inline-block text-lg lg:leading-[1.875rem] font-semibold py-3 px-7 rounded-full lg:mt-0 mt-4"
                >
                  Available for Firefox, Chrome, Opera and others
                </a>
              )}
            </div>
            <img
              src={BelowButtonIllustration}
              alt=""
              className="absolute w-auto hidden lg:inline-block left-[80%] top-[67%]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-primary pt-[1rem] lg:pt-0">
          <div className="xl:max-w-[39.75rem] lg:w-1/2 text-albyColdGray-800 text-left">
            <h1 className="xl:text-6xl md:text-4xl text-3xl font-black">
              Direct contributions from your audience
            </h1>
            <p className="lg:text-2xl text-base font-normal pt-9">
              Use a Lightning Address to receive value for value payments in
              Bitcoin from your audience
            </p>
          </div>
          <div className="pt-10 lg:pt-24">
            <img
              src={HeaderIllustration}
              alt="Alby screenshot"
              className="mx-auto min-w-[17rem] h-auto z-10 relative"
            />
            <img
              src={BelowHeaderIllustration}
              alt=""
              className="absolute w-auto hidden lg:inline-block left-[88%] top-[74.5%] z-0"
            />
          </div>
        </div>
      </div>
      <img
        src={GroupDiamond}
        alt=""
        className="absolute w-auto  left-0 bottom-0 z-0 hidden lg:inline-block"
      />
    </div>
  );
}

export default Header;
