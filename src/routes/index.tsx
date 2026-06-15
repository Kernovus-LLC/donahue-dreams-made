import { createFileRoute } from "@tanstack/react-router";
import heroRoof from "@/assets/hero-roof.jpg";
import workCrew from "@/assets/work-crew.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Donahue Roofing & Construction | Lansing, MI Roofers" },
      {
        name: "description",
        content:
          "Donahue Roofing & Construction — honest, skilled roofing in Lansing, MI. Tear-offs, replacements, repairs. Free estimates. Call (517) 449-6450.",
      },
      { property: "og:title", content: "Donahue Roofing & Construction" },
      {
        property: "og:description",
        content: "Honest, skilled roofing in Lansing, MI. Free estimates.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "(517) 449-6450";
const PHONE_HREF = "tel:+15174496450";
const ADDRESS = "3249 S Washington Ave, Lansing, MI 48910";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-background">
          <div className="size-9 rounded-md bg-[var(--ember)] flex items-center justify-center font-black text-background">
            D
          </div>
          <span className="font-bold tracking-tight text-background">
            DONAHUE
            <span className="text-[var(--ember-glow)]">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-background/90">
          <a href="#services" className="hover:text-[var(--ember-glow)] transition">Services</a>
          <a href="#why" className="hover:text-[var(--ember-glow)] transition">Why Us</a>
          <a href="#reviews" className="hover:text-[var(--ember-glow)] transition">Reviews</a>
          <a href="#contact" className="hover:text-[var(--ember-glow)] transition">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="rounded-md bg-[var(--ember)] px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition shadow-[var(--shadow-ember)]"
        >
          {PHONE}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroRoof}
        alt="Freshly installed asphalt shingle roof at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-background backdrop-blur">
            <span className="size-1.5 rounded-full bg-[var(--ember-glow)]" />
            Lansing, Michigan · Since 2009
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-background leading-[0.95]">
            Roofs built to
            <br />
            <span className="text-[var(--ember-glow)] italic">outlast</span> the
            weather.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-background/80">
            Donahue Roofing & Construction is a small, owner-led crew known for
            honest quotes, sharp workmanship, and getting your roof done on
            time — and right.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={PHONE_HREF}
              className="rounded-md bg-[var(--ember)] px-6 py-3.5 text-sm font-semibold text-background hover:opacity-90 transition shadow-[var(--shadow-ember)]"
            >
              Get a Free Estimate
            </a>
            <a
              href="#services"
              className="rounded-md border border-background/40 px-6 py-3.5 text-sm font-semibold text-background hover:bg-background/10 transition"
            >
              See Our Work →
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-background/80">
            <Stars />
            <div className="text-sm">
              <span className="font-bold text-background">4.6 / 5</span> from 28
              Google reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[var(--ember-glow)]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-5">
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.6 7.6l5.8-.8z" />
        </svg>
      ))}
    </div>
  );
}

