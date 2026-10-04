import { logo } from "@/assets/images";
import { footerColumns, footerLegal, contactInfo } from "@/data/navigation";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

// simple outline social icons; point the hrefs at your real profiles
const socials = [
  { label: "Facebook", href: "#", icon: <svg viewBox="0 0 24 24" {...stroke}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" /></svg> },
  { label: "Instagram", href: "#", icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></svg> },
  { label: "X", href: "#", icon: <svg viewBox="0 0 24 24" {...stroke}><path d="M5 5l14 14M19 5L5 19" /></svg> },
  { label: "YouTube", href: "#", icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.5v5l4.5-2.5Z" /></svg> },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-cols">
        <div className="footer-brand">
          <a href="#home" className="logo" aria-label="Back to NOVA home">
            <img src={logo} alt="NOVA Development" width="155" height="54" />
          </a>
          <p>A global land and real estate development group building master-planned communities, residences and commercial assets across four markets.</p>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>{s.icon}</a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col">
          <h4>Contact</h4>
          <p className="footer-contact-label">Group enquiries</p>
          <a className="footer-email" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a className="footer-advisor" href="#enquire" data-enquire>Speak to an advisor</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nova Development. All rights reserved.</span>
        <span className="footer-legal">
          {footerLegal.map((t, i) => (
            <span key={t}>{i > 0 && " · "}<a href="#">{t}</a></span>
          ))}
        </span>
      </div>
    </footer>
  );
}
