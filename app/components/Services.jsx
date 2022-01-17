import Lines from "../../public/images/lines.png";
import Wallet from "../../public/images/wallet.png";
import Waves from "../../public/images/waves.png";
import Puzzle from "../../public/images/puzzle.png";

export default function Services() {
    
    return(
        <div className="xl:w-full py-12 bg-albyYellow-50 xl:px-37 xl:pt-41 xl:pb-38">
            <div className="xl:flex xl:justify-center xl:items-center xl:space-x-21 space-y-5 xl:space-y-0">
                <div className="space-y-2 block">
                    <div className="relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto">
                        <img className="absolute top-2.5 xl:w-13" src={Lines} alt="lines" />
                    </div>
                    <p className="xl:text-2xl text-center">Use existing<br /> platforms</p>
                </div>
               
                <div className="space-y-2 block">
                    <div className="relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto">
                        <img className="absolute top-1.5 xl:w-12" src={Wallet} alt="wallet" />
                    </div>
                    <p className="xl:text-2xl text-center">Receive payments<br/> directly</p>
                </div>

                <div className="space-y-2 block">
                    <div className="relative bg-albyYellow-200 rounded-full w-13.5 h-12.5 mx-auto xl:mt-8">
                        <img className="absolute top-1.5 xl:w-14.5" src={Waves} alt="waves" />
                    </div>
                    <p className="xl:text-2xl text-center">Non-intrusive and<br/> frictionless for your<br/> audience</p>
                </div>

                <div className="space-y-2 block">
                    <div className="relative bg-albyYellow-200 rounded-full w-12.5 h-12.5 mx-auto xl:mt-8">
                        <img className="absolute -mt-1.5 ml-1 xl:w-11" src={Puzzle} alt="puzzle" />
                    </div>
                    <p className="xl:text-2xl text-center">Simple integration;<br/> no coding skills<br/> needed</p>
                </div>
            </div>
        </div>    
    );
}