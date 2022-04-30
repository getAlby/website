import { useState } from "react";
import Logo from "../../public/images/logo.svg";
import InstallExtensionButton from "./InstallExtensionButton";
import Menu from "../../public/images/menu.svg";
import X from "../../public/images/x.svg";

const MobileMenu = () => {
  const [popup, setPopup] = useState(false);
  if (popup) {
    return (
      <div className="w-full mx-auto border-b border-black p-10 space-y-4 text-center bg-albyYellow-300 block md:hidden absolute top-0 w-screen">
        <img
          src={X}
          alt=""
          onClick={() => setPopup(false)}
          className="absolute top-9 right-7"
        />
        <a href="/value4value" className="block w-1/3 mx-auto">
          Value4Value
        </a>
        <a
          href="https://getalby.substack.com/"
          target="_blank"
          rel="noreferrer"
          className="block w-1/3 mx-auto"
        >
          Blog
        </a>
        <a href="" className="block mx-auto">
          <InstallExtensionButton style="mobile" />
        </a>
        <a href="/login" className="block w-1/3 mx-auto">
          Login
        </a>
      </div>
    );
  } else {
    return (
      <div className="px-7 block md:hidden">
        <img src={Menu} alt="" onClick={() => setPopup(true)} />
      </div>
    );
  }
};

function Navigation() {
  return (
    <div className="flex items-center w-full justify-between">
      <div>
        <a href="/">
          <img
            src={Logo}
            alt="Alby"
            className="lg:px-20 px-5 w-[12.5rem] text-black lg:w-auto lg:h-[3.75rem] h-24 mx-auto md:mx-0"
          />
        </a>
      </div>
      <div className="lg:px-20 px-7 hidden md:flex flex-wrap items-center gap-5 justify-center md:justify-end xl:pt-0 pt-3">
        <a href="/value4value" className="text-center py-2">
          Value4Value
        </a>
        <a
          href="https://getalby.substack.com/"
          target="_blank"
          rel="noreferrer"
          className="text-center py-2"
        >
          Blog
        </a>
        <InstallExtensionButton style="plain" />
        <a
          href="/login"
          className="bg-[#272828] text-white rounded-full w-32 text-center py-2"
        >
          Login
        </a>
      </div>
      <MobileMenu />
    </div>
  );
}

export default Navigation;
