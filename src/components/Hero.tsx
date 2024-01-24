import heroGif from "../assets/hero-gif.gif";
import Button from "./ui/Button";

export default function Hero() {

  return (
    <div className="hero w-full pb-20 pt-10 px-32 max-sm:w-80 max-sm:p-0">
      <div className="hero-container flex flex-row justify-center items-start gap-x-24 max-md:flex-col max-md:items-center max-sm:justify-center">
        <div className="hero-text w-96">
          <h2 className="text-6xl font-semibold leading-tight mb-6 max-lg:text-4xl">
            Discover Digital Art & Collect Nfts
          </h2>
          <p className="text-xl mb-6 leading-normal max-lg:text-sm">
            Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k Nft Artists.
          </p>
          <Button />
          <div className="hero-statistics flex gap-x-12 mt-6 max-md:justify-center max-md:mb-6">
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono max-lg:text-xl">
                240k+
              </span>
              <span className="text-xl max-lg:text-sm">Total Sale</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono max-lg:text-xl">
                100k+
              </span>
              <span className="text-xl max-lg:text-sm">Auctions</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono max-lg:text-xl">
                240k+
              </span>
              <span className="text-xl max-lg:text-sm">Artists</span>
            </div>
          </div>
        </div>
        <img
          src={heroGif}
          className="hero-gif w-96 h-96 max-lg:w-80 max-lg:h-80"
        />
      </div>
    </div>
  );
}
