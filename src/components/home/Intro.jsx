import TextGenerate from "@/components/common/TextGenerate";
import TextLink from "@/components/common/TextLink";
import CountUp from "@/components/common/CountUp";
import { companyStats } from "@/data/company";

export default function Intro() {
  return (
    <section className="section intro" id="company">
      <div>
        <p className="eyebrow blue">COMPANY PROFILE · WHO WE ARE</p>
        <TextGenerate as="h2">We develop places<br /><em>that outlive us.</em></TextGenerate>
      </div>
      <div className="intro-copy">
        <TextGenerate as="p" className="lead">Nova Development is a global land and real estate development group creating communities, residences and commercial destinations across four markets.</TextGenerate>
        <TextGenerate as="p">From land acquisition and master planning to construction, investment and long-term stewardship, our approach combines local market knowledge with one consistent global standard.</TextGenerate>
        <p className="eyebrow blue">Our standard — Design. Engineering. Governance. Stewardship.</p>
        <TextLink href="#brand-story">Discover Nova</TextLink>
      </div>
      <div className="stats">
        {companyStats.map((s) => (
          <div key={s.label}><h3><CountUp value={s.value} /></h3><p>{s.label}</p></div>
        ))}
      </div>
    </section>
  );
}
