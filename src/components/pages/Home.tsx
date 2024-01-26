import Hero from "../Hero";
import Creators from "../Creators";
import Trending from "../Trending";

export default function Home() {
  return (
    <div className="home max-w-5xl max-lg:max-w-2xl max-md:max-w-xs">
      <Hero />
      <Trending />
      <Creators />
    </div>
  );
}
