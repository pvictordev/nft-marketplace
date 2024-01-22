interface CardTrendProps {
  main: string;
  smallOne: string;
  smallTwo: string;
  avatar: string;
}
export default function CardTrend({
  main,
  smallOne,
  smallTwo,
  avatar,
}: CardTrendProps) {
  return (
    <div className="card-trend flex flex-col gap-y-4 w-80">
      <img src={main} alt="" />
      <div className="flex flex-row items-center gap-x-5">
        <img className="w-24 h-24" src={smallOne} alt="" />
        <img className="w-24 h-24" src={smallTwo} alt="" />
        <div className="w-24 h-24 flex items-center justify-center bg-accent rounded-2xl text-xl font-bold font-mono">
          1025+
        </div>
      </div>
      <h2 className="text-xl font-semibold">Design Animals</h2>
      <div className="flex justify-start items-center">
        <img className="w-5 h-5" src={avatar} alt="" />
        <span>Mr Fox</span>
      </div>
    </div>
  );
}
