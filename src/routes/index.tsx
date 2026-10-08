import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, House, BriefcaseBusiness, Sparkles, MapPin, Check, Heart, ShieldCheck, Footprints, SearchCheck, BadgeCheck, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import logo from "@/assets/rentmyspace-logo.png";
import living from "@/assets/living-space.jpg";
import work from "@/assets/work-space.jpg";
import event from "@/assets/event-space.jpg";

const spaces = [
  { name: "Live", icon: House, image: living, title: "Feel right at home.", description: "A fresh start. A place that's yours.", caption: "Room for your next chapter", category: "Living spaces" },
  { name: "Work", icon: BriefcaseBusiness, image: work, title: "Make room for big ideas.", description: "Find a space that works for you.", caption: "Where your next idea begins", category: "Workspaces" },
  { name: "Celebrate", icon: Sparkles, image: event, title: "Set the scene for memories.", description: "Extraordinary places for your moments.", caption: "A place to bring people together", category: "Event spaces" },
] as const;

const checks = [
  { icon: Footprints, title: "We walk every space", description: "Someone from our team visits the property in person before it ever reaches you." },
  { icon: SearchCheck, title: "Every detail confirmed", description: "Layout, condition, amenities and access are checked on site, not guessed from a listing." },
  { icon: BadgeCheck, title: "Published only when true", description: "A space goes live once it matches what we saw, with photos taken during the visit." },
] as const;

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    document.documentElement.classList.add("has-js");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { setShown(true); return; }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) { setShown(true); observer.disconnect(); }
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal${shown ? " is-visible" : ""}${className ? ` ${className}` : ""}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "RentMySpace — Great Spaces. Coming Soon." },
    { name: "description", content: "Your next space is almost here. Discover a new way to find homes, workspaces, and event venues with RentMySpace." },
    { property: "og:title", content: "RentMySpace — Great Spaces. Coming Soon." },
    { property: "og:description", content: "A space to live. A place to work. A reason to celebrate. RentMySpace is coming soon." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const scene = spaces[active] ?? spaces[0];
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % spaces.length), 8000);
    return () => window.clearInterval(timer);
  }, [paused]);
  function selectSpace(index: number, scroll = false) {
    setActive(index);
    setPaused(true);
    if (scroll) document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <header className="site-header">
        <a href="#" aria-label="RentMySpace home"><img className="brand-logo" src={logo} alt="RentMySpace — List. Rent. Find your space." width={230} height={77} /></a>
        <div className="header-right"><span className="launch-status"><span className="status-dot" /> Something good is on its way</span><Button variant="brand" asChild><a href="#spaces">Take a sneak peek <ArrowUpRight /></a></Button></div>
      </header>
      <main>
        <section className="hero" id="preview" aria-label="RentMySpace coming soon">
          <img key={scene.image} className="hero-photo" src={scene.image} alt={scene.caption} width={1920} height={1024} />
          <div className="hero-content">
            <div className="eyebrow reveal"><Sparkles size={14} /> A NEW WAY TO FIND YOUR SPACE</div>
            <h1 className="reveal">Great spaces.<br /><span>Coming soon.</span></h1>
            <p className="hero-description reveal reveal-delay">A space to live. A place to work. A reason to celebrate.<br />Your next chapter starts with RentMySpace.</p>
            <div className="hero-cta reveal reveal-delay"><Button variant="hero" asChild><a href="#spaces">Explore what's coming <ArrowRight /></a></Button></div>
            <div className="hero-verified reveal reveal-delay"><ShieldCheck size={15} /> Every space physically verified by our team</div>
            <p className="hero-note reveal reveal-delay">New possibilities. Just around the corner.</p>
          </div>
          <div className="hero-bottom"><div className="scene-tabs" aria-label="Preview space categories">{spaces.map((space, index) => <Button key={space.name} variant="scene" aria-pressed={active === index} onClick={() => selectSpace(index)}><space.icon size={13} />{space.name}</Button>)}</div><div className="scene-caption"><strong><MapPin size={12} className="inline mr-1" />{scene.caption}</strong><span>{scene.category} · A glimpse of what's ahead</span></div></div>
        </section>
        <div className="intro-strip"><p><strong>More than a space.</strong> A world of possibilities.</p><div className="strip-tags"><span><Check />Thoughtfully connected</span><span><Heart />Made for real life</span><span><ShieldCheck />Verified in person</span></div></div>
        <section className="trust-section" id="trust" aria-label="How we verify spaces">
          <div className="trust-inner">
            <div className="trust-head">
              <Reveal><p className="section-label trust-label"><ShieldCheck size={13} /> VERIFIED IN PERSON</p></Reveal>
              <Reveal delay={90}><h2>Every space, checked by a real person.</h2></Reveal>
              <Reveal delay={180}><p>We physically visit and verify every property before it appears on RentMySpace. What you see is what's really there.</p></Reveal>
            </div>
            <div className="trust-steps">
              {checks.map((check, index) => (
                <Reveal key={check.title} delay={index * 130}>
                  <div className="trust-step"><span className="step-index">{String(index + 1).padStart(2, "0")}</span><span className="step-icon"><check.icon size={18} /></span><h3>{check.title}</h3><p>{check.description}</p></div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={430} className="trust-bar">
              <span className="trust-pill"><BadgeCheck size={14} /><strong>100%</strong> of spaces verified on site</span>
              <span className="trust-pill"><Camera size={14} /> Photos taken during the visit</span>
              <span className="trust-pill"><ShieldCheck size={14} /> Unverified listings never go live</span>
            </Reveal>
          </div>
        </section>
        <section className="spaces-section" id="spaces">
          <Reveal><div className="section-top"><div><p className="section-label">ONE PLATFORM. ENDLESS POSSIBILITIES.</p><h2>Whatever's next, there's a space for it.</h2></div><p>From everyday beginnings to once-in-a-lifetime moments. Find your kind of space.</p></div></Reveal>
          <Reveal delay={120}><div className="space-grid">{spaces.map((space, index) => <Button variant="space" key={space.name} onClick={() => selectSpace(index, true)} aria-label={`Preview ${space.category}`}><div className="space-image"><img src={space.image} alt={space.category} width={1024} height={768} loading="lazy" /><span className="space-tag"><space.icon size={12} />{space.category}</span><span className="space-verified"><ShieldCheck size={11} />Verified</span></div><div className="space-info"><div><h3>{space.title}</h3><p>{space.description}</p></div><ArrowUpRight className="space-arrow" /></div></Button>)}</div></Reveal>
        </section>
        <section className="bottom-banner"><div className="bottom-inner"><div><h2>Your space could be someone's perfect place.</h2><p>A little extra room. A whole lot of potential.</p></div><Dialog><DialogTrigger asChild><Button variant="brand">Have a space to share? <ArrowUpRight /></Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Your space. New possibilities.</DialogTitle><DialogDescription className="dialog-copy">We're getting RentMySpace ready for spaces to live, work, and celebrate. Property listings will open when we launch. Check back here for what's next.</DialogDescription></DialogHeader></DialogContent></Dialog></div></section>
      </main>
      <footer className="footer"><a className="footer-brand" href="#">RentMySpace<span className="text-primary">.</span></a><span>List. Rent. Find your space.</span><span>© {new Date().getFullYear()} RentMySpace. All rights reserved.</span></footer>
    </>
  );
}
