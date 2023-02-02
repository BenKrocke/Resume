import Title from "@/components/title";
import Section from "@/components/section";
import School from "@/components/sections/education/school";

export default function Education({ education }) {
  return (
    <Section>
      <Title title="Education" />
      {education.map((school, index) => (
        <School
          key={index}
          degree={school.degree}
          school={school.school}
          period={school.period}
        />
      ))}
    </Section>
  );
}
