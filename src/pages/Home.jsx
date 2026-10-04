import { useEffect, useState } from "react";
import { glState } from "@/lib/gl-state";
import useScrollReveal from "@/lib/useScrollReveal";
import Hero from "@/components/home/Hero";
import MarketStrip from "@/components/home/MarketStrip";
import Intro from "@/components/home/Intro";
import Chairman from "@/components/home/Chairman";
import VisionMission from "@/components/home/VisionMission";
import Portfolio from "@/components/home/Portfolio";
import Presence from "@/components/home/Presence";
import Investors from "@/components/home/Investors";
import Responsibility from "@/components/home/Responsibility";
import BrandStory from "@/components/home/BrandStory";
import Journal from "@/components/home/Journal";
import Contact from "@/components/home/Contact";
import Newsletter from "@/components/home/Newsletter";
import NovaOne from "@/components/home/NovaOne";

export default function Home() {
  const [market, setMarket] = useState("Dubai");

  useScrollReveal(); // fade/slide sections in as they enter the viewport

  // keep the WebGL globe pointing at the selected market
  useEffect(() => { glState.market = market; }, [market]);

  return (
    <>
      <Hero />
      <MarketStrip onSelectMarket={setMarket} />
      <Intro />
      <Chairman />
      <VisionMission />
      <Portfolio />
      <Presence market={market} onMarketChange={setMarket} />
      <Investors />
      <BrandStory />
      <Journal />
      <Responsibility />
      <Contact />
      <Newsletter />
      <NovaOne />
    </>
  );
}
