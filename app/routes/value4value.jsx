import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Service from "~/components/Services";
import Payment from "~/components/Payment";
import Wallet from "~/components/Wallet";

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
