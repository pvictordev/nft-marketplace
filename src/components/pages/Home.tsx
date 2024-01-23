import Hero from "../Hero";
import Creators from "../Creators";
import Trending from "../Trending";

export default function Home() {
  return (
    <div className="home flex flex-col items-center justify-center">
      <Hero />
      <Trending />
      <Creators />
    </div>
  );
}
