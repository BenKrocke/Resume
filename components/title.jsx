export default function Title({ title }) {
  return (
    <div className="w-full">
      <div className="text-xl font-bold">{title}</div>
      <div className="min-h-[1px] w-full bg-black my-2"></div>
    </div>
  );
}
