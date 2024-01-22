import Navbar from "../ui/Navbar";
import Hero from "../Hero";
import Creators from "../Creators";
import Trending from "../Trending";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Creators />
      <Trending />
    </div>
  );
}
