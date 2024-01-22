interface CardCreatorsProps {
  user: string;
}
export default function CardCreators({ user }: CardCreatorsProps) {
  return (
    <div className="card-creators bg-card flex flex-col gap-y-1 items-center relative p-5 rounded-3xl">
      <span className="absolute top-2 left-2 bg-background px-3 py-1 rounded-full">
        1
      </span>
      <img className="w-28 h-28" src={user} alt="" />
      <h3 className="text-xl font-semibold mt-2">Keepitreal</h3>
      <p className="text-secondary">
        Total Sales: <span className="font-mono text-primary">34.53 ETH</span>
      </p>
    </div>
  );
}
