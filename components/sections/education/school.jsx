export default function School({ degree, school, period }) {
  return (
    <div className="flex">
      <div className="grow flex">
        <div className="font-bold">{degree}</div>
        <div className="">&nbsp;-&nbsp;{school}</div>
      </div>
      <div className="font-thin">{period}</div>
    </div>
  );
}
