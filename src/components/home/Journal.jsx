import SectionHeading from "@/components/common/SectionHeading";
import NewsCard from "@/components/common/NewsCard";
import TextLink from "@/components/common/TextLink";
import { news } from "@/data/news";

export default function Journal() {
  return (
    <section className="journal section" id="journal">
      <SectionHeading eyebrow="NEWS & MEDIA" title={<>The latest<br /><em>from Nova.</em></>} description={<TextLink href="#journal" iconSize={18}>View newsroom</TextLink>} />
      <div className="news-grid">
        {news.map((n) => <NewsCard key={n.title} item={n} />)}
      </div>
    </section>
  );
}
