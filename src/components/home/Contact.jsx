import Button from "@/components/common/Button";
import Flag from "@/components/common/Flag";
import Tilt from "@/components/common/Tilt";
import TextGenerate from "@/components/common/TextGenerate";
import { markets } from "@/data/markets";
import { contactInfo } from "@/data/navigation";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div>
        <p className="eyebrow">CONTACT &amp; CORPORATE OFFICES</p>
        <TextGenerate as="h2">Let’s build<br /><em>what comes next.</em></TextGenerate>
      </div>
      <div className="contact-copy">
        <TextGenerate as="p">Speak with our team about projects,<br />partnerships, investment opportunities<br />or corporate enquiries.</TextGenerate>
        <Button href="#enquire" data-enquire variant="white">Start a conversation</Button>
        <a className="contact-email" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </div>
      <div className="offices">
        {markets.map((m, i) => (
          <Tilt className="office" key={m.name}>
            <div className="office-top"><span>0{i + 1}</span><Flag code={m.flag} title={m.country} /></div>
            <p className="eyebrow">{m.office}</p>
            <h3>{m.name}</h3>
            <address>{m.addressLines.map((l) => <span key={l}>{l}</span>)}</address>
            <a href={m.phoneHref}>{m.phone}</a>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
