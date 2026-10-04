import { ArrowUpRight } from "lucide-react";
import Flag from "@/components/common/Flag";
import { markets } from "@/data/markets";

export default function MarketStrip({ onSelectMarket }) {
  return (
    <div className="market-strip" aria-label="Our four markets">
      <span className="strip-title">FOUR MARKETS.<br />ONE SHARED VISION.</span>
      {markets.map((m) => (
        <a key={m.name} href="#presence" onClick={() => onSelectMarket(m.name)}>
          <span>{m.name}</span>
          <small><Flag code={m.flag} title={m.country} />{m.country}</small>
          <ArrowUpRight className="strip-arrow" size={18} />
          <div className="strip-pop" role="tooltip">
            <p className="eyebrow">{m.status} · {m.country}</p>
            <p>{m.text}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
