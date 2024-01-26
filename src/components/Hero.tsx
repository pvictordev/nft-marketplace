import heroGif from "../assets/hero-gif.gif";
import Button from "./ui/Button";

export default function Hero() {

  return (
    <div className="hero w-full pb-20 pt-10">
      <div className="hero-container flex flex-row justify-center items-start gap-x-24 max-lg:gap-12 max-md:flex-col max-md:items-center">
        <div className="hero-text flex flex-col items-start gap-y-8 max-md:items-center">
          <h2 className="text-6xl font-semibold leading-tight max-lg:text-4xl">
            Discover Digital Art & Collect Nfts
          </h2>
          <p className="text-xl leading-normal max-lg:text-base">
            Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k Nft Artists.
          </p>
          <Button />
          <div className="hero-statistics w-full justify-between flex gap-x-12 max-lg:gap-6">
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono max-lg:text-xl">
                240k+
              </span>
              <span className="text-2xl max-lg:text-base">Total Sale</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono max-lg:text-xl">
                100k+
              </span>
              <span className="text-xl max-lg:text-base">Auctions</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono max-lg:text-xl">
                240k+
              </span>
              <span className="text-xl max-lg:text-base">Artists</span>
            </div>
          </div>
        </div>
        <img
          src={heroGif}
          className="hero-gif max-w-lg max-lg:max-w-80"
        />
      </div>
    </div>
  );
}
