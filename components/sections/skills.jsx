import Title from "@/components/title";
import Section from "@/components/section";

export default function Skills({ skills }) {
  return (
    <Section>
      <Title title="Skills" />
      <div className="flex">
        <div className="font-bold">Main experience</div>
        <div>&nbsp;-&nbsp;{skills.main}</div>
      </div>
      <div className="flex">
        <div className="font-bold">Other experience</div>
        <div>&nbsp;-&nbsp;{skills.other}</div>
      </div>
      <div className="flex">
        <div className="font-bold">Frameworks/tools/libraries</div>
        <div>&nbsp;-&nbsp;{skills.tools}</div>
      </div>
    </Section>
  );
}
