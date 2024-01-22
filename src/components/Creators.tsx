import Button from "./ui/Button";

export default function Creators() {
  return (
    <div className="creators flex items-center justify-center pt-20">
      <div className="creators-container">
        <div className="creators-header">
          <div className="creators-title">
            <h2 className="text-4xl font-semibold">Top Creators</h2>
            <p className="text-lg">
              Checkout Top Rated Creators On The Nft Marketplace
            </p>
          </div>
          <Button />
        </div>
        <div className="card-creators"></div>
      </div>
    </div>
  );
}
