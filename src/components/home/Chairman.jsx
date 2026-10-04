import { useRef, useState } from "react";
import { chairmanPhoto, project1 } from "@/assets/images";
import Button from "@/components/common/Button";
import TextGenerate from "@/components/common/TextGenerate";
import DetailDialog from "@/components/common/DetailDialog";
import { chairman, story } from "@/data/company";

export default function Chairman() {
  const [open, setOpen] = useState(false);
  const closedAt = useRef(0);

  // pointing the cursor at the button opens the modal (ignored for a moment right after closing it)
  const hoverOpen = () => { if (Date.now() - closedAt.current > 800) setOpen(true); };
  const close = () => { closedAt.current = Date.now(); setOpen(false); };

  const detail = open
    ? { title: story.title, meta: story.meta, text: story.text, image: project1, ctaLabel: "Read our brand story", ctaHref: "#brand-story" }
    : null;

  return (
    <section className="investors reverse section" id="chairman">
      <div className="investment-image">
        {/* PLACEHOLDER: replace src/assets/images/chairman-placeholder.svg (see index.js) with the real photo */}
        <img src={chairmanPhoto} alt="Chairman of Nova Development" loading="lazy" />
        <span>CHAIRMAN’S OFFICE · NOVA DEVELOPMENT GROUP · EST. 2009</span>
      </div>
      <div className="investment-copy">
        <p className="eyebrow blue">{chairman.eyebrow}</p>
        <TextGenerate as="h2">Development is not <em>what we build.</em> It is what we leave behind.</TextGenerate>
        {chairman.paragraphs.map((p) => <TextGenerate as="p" key={p}>{p}</TextGenerate>)}
        <ul>{chairman.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <p className="eyebrow blue">{chairman.signature}</p>
        <Button
          href="#brand-story"
          variant="blue"
          onMouseEnter={hoverOpen}
          onClick={(e) => { e.preventDefault(); setOpen(true); }}
        >
          Discover our story
        </Button>
      </div>
      <DetailDialog detail={detail} onClose={close} />
    </section>
  );
}
