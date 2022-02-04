import Lines from "../../public/images/lines.svg";
import Wallet from "../../public/images/wallet.svg";
import Waves from "../../public/images/waves.svg";
import Puzzle from "../../public/images/puzzle.svg";

export default function Services() {
    
  return(
    <div className="xl:w-full py-12 bg-albyYellow-50 xl:px-37 xl:pt-33 xl:pb-40">
      <div className="xl:flex xl:justify-center xl:items-center xl:space-x-21 space-y-10 xl:space-y-0 mx-auto">
        <div className="xl:flex xl:space-x-21 grid grid-cols-2">
          <div className="grid place-items-center">
            <div>
              <img src={Lines} alt="lines" />
            </div>
            <p className="xl:text-2xl text-center pt-6.5">Use existing <br/>platforms</p>
          </div>
               
          <div className="grid place-items-center">
            <div>
              <img src={Wallet} alt="wallet" />
            </div>
            <p className="xl:text-2xl text-center pt-6.5">Receive payments<br/> directly</p>
          </div>
        </div>

        <div className="xl:flex xl:space-x-21 grid grid-cols-2">
          <div className="grid place-items-center">
            <div className="xl:mt-8">
              <img src={Waves} alt="waves" />
            </div>
            <p className="xl:text-2xl text-center pt-5">Non-intrusive and<br/> frictionless for your<br/> audience</p>
          </div>

          <div className="grid place-items-center mr-2.5">
            <div className="xl:mt-8">
              <img src={Puzzle} alt="puzzle" />
            </div>
            <p className="xl:text-2xl text-center pt-5">Simple integration;<br/> no coding skills<br/> needed</p>
          </div>
        </div>
      </div>
    </div>    
  );
}