import Button from "./ui/Button";
import keepitreal from "../assets/keepitreal.png";
import CardCreators from "./ui/CardCreators";

export default function Creators() {
  return (
    <div className="creators w-full py-20 px-32">
      <div className="creators-container">
        <div className="creators-header flex justify-between mb-14">
          <div className="creators-title">
            <h2 className="text-4xl font-semibold">Top Creators</h2>
            <p className="text-lg">
              Checkout Top Rated Creators On The Nft Marketplace
            </p>
          </div>
          <Button />
        </div>
        <div className="creators-items grid grid-cols-4 gap-6">
          <CardCreators user={keepitreal} />
          <CardCreators user={keepitreal} />
          <CardCreators user={keepitreal} />
          <CardCreators user={keepitreal} />
          <CardCreators user={keepitreal} />
          <CardCreators user={keepitreal} />
          <CardCreators user={keepitreal} />
          <CardCreators user={keepitreal} />
        </div>
      </div>
    </div>
  );
}
