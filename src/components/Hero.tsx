import heroGif from "../assets/hero-gif.gif";
import Button from "./ui/Button";
export default function Hero() {
  return (
    <div className="hero w-full pb-20 pt-14 px-48">
      <div className="hero-container flex flex-row justify-center items-start gap-x-24">
        <div className="hero-text w-96">
          <h2 className="text-6xl font-semibold leading-tight mb-5">
            Discover Digital Art & Collect Nfts
          </h2>
          <p className="text-xl mb-5">
            Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k Nft Artists.
          </p>
          <Button />
          <div className="hero-statistics flex gap-x-12 mt-5">
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono">240k+</span>
              <span className="text-xl">Total Sale</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono">100k+</span>
              <span className="text-xl">Auctions</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold font-mono">240k+</span>
              <span className="text-xl">Artists</span>
            </div>
          </div>
        </div>
        <img src={heroGif} className="hero-gif w-2/5 h-1/3" />
      </div>
    </div>
  );
}
