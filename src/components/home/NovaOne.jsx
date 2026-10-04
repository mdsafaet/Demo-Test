import { ArrowUpRight } from "lucide-react";
import Tilt from "@/components/common/Tilt";
import TextGenerate from "@/components/common/TextGenerate";
import { app } from "@/data/company";

export default function NovaOne() {
  return (
    <section className="portfolio nova-one section" id="nova-one">
      <div>
        <p className="eyebrow blue">NOVA ONE APP</p>
        <TextGenerate as="h2">One app for all<br /><em>property needs.</em></TextGenerate>
        <TextGenerate as="p" className="nova-one-text">Manage your property, payments, service requests and community life — all in Nova One. Available on iOS, Android and AppGallery.</TextGenerate>
        <div className="store-buttons">
          {app.stores.map(([small, big]) => (
            <a key={big} href="#" className="store"><small>{small}</small><strong>{big}</strong></a>
          ))}
        </div>
      </div>
      <Tilt className="app-card">
        <p className="eyebrow blue">REQUESTS</p>
        <ul>
          {app.features.map((f) => <li key={f}>{f}<ArrowUpRight size={18} /></li>)}
        </ul>
      </Tilt>
    </section>
  );
}
