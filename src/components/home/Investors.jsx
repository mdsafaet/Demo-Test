import TextGenerate from "@/components/common/TextGenerate";
import { project3 } from "@/assets/images";
import Button from "@/components/common/Button";
import TextLink from "@/components/common/TextLink";
import CountUp from "@/components/common/CountUp";
import { investorStats } from "@/data/company";

const points = ["Risk-adjusted structuring", "Design & engineering discipline", "Long-term stewardship"];

export default function Investors() {
  return (
    <section className="investors section" id="investors">
      <div className="investment-image">
        <img src={project3} alt="Nova Quay commercial destination" loading="lazy" />
        <span>DEAL-READY GOVERNANCE · AUDITED &amp; TRANSPARENT · 32+ SUCCESSFUL, ON-TIME EXITS</span>
      </div>
      <div className="investment-copy">
        <p className="eyebrow blue">INVESTORS</p>
        <TextGenerate as="h2">Capital with a<br /><em>long-term view.</em></TextGenerate>
        <TextGenerate as="p">Nova combines disciplined capital allocation, market intelligence and development expertise to create resilient long-term value — built for investors who measure returns in decades, not quarters.</TextGenerate>
        <div className="stats compact">
          {investorStats.map((s) => (
            <div key={s.k}><span>{s.k}</span><h3><CountUp value={s.value} /></h3><p>{s.label}</p></div>
          ))}
        </div>
        <ul>{points.map((p) => <li key={p}>{p}</li>)}</ul>
        <div className="hero-actions">
          <Button href="#enquire" data-enquire variant="blue">Investor information</Button>
          <TextLink href="#contact">Download investment deck</TextLink>
        </div>
      </div>
    </section>
  );
}
