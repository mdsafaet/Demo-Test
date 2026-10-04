import TextGenerate from "@/components/common/TextGenerate";
/** Eyebrow + h2 on the left, short paragraph on the right (Portfolio, Journal). */
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow blue">{eyebrow}</p>
        <TextGenerate as="h2">{title}</TextGenerate>
      </div>
      <TextGenerate as="p">{description}</TextGenerate>
    </div>
  );
}