function TrustBar() {
  const items = [
    { k: "15+", v: "Years roofing Greater Lansing" },
    { k: "100%", v: "Tear-offs done in-house" },
    { k: "On-time", v: "Schedules we actually hit" },
    { k: "Honest", v: "Bids with no upsells" },
  ];
  return (
    <section className="bg-[var(--slate-deep)] text-background">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it) => (
          <div key={it.k}>
            <div className="text-3xl md:text-4xl font-black text-[var(--ember-glow)]">
              {it.k}
            </div>
            <div className="mt-1 text-sm text-background/70">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      n: "01",
      title: "Roof Replacement",
      body: "Full tear-off and re-roof with architectural shingles. We haul away the old roof, repair any deck damage we find, and leave your yard spotless.",
    },
    {
      n: "02",
      title: "Roof Repair",
      body: "Leaks, missing shingles, storm damage, flashing failures. We diagnose the cause — not just the symptom — and fix it for good.",
    },
    {
      n: "03",
      title: "Garage & Outbuildings",
      body: "Detached garages, sheds, additions. Same workmanship as the house, scoped and priced separately so you only pay for what you need.",
    },
    {
      n: "04",
      title: "Inspections & Estimates",
      body: "Buying or selling? Insurance claim? We give straight answers about what your roof actually needs — in writing, with photos.",
    },
  ];
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-semibold">
            What we do
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Residential roofing,
            <br />
            done the right way.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {services.map((s) => (
            <article
              key={s.n}
              className="bg-card p-8 md:p-10 hover:bg-secondary transition group"
            >
              <div className="flex items-baseline justify-between">
                <div className="text-xs font-mono text-muted-foreground">
                  {s.n}
                </div>
                <div className="h-px flex-1 ml-4 bg-border" />
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {s.body}
              </p>
              <div className="mt-6 text-sm font-semibold text-[var(--ember)] opacity-0 group-hover:opacity-100 transition">
                Ask about {s.title.toLowerCase()} →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    {
      t: "Owner on every job",
      b: "Shawn is on-site, on the phone, and accountable for the work. No call centers, no sales reps.",
    },
    {
      t: "Fair bids, no theatrics",
      b: "We come out, measure, and send a number. No sit-down presentations, no high-pressure closes.",
    },
    {
      t: "Crew that respects your home",
      b: "Punctual, tidy, and skilled. Tarps over landscaping, magnetic sweeps before we leave.",
    },
    {
      t: "We fix what others missed",
      b: "We routinely find and correct issues left behind by previous roofers — and price the repair honestly.",
    },
  ];
  return (
    <section id="why" className="bg-[var(--slate-deep)] text-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={workCrew}
            alt="Donahue roofing crew at work"
            width={1280}
            height={1280}
            loading="lazy"
            className="rounded-lg shadow-[var(--shadow-elevated)] aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-[var(--ember)] text-background px-6 py-5 rounded-md shadow-[var(--shadow-ember)] max-w-xs hidden md:block">
            <div className="text-3xl font-black">A+</div>
            <div className="text-sm">Workmanship rating from our neighbors</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--ember-glow)] font-semibold">
            Why Donahue
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            A small crew with a
            <span className="italic text-[var(--ember-glow)]"> long </span>
            list of happy neighbors.
          </h2>
          <p className="mt-6 text-background/75 text-lg">
            Twice named a Nextdoor Neighborhood Favorite. Backed by years of
            5-star reviews from Lansing-area homeowners.
          </p>
          <div className="mt-10 space-y-6">
            {points.map((p) => (
              <div key={p.t} className="flex gap-4">
                <div className="mt-1 size-6 shrink-0 rounded-full bg-[var(--ember)] flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="none" className="size-3.5 text-background">
                    <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-background">{p.t}</h3>
                  <p className="text-background/70 mt-1">{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      n: "Austin Brown",
      r: "Shawn came in well below other major roofing contractors when I was bidding out a new roof on my home. The price was fair and the work was excellent and completed on time.",
    },
    {
      n: "Brit Weber",
      r: "Shawn and his roofing team did an outstanding job replacing our roof. They identified problems previous roofers had let go and recommended fixes that took care of the problem. We couldn't have been happier.",
    },
    {
      n: "Nicholas",
      r: "Shawn and his crew completed a garage roof tear-off and replacement for me. Shawn was pleasant, communicative and fair. His crew were punctual, respectful and very skilled. Honest, great workers and workmanship!",
    },
  ];
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-semibold">
              From the neighbors
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
              Real reviews, real roofs.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars />
            <span className="font-bold">4.6</span>
            <span className="text-muted-foreground">· 28 Google reviews</span>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.n}
              className="bg-card border border-border rounded-xl p-7 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
                "{r.r}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border font-semibold">
                {r.n}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 text-background overflow-hidden"
      style={{ background: "var(--gradient-ember)" }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          Ready for a roof you can stop
          <br />
          worrying about?
        </h2>
        <p className="mt-6 text-background/90 text-lg max-w-2xl mx-auto">
          Call Shawn directly for a no-pressure, on-site estimate. Most
          properties in the Lansing area can be quoted within a few days.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="rounded-md bg-[var(--slate-deep)] px-8 py-4 text-base font-bold text-background hover:opacity-90 transition shadow-[var(--shadow-elevated)]"
          >
            📞 {PHONE}
          </a>
          <a
            href="mailto:info@donahueconstructioninc.com"
            className="rounded-md border-2 border-background px-8 py-4 text-base font-bold text-background hover:bg-background hover:text-[var(--ember)] transition"
          >
            ✉️ info@donahueconstructioninc.com
          </a>
        </div>
        <div className="mt-8 text-background/90 text-sm">{ADDRESS}</div>
      </div>
    </section>
  );
}




function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-background/70 py-12">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 text-background">
            <div className="size-8 rounded-md bg-[var(--ember)] flex items-center justify-center font-black">
              D
            </div>
            <span className="font-bold">Donahue Roofing & Construction</span>
          </div>
          <p className="mt-4">
            Honest, owner-led roofing for Lansing-area homeowners.
          </p>
        </div>
        <div>
          <div className="font-semibold text-background mb-3">Contact</div>
          <div>{ADDRESS}</div>
          <a href={PHONE_HREF} className="block mt-1 hover:text-[var(--ember-glow)]">
            {PHONE}
          </a>
          <a
            href="mailto:info@donahueconstructioninc.com"
            className="block mt-1 hover:text-[var(--ember-glow)]"
          >
            info@donahueconstructioninc.com
          </a>
        </div>
        <div>
          <div className="font-semibold text-background mb-3">Hours</div>
          <div>Mon–Sat · 8 AM – 8 PM</div>
          <div>Sunday · By appointment</div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-background/10 text-xs">
        © {new Date().getFullYear()} Donahue Roofing & Construction. All rights reserved.
      </div>
    </footer>
  );
}
