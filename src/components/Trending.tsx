import CardTrend from "./ui/CardTrend";
import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import bear from "../assets/bear.png";
import mrfox from "../assets/mrfox.png";

export default function Trending() {
  return (
    <div className="trending w-full py-20 px-32 flex justify-center">
      <div className="trending-container flex flex-col items-start">
        <div className="trending-title mb-14">
          <h2 className="text-4xl font-semibold">Trending Collection</h2>
          <p className="text-lg">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>
        <div className="trending-items flex flex-row gap-x-8">
          <CardTrend main={dog} smallOne={cat} smallTwo={bear} avatar={mrfox} />
          <CardTrend main={dog} smallOne={cat} smallTwo={bear} avatar={mrfox} />
          <CardTrend main={dog} smallOne={cat} smallTwo={bear} avatar={mrfox} />
        </div>
      </div>
    </div>
  );
}
