/* eslint-disable linebreak-style */
import Logo from "../../public/images/logo.svg";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Service from "~/components/Services";
import Payment from "~/components/Payment";
import Wallet from "~/components/Wallet";


export const meta = () => {
  return {
    title: "Alby — Lightning buzz for your Browser!",
    description: "Alby brings Bitcoin to the web with in-browser payments and identity",
    "og:url": "https://getalby.com",
    "og:title": "Alby",
    "og:site_name": "Alby",
    "og:image": Logo,
    "twitter:site": "@getalby",
    "twitter:creator": "@getalby",
  };
};

export default function Index() {

  return (
    <div>
      <Header />
      <Service />
      <Payment />
      <Wallet />
      <Footer />
    </div>
  );
}