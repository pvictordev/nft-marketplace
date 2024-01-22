import CardTrend from "./ui/CardTrend";
import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import bear from "../assets/bear.png";
import mrfox from "../assets/mrfox.png";

export default function Trending() {
  return (
    <div className="trending flex items-center justify-center pt-20 pb-20">
      <div className="trending-container">
        <div className="trending-title flex flex-col items-start mb-14">
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
