import CountUp from "@/components/common/CountUp";
import TextGenerate from "@/components/common/TextGenerate";
import { project1, project2, project3, news2 } from "@/assets/images";
import { timeline } from "@/data/company";

const images = [project1, project2, project3, news2];

export default function BrandStory() {
  return (
    <section className="section brand-story" id="brand-story">
      <div className="section-heading">
        <div>
          <p className="eyebrow blue">BRAND STORY</p>
          <TextGenerate as="h2">History begins<br /><em>in 2009.</em></TextGenerate>
        </div>
        <TextGenerate as="p">From a single land estate to a global platform — four markets, one standard of design, engineering and stewardship.</TextGenerate>
      </div>
      <div className="timeline">
        {timeline.map((t, i) => (
          <article className="tl-row" key={t.year}>
            <div className="tl-year"><CountUp value={t.year} from={Number(t.year) - 40} /><small>{t.date}</small></div>
            <div className="tl-body">
              <p className="eyebrow">{t.kicker}</p>
              <TextGenerate as="h3">{t.title}</TextGenerate>
              {t.paragraphs.map((p) => <TextGenerate as="p" key={p}>{p}</TextGenerate>)}
            </div>
            <div className="tl-img"><img src={images[i]} alt={t.title} loading="lazy" /></div>
          </article>
        ))}
      </div>
    </section>
  );
}
