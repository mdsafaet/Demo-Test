import TextGenerate from "@/components/common/TextGenerate";
import { newsletter } from "@/assets/images";

export default function Newsletter() {
  return (
    <section className="newsletter section" id="newsletter">
      <div className="newsletter-image"><img src={newsletter} alt="Dubai luxury terrace — sea view at sunset" loading="lazy" /></div>
      <div className="newsletter-copy">
        <p className="eyebrow blue">NEWSLETTER</p>
        <TextGenerate as="h2">Keep yourself updated on the <em>latest luxury property available.</em></TextGenerate>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" required placeholder="Your email address" aria-label="Email address" />
          <button type="submit" className="button button-blue">SIGN UP</button>
        </form>
      </div>
    </section>
  );
}
