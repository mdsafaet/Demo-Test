import TextGenerate from "@/components/common/TextGenerate";
import { project1, project2 } from "@/assets/images";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/common/Tabs";
import { vision } from "@/data/company";

const images = { vision: project1, mission: project2 };

export default function VisionMission() {
  return (
    <section className="portfolio vm section" id="vision">
      <p className="eyebrow blue">CORPORATE VISION &amp; MISSION</p>
      <TextGenerate as="h2" className="vm-quote">{`“${vision.quote}”`}</TextGenerate>
      <Tabs defaultValue="vision" className="portfolio-tabs">
        <TabsList className="filter-list" aria-label="Vision or mission">
          {vision.tabs.map((t) => <TabsTrigger className="filter" value={t.id} key={t.id}>{t.label}</TabsTrigger>)}
        </TabsList>
        {vision.tabs.map((t) => (
          <TabsContent value={t.id} key={t.id}>
            <div className="investors vm-panel">
              <div className="investment-image">
                <img src={images[t.id]} alt={t.title} loading="lazy" />
                <span>{t.kicker.split("·")[1]?.trim().toUpperCase()}</span>
              </div>
              <div className="investment-copy">
                <p className="eyebrow blue">{t.kicker.split("·")[0].trim()}</p>
                <TextGenerate as="h3" className="vm-title">{t.title}</TextGenerate>
                {t.paragraphs.map((p) => <TextGenerate as="p" key={p}>{p}</TextGenerate>)}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="stats values">
        {vision.values.map((v, i) => (
          <div key={v.title}><span>0{i + 1}</span><h3>{v.title}</h3><p>{v.text}</p></div>
        ))}
      </div>
    </section>
  );
}
