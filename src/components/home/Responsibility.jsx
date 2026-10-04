import TextGenerate from "@/components/common/TextGenerate";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { community } from "@/assets/images";
import CountUp from "@/components/common/CountUp";
import { responsibilityItems } from "@/data/responsibility";
import { csrStats } from "@/data/company";

export default function Responsibility() {
  const [open, setOpen] = useState(0);
  return (
    <section className="responsibility section" id="responsibility">
      <div>
        <p className="eyebrow blue">CSR ACTIVITIES</p>
        <TextGenerate as="h2">Development with<br /><em>responsibility.</em></TextGenerate>
        <TextGenerate as="p">Our responsibility extends beyond the boundaries of our developments. We invest in people, communities and the environments around us.</TextGenerate>
        <div className="stats compact three">
          {csrStats.map((s) => (
            <div key={s.label}><h3><CountUp value={s.value} /></h3><p>{s.label}</p></div>
          ))}
        </div>
      </div>
      <div className="responsibility-list">
        <div className="investment-image csr-image">
          <img src={community} alt="Nova community initiative" loading="lazy" />
          <span>COMMUNITY · BUILDING BETTER FUTURES</span>
        </div>
        {responsibilityItems.map((item, i) => (
          <div className="responsibility-item" key={item.title}>
            <button onMouseEnter={() => setOpen(i)} aria-expanded={open === i} aria-controls={`responsibility-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <span>0{i + 1}</span>{item.title}{open === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <div id={`responsibility-${i}`} hidden={open !== i}><p>{item.text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
