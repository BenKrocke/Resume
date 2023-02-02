import Title from "@/components/title";
import Section from "@/components/section";

export default function Summary({ summary }) {
  return (
    <Section>
      <Title title="Profile" />
      <div>{summary}</div>
    </Section>
  );
}
