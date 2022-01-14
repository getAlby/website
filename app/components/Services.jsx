import Lines from "../../public/images/lines.png";
import Wallet from "../../public/images/wallet.png";
import Waves from "../../public/images/waves.png";
import Puzzle from "../../public/images/puzzle.png";

export default function Services() {
    
    return(
        <div className="w-full bg-yellow-50 px-37 pt-41 pb-38">
            <div className="flex justify-center items-center space-x-21">
                <div className="space-y-5">
                    <div className="relative bg-yellow-200 rounded-full w-12.5 h-12.5 mx-auto">
                        <img className="absolute top-2.5 w-13" src={Lines} alt="lines" />
                    </div>
                    <p className="text-2xl text-center">Use existing<br /> platforms</p>
                </div>
               
                <div className="space-y-5">
                    <div className="relative bg-yellow-200 rounded-full w-12.5 h-12.5 mx-auto">
                        <img className="absolute top-1.5 w-12" src={Wallet} alt="wallet" />
                    </div>
                    <p className="text-2xl text-center">Receive payments<br /> directly</p>
                </div>

                <div className="space-y-5">
                    <div className="relative bg-yellow-200 rounded-full w-13.5 h-12.5 mx-auto mt-8">
                        <img className="absolute top-1.5 w-14.5" src={Waves} alt="waves" />
                    </div>
                    <p className="text-2xl text-center">Non-intrusive and<br /> frictionless for your<br /> audience</p>
                </div>

                <div className="space-y-5">
                    <div className="relative bg-yellow-200 rounded-full w-12.5 h-12.5 mx-auto mt-8">
                        <img className="absolute -mt-1.5 ml-1 w-11" src={Puzzle} alt="puzzle" />
                    </div>
                    <p className="text-2xl text-center">Simple integration;<br /> no coding skills<br /> needed</p>
                </div>
            </div>
        </div>    
    );
}