import Logo from "../../public/images/logo.svg";
import InstallExtensionButton from "./InstallExtensionButton";

function Navigation() {
  return (
    <div className="flex justify-center">
      <div className="block md:flex top-0 pt-5 pb-8 lg:pb-0 items-center static md:absolute w-[93.194%] justify-center lg:justify-between max-h-[6.25rem]">
        <div>
          <a href="/">
            <img
              src={Logo}
              alt="Alby"
              className="w-[12.5rem] text-black lg:w-auto lg:h-[3.75rem] h-24 mx-auto md:mx-0"
            />
          </a>
        </div>
        <div className="flex flex-wrap items-end gap-5 justify-center md:justify-between xl:pt-0 pt-3">
          <a href="/value4value" className="w-32 text-center py-2">
            Value4Value
          </a>
          <InstallExtensionButton style="plain" />
          <a
            href="/login"
            className="bg-[#272828] text-white rounded-full w-32 text-center py-2"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
