import Job from "@/components/sections/career/job";
import Title from "@/components/title";
import Section from "@/components/section";

export default function Career({ career }) {
  return (
    <Section>
      <Title title="Experience" />
      {career.map((job, index) => (
        <Job
          key={index}
          title={job.title}
          summary={job.summary}
          companyName={job.companyName}
          period={job.period}
          explanation={job.explanation}
        />
      ))}
    </Section>
  );
}
