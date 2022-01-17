import Code from "../../public/images/code.png";
import Twitter from "../../public/images/twitter-illustration.png";
import Youtube from "../../public/images/youtube-illustration.png";
import Bitcoin from "../../public/images/bitcoin-illustration.png";
import {Helmet} from "react-helmet";

export default function Payment() {
    return (
        <div className="xl:pt-40.5 pt-20 xl:px-17">
            <h1 className="xl:text-5xxl text-center font-black text-3xl">Receiveing payments on<br /> existing platforms</h1>

            <div className="xl:px-17 xl:grid xl:grid-cols-2 pt-10 px-5">
                <div className="xl:space-y-6 space-y-5 xl:ml-17">
                    <h3 className="xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl">Your own Website</h3>
                    <p className="xl:text-3xl font-semibold text-xl">Receive payments by adding a meta tag to your website</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-4">
                                <p className="flex justify-center mt-2 xl:mt-0">1</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Add this in the HTML header section of your website: <b>&lt;meta name="lightning" content="you@lightning.address"&gt;</b>
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5">
                                <p className="flex justify-center -mt-3 xl:mt-0">2</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Make sure to have an og:image meta tag: <b>&lt;meta property="og:image" content="https://www.youre.blog/YOUR_IMAGE"&gt;</b></p>
                        </div>
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                                <p className="flex justify-center mt-2 xl:mt-0">3</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Verify if you enhanced your website successfully with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div className="xl:pt-20">
                    <img src={Code} alt="code" />
                </div>
            </div>

            <div className="xl:px-17 xl:grid xl:grid-cols-2 pt-5 px-5">
                <div className="xl:space-y-6 space-y-5 xl:order-last xl:ml-32">
                    <h3 className="xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl">Twitter</h3>
                    <p className="xl:text-3xl font-semibold text-xl">Receive tips on Twitter by adding a Lightning address to your profile</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                                <p className="flex justify-center mt-2 xl:mt-0">1</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Add this in the description of your Twtter profile: <b>⚡you@lightning.address</b></p>
                        </div>
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5">
                                <p className="flex justify-center -mt-3 xl:mt-0">2</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Verify if you enhanced your Twitter profile successfully with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="" src={Twitter} alt="code" />
                </div>
            </div>

            <div className="xl:px-17 xl:grid xl:grid-cols-2 pt-5 px-5">
                <div className="xl:space-y-6 space-y-5 xl:ml-17">
                    <h3 className="xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl">YouTube</h3>
                    <p className="xl:text-3xl font-semibold text-xl">Receive contributions on YouTube by adding a Lightning address to your video description</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                                <p className="flex justify-center mt-2 xl:mt-0">1</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Add this in the description of a Video in your YouTube channel : <b>⚡you@lightning.address</b></p>
                        </div>
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5">
                                <p className="flex justify-center -mt-3 xl:mt-0">2</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Verify if you enhanced your YouTube video successfully with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Youtube} alt="code" />
                </div>
            </div>

            <div className="xl:px-17 xl:grid xl:grid-cols-2 pt-5 px-5">
                <div className="xl:space-y-6 space-y-5 xl:order-last xl:ml-32">
                    <h3 className="xl:text-4xl xl:leading-10 font-black xl:pt-42 text-2xl">Bitcoin TV</h3>
                    <p className="xl:text-3xl font-semibold text-xl">Receive tips on Bitcoin TV by adding a Lightning address to your video description</p>
                    <div className="flex flex-col space-y-9">
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-12 h-10 px-3.5">
                                <p className="flex justify-center mt-2 xl:mt-0">1</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Add this in the description of a video in your BitcoinTV channel : <b>⚡you@lightning.address</b></p>
                        </div>
                        <div className="flex gap-6">
                            <div className="xl:text-3xl xl:leading-9 font-black bg-albyYellow-300 rounded-full xl:w-16 xl:h-16 xl:px-6 xl:py-3.5 w-10 h-8 p-5">
                                <p className="flex justify-center -mt-3 xl:mt-0">2</p>
                            </div>
                            <p className="xl:text-2xl xl:leading-8 font-normal">Verify if you enhanced your BitcoinTV video successfully with the Alby browser extension</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Bitcoin} alt="code" />
                </div>
            </div>
        </div>
    );
}