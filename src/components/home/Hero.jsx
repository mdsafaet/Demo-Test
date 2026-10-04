import { useEffect, useRef } from "react";
import TextGenerate from "@/components/common/TextGenerate";
import { ArrowDown } from "lucide-react";
import { project1 } from "@/assets/images";
import Button from "@/components/common/Button";
import TextLink from "@/components/common/TextLink";

/**
 * HERO VIDEO
 * Put your file in public/videos/ and set HERO_VIDEO to its path (muted H.264 .mp4 works everywhere).
 * Leave it "" to show the still image instead.
 */
const HERO_VIDEO = "/videos/video30.mp4";

/**
 * false = the video is a normal <video> that is always visible (safest).
 * true  = the WebGL scene redraws the video with its lens/parallax effect.
 */
const HERO_WEBGL_EFFECT = true;

export default function Hero({ videoSrc = HERO_VIDEO, image = project1 }) {
  const videoRef = useRef(null);

  // make sure the muted video really starts (some browsers need a nudge)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const play = () => v.play().catch(() => {});
    play();
    window.addEventListener("pointerdown", play, { once: true }); // autoplay blocked? first click starts it
    return () => window.removeEventListener("pointerdown", play);
  }, [videoSrc]);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      {!videoSrc && (
        <img className="hero-image" src={image} alt="Contemporary residence overlooking a tranquil pool" fetchPriority="high" />
      )}
      {videoSrc && (
        <video
          ref={videoRef}
          className="hero-video"
          src={videoSrc}
          poster={image}
          data-gl={HERO_WEBGL_EFFECT ? "on" : "off"}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow"><span /> GLOBAL LAND & REAL ESTATE DEVELOPMENT</p>
        <TextGenerate as="h1" id="hero-title">Building land into<br /><em>legacy — across four markets.</em></TextGenerate>
        <TextGenerate as="p" className="hero-description">Nova Development plans, develops and delivers land estates,<br />residences and commercial assets in Dubai, Bangladesh, USA and UK —<br />with one standard of engineering, governance and stewardship.</TextGenerate>
        <div className="hero-actions">
          <Button href="#portfolio" variant="white">Explore projects</Button>
          <TextLink href="#presence" light>Our global presence</TextLink>
        </div>
      </div>
      <div className="hero-bottom">
        <span>LAND · RESIDENCES · COMMERCIAL</span>
        <a href="#company">Explore NOVA <ArrowDown size={16} /></a>
        <span className="hero-index">01 <i /> Four markets. One Nova</span>
      </div>
    </section>
  );
}
