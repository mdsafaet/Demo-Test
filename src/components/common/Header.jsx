import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { logo } from "@/assets/images";
import { nav, contactInfo } from "@/data/navigation";
import Flag from "@/components/common/Flag";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // switch to a solid background after the user scrolls a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // freeze page scroll behind the full-screen menu
  useEffect(() => {
    if (!menu) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [menu]);

  const close = () => setMenu(false);

  return (
    <header className={`site-header${scrolled || menu ? " is-solid" : ""}`}>

      <a className="logo" href="#home" aria-label="NOVA Development home">
        <img src={logo} alt="NOVA Development" width="155" height="54" />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map((item) =>
          item.children ? (
            <div className="nav-item has-sub" key={item.label}>
              <button type="button" className="nav-parent" aria-haspopup="true">
                {item.label} <ChevronDown size={14} />
              </button>
              <div className="submenu">
                {item.children.map((c) => (
                  <a key={c.label} href={c.href}>
                    {c.flag && <Flag code={c.flag} title={c.label} />}
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a key={item.label} href={item.href}>{item.label}</a>
          )
        )}
      </nav>

      <div className="header-actions">
        <a className="header-enquire" href="#enquire" data-enquire>Enquire <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" aria-expanded={menu} aria-controls="mobile-menu" aria-label={menu ? "Close menu" : "Open menu"} onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </div>

      {menu && (
        <nav id="mobile-menu" aria-label="Mobile navigation">
          {nav.map((item) =>
            item.children ? (
              <div className="mobile-group" key={item.label}>
                <span className="mobile-group-title">{item.label}</span>
                {item.children.map((c) => (
                  <a key={c.label} className="mobile-sub" href={c.href} onClick={close}>
                    <span>{c.flag && <Flag code={c.flag} title={c.label} />}{c.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            ) : (
              <a key={item.label} href={item.href} onClick={close}>{item.label}<ArrowUpRight size={18} /></a>
            )
          )}
          <div className="mobile-contact">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
