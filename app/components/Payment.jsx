import Code from "../../public/images/code.png";
import Twitter from "../../public/images/twitter-illustration.png";
import Youtube from "../../public/images/youtube-illustration.png";
import Bitcoin from "../../public/images/bitcoin-illustration.png";

export default function Payment() {
    return (
        <div className="pt-40.5">
            <h1 className="text-5xxl text-center font-black px-97">Receiveing payments on<br /> existing platforms</h1>

            <div className="px-17 grid grid-cols-2">
                <div className="space-y-6">
                    <h3 className="text-4xl leading-10 font-black pt-42">Your own Website</h3>
                    <p className="text-3xl font-semibold">Receive payments by adding a meta tag to<br /> your website</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">1</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Add this in the HTML header section of your<br /> website:</p>
                        </div>
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">2</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Make sure to have an og:image meta tag:<br />  </p>
                        </div>
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">3</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Verify if you enhanced your website successfully<br /> with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div className="pt-20 pr-48">
                    <img className="" src={Code} alt="code" />
                </div>
            </div>

            <div className="px-17 grid grid-cols-2">
                <div className="space-y-6 order-last">
                    <h3 className="text-4xl leading-10 font-black pt-42">Twitter</h3>
                    <p className="text-3xl font-semibold">Receive tips on Twitter by adding a Lightning<br /> address to your profile</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">1</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Add this in the description of your Twtter profile: ⚡<b>you@lightning.address</b></p>
                        </div>
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">2</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Verify if you enhanced your Twitter profile<br /> successfully with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={Twitter} alt="code" />
                </div>
            </div>

            <div className="px-17 grid grid-cols-2">
                <div className="space-y-6">
                    <h3 className="text-4xl leading-10 font-black pt-42">YouTube</h3>
                    <p className="text-3xl font-semibold">Receive contributions on YouTube by adding<br /> a Lightning address to your video description</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">1</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Add this in the description of a Video in your<br /> YouTube channel : ⚡<b>you@lightning.address</b></p>
                        </div>
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">2</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Verify if you enhanced your YouTube video<br /> successfully with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={Youtube} alt="code" />
                </div>
            </div>

            <div className="px-17 grid grid-cols-2">
                <div className="space-y-6 order-last">
                    <h3 className="text-4xl leading-10 font-black pt-42">Bitcoin TV</h3>
                    <p className="text-3xl font-semibold">Receive tips on Bitcoin TV by adding a<br /> Lightning address to your video description</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">1</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Add this in the description of a video in your<br /> BitcoinTV channel : ⚡<b>you@lightning.address</b></p>
                        </div>
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl leading-9 font-black bg-yellow-300 rounded-full w-16 h-16 px-6 py-3.5">2</p>
                            </div>
                            <p className="text-2xl leading-8 font-normal">Verify if you enhanced your BitcoinTV video<br /> successfully with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={Bitcoin} alt="code" />
                </div>
            </div>
        </div>
    );
}