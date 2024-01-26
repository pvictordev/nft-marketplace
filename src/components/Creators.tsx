import Button from "./ui/Button";
import keepitreal from "../assets/keepitreal.png";
import CardCreators from "./ui/CardCreators";

export default function Creators() {
  return (
    <div className="creators">
      <div className="creators-container">
        <div className="creators-header flex justify-between gap-x-8 mb-14">
          <div className="creators-title">
            <h2 className="text-4xl font-semibold">Top Creators</h2>
            <p className="text-lg">
              Checkout Top Rated Creators On The Nft Marketplace
            </p>
          </div>
          <div className="max-md:hidden"><Button /></div>
        </div>
        <div className="creators-items grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
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
