import { ArrowUpRight } from "lucide-react";
import Tilt from "@/components/common/Tilt";
import TextGenerate from "@/components/common/TextGenerate";

/** Tilts toward the cursor; hover (or keyboard focus) pops up the story summary. */
export default function NewsCard({ item }) {
  return (
    <Tilt as="article" className="news-card" tabIndex={0}>
      <div className="news-image">
        <img src={item.image} alt="NOVA architectural inspiration" loading="lazy" />
        <div className="hover-detail">
          <p className="eyebrow">{item.place} · {item.date}</p>
          <p>{item.text}</p>
          <span className="text-link light">Read story <ArrowUpRight size={16} /></span>
        </div>
      </div>
      <p className="eyebrow">{item.place}<span>{item.date}</span></p>
      <TextGenerate as="h3">{item.title}</TextGenerate>
    </Tilt>
  );
}
