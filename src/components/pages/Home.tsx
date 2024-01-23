import Hero from "../Hero";
import Creators from "../Creators";
import Trending from "../Trending";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Trending />
      <Creators />
    </div>
  );
}
