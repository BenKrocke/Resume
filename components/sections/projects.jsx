import Title from "@/components/title";
import Section from "@/components/section";

export default function Projects({ projects }) {
  return (
    <Section>
      <Title title="Projects" />
      {projects.map((project, index) => (
        <div key={index}>
          <span className="font-bold">{project.title}</span> - {project.summary}
        </div>
      ))}
    </Section>
  );
}
