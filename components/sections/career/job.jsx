export default function Job({
  title,
  companyName,
  period,
  summary,
  explanation,
}) {
  return (
    <div className="mb-4">
      <div className="flex">
        <div className="grow flex">
          <div className="font-bold">{companyName}</div>
          <div className="font-thin">&nbsp;-&nbsp;{title}</div>
        </div>
        <div className="font-thin">{period}</div>
      </div>
      <div className={"mt-0 mb-2"}>{explanation}</div>
      <ul className="list-disc list-inside">
        {summary.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
