"use client";

import React, { useState } from "react";

/* === Brand assets & colors (edit here) ================== */
const LOGO_SRC = "/fsc-logo.png"; // your navbar/footer logo
const IVAO_PARTNER_SRC = "/ivao-partner-va.png"; // IVAO Partner VA badge
const YELLOW = "#F5C518";
const YELLOW_HOVER = "#E3B500";

/* =========================
   Navbar
   ========================= */
function NavBar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#team", label: "Meet The Team" },
    { href: "#content", label: "Content Page" },
    { href: "#join", label: "Come Join Us" },
    { href: "#rules", label: "Rules and Regulations" },
    { href: "#gdpr", label: "GDPR" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b1b2a]/60 bg-[#0b1b2a]/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            {/* Replace green dot with your logo */}
            <img src={LOGO_SRC} alt="Flight Sim Central" className="h-8 w-auto" />
            <span className="font-semibold tracking-tight text-slate-100">Flight Sim Central</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#F5C518] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-xl h-10 w-10 ring-1 ring-white/10 text-slate-200"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 text-slate-100">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* =========================
   Hero Media (video or image)
   ========================= */
function HeroMedia({
  videoUrl,
  imageUrl = "/hero.jpg",
  title = "Connecting simmers, mentoring pilots, building community.",
  subtitle = "Flight Sim Central — train, fly, and control together on IVAO.",
}: {
  videoUrl?: string;
  imageUrl?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="home" className="relative isolate">
      {/* Keep the blue-ish background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b2a] to-[#081826]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{title}</h1>
            <p className="mt-4 text-slate-300 leading-relaxed">{subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="px-5 py-3 rounded-xl font-semibold ring-1 ring-yellow-500 text-slate-900"
                style={{ backgroundColor: YELLOW }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = YELLOW_HOVER)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = YELLOW)}
              >
                Join via NewSky ACARS
              </a>
              <a
                href="#content"
                className="px-5 py-3 rounded-xl ring-1 text-slate-100 hover:bg-white/5"
                style={{ borderColor: YELLOW, boxShadow: `0 0 0 1px ${YELLOW} inset` }}
              >
                Explore Content
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-400">IVAO Partner Virtual Airline • Since 2025</div>
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden bg-slate-900/60 aspect-video">
            {videoUrl ? (
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="FSC Hero Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <img src={imageUrl} alt="Flight Sim Central" className="w-full h-full object-cover" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   NewSky Live Map (public token)
   ========================= */
function NewSkyMap({ style = "dark" as "light" | "dark" }) {
  const token = process.env.NEXT_PUBLIC_NEWSKY_MAP_TOKEN as string | undefined;
  const src = token
    ? `https://newsky.app/airline/public/map?style=${style}&token=${encodeURIComponent(token)}`
    : null;

  return (
    <section id="map" className="bg-[#081826] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Live Map</h2>
        <p className="mt-2 text-slate-300">Live flights on the NewSky network.</p>

        <div className="mt-4 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/60">
          {src ? (
            <iframe
              src={src}
              title="NewSky Live Map"
              className="w-full"
              style={{ height: "70vh", border: 0 }}
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="p-6 text-sm text-rose-200 bg-rose-500/10 border border-rose-400/30">
              Missing <code className="font-mono">NEXT_PUBLIC_NEWSKY_MAP_TOKEN</code>. Add it to <code>.env.local</code> and
              restart the dev server.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Content Sections
   ========================= */
   // =======================
// Helper component first
// =======================
function StatusBadge({ vid, name }: { vid: string; name: string }) {
  const primary = `https://status.ivao.aero/R/${vid}.png`;
  const fallback = `https://status.ivao.aero/${vid}.png`;
  const profile = `https://www.ivao.aero/members/person/details.asp?ID=${vid}`;

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const el = e.currentTarget;
    if (el.src !== fallback) el.src = fallback;
  };

  return (
    <a href={profile} target="_blank" rel="noreferrer" className="block mt-3">
      <img
        src={primary}
        onError={handleError}
        alt={`IVAO Status ${name}`}
        className="mx-auto rounded-md border border-white/10 shadow-sm max-w-[240px]"
      />
    </a>
  );
}

// =======================
// Then your main section
// =======================
function Team() {
  const people = [
    {
      name: "Paul",
      role: "Co-Founder / Admin",
      img: "https://i.postimg.cc/kGynGL0w/2.jpg",
      vid: "681910",
    },
    {
      name: "Anesh",
      role: "Co-Founder / Admin",
      img: "https://i.postimg.cc/brRzr47T/1.jpg",
      vid: "720538",
    },
    {
      name: "Abdellah",
      role: "Webmaster",
      img: "https://i.postimg.cc/brRzr47H/3.jpg",
      vid: "710267",
    },
  ];

  return (
    <section id="team" className="bg-[#081826] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Meet The Team</h2>
        <p className="mt-2 text-slate-300">Volunteers who keep the skies moving.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl bg-slate-900/70 border border-white/10 p-6 flex flex-col items-center text-center"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-24 w-24 rounded-full ring-2 ring-white/10 object-cover"
              />
              <div className="mt-4">
                <div className="font-semibold text-slate-100 text-lg">{p.name}</div>
                <div className="text-sm text-slate-400">{p.role}</div>
              </div>

              {/* IVAO badge (clickable) */}
              <StatusBadge vid={p.vid} name={p.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentPage() {
  const creators = [
    {
      name: "Scottish Controller",
      realName: "Paul R.",
      role: "Co-Founder / ATC & Training Content",
      img: "https://i.postimg.cc/nL46Yqzp/SC-V7-FINAL.png", // replace with his actual banner or Twitch/YouTube avatar
      link: "https://twitch.tv/scottish_controller",  // update with correct link
      bio: "From the Scottish Highlands, IVAO Approach Controller (APC) and a Private Pilot (PP), Current IVAO US Division Member, IVAO Creator Partnership Team. IVAO New York ARTCC Assistant Chief. IVAO United States Assistant Event Coordinator. An Aviation enthusiast since meeting his plane building father-in-law.",
    },
    {
      name: "Luuminator",
      realName: "Doug G.",
      role: "Pilot & Events Creator",
      img: "https://i.postimg.cc/rp1vC5mk/Luuminator-Blue-2.png",
      link: "https://twitch.tv/luuminator", // update if needed
      bio: "Luumi shares high-quality flight sim content flying his DAL420, controlling Gander/Shanwick Radio, Luumi is also the Cleveland ARTCC Chief and active on the IVAO U.S Division, he is also a Division Trainer & OCC instructor (yikes), watch out for flashing lights when they're streaming!",
    },
  ];

  return (
    <section id="content" className="bg-[#081826] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Our Content Creators</h2>
        <p className="mt-2 text-slate-300">
          Flight Sim Central proudly partners with talented streamers and educators who bring the virtual skies to life.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {creators.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden hover:ring-2 hover:ring-[#F5C518]/60 transition-all"
            >
              <img src={c.img} alt={c.name} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{c.name}</h3>
                <p className="text-sm text-slate-400">{c.realName} • {c.role}</p>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">{c.bio}</p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 px-4 py-2 rounded-lg font-semibold text-slate-900"
                  style={{ backgroundColor: "#F5C518" }}
                >
                  Watch Live →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="bg-[#081826] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Come Join Us</h2>
        <p className="mt-2 text-slate-300">Get started using NewSky ACARS in a few minutes.</p>
        <ol className="mt-8 space-y-4 text-slate-300">
          <li className="flex gap-3">
            <span
              className="h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold"
              style={{ backgroundColor: YELLOW }}
            >
              1
            </span>
            Create a NewSky account and search for <span className="font-semibold text-slate-100">Flight Sim Central</span> VA.
          </li>
          <li className="flex gap-3">
            <span
              className="h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold"
              style={{ backgroundColor: YELLOW }}
            >
              2
            </span>
            Apply to join our VA. Our staff approves daily.
          </li>
          <li className="flex gap-3">
            <span
              className="h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold"
              style={{ backgroundColor: YELLOW }}
            >
              3
            </span>
            Download the NewSky ACARS client from your portal.
          </li>
          <li className="flex gap-3">
            <span
              className="h-7 w-7 flex items-center justify-center rounded-full text-slate-900 font-bold"
              style={{ backgroundColor: YELLOW }}
            >
              4
            </span>
            Book a flight and connect to <span className="font-semibold text-slate-100">IVAO</span>. You’re airborne!
          </li>
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://newsky.app/airline/xfs"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl font-semibold text-slate-900"
            style={{ backgroundColor: YELLOW, boxShadow: `0 0 0 1px ${YELLOW} inset` }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = YELLOW_HOVER)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = YELLOW)}
          >
            Open NewSky
          </a>
          <a
            href="#content"
            className="px-5 py-3 rounded-xl text-slate-100 hover:bg-white/5"
            style={{ borderColor: YELLOW, boxShadow: `0 0 0 1px ${YELLOW} inset` }}
          >
            View Our SOPs
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Note: Integrate live stats using NewSky API (flights, awards, pilots) once keys are configured.
        </p>
      </div>
    </section>
  );
}

function Rules() {
  return (
    <section id="rules" className="bg-[#081826] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Rules &amp; Regulations</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          Professionalism and realism define Flight Sim Central.  
          Our Rules & Regulations outline pilot standards, conduct expectations, and network policies that ensure
          a safe, respectful, and immersive community.
        </p>
        <div className="mt-6">
          <a
            href="/rules"
            className="inline-block px-5 py-3 rounded-xl font-semibold text-slate-900"
            style={{ backgroundColor: "#F5C518" }}
          >
            View Full Rules & Regulations →
          </a>
        </div>
      </div>
    </section>
  );
}


function GDPR() {
  return (
    <section id="gdpr" className="bg-[#081826] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">GDPR & Privacy Policy</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          We value your privacy and comply with GDPR and international data protection standards.
          Read our full GDPR and data-handling policy to understand how we manage your information.
        </p>
        <div className="mt-6">
          <a
            href="/gdpr"
            className="inline-block px-5 py-3 rounded-xl font-semibold text-slate-900"
            style={{ backgroundColor: "#F5C518" }}
          >
            View Full GDPR Policy →
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Footer (with logo + IVAO Partner VA badge)
   ========================= */
   function Footer() {
    return (
      <footer className="bg-[#081826] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* --- Left: Logos --- */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Main Logo */}
            <img
              src="/fsc-logo.png"
              alt="Flight Sim Central Logo"
              className="h-12 w-auto"
            />
  
            {/* IVAO Partner VA Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/ivao-partner-va.png"
                alt="IVAO Partner VA"
                className="h-10 w-auto"
              />
              <span className="text-xs text-slate-400">
                IVAO Partner Virtual Airline • Since 2025
              </span>
            </div>
          </div>
  
          {/* --- Center: Quick Links --- */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-[#F5C518] transition-colors">
              Home
            </a>
            <a href="#team" className="hover:text-[#F5C518] transition-colors">
              Team
            </a>
            <a href="#content" className="hover:text-[#F5C518] transition-colors">
              Content
            </a>
            <a href="#join" className="hover:text-[#F5C518] transition-colors">
              Join Us
            </a>
            <a href="/rules" className="hover:text-[#F5C518] transition-colors">
              Rules
            </a>
            <a href="/gdpr" className="hover:text-[#F5C518] transition-colors">
              GDPR
            </a>
          </div>
  
          {/* --- Right: Discord Button --- */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://discord.gg/rdUUbNyHCY"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-xl font-semibold bg-[#5865F2] text-white hover:bg-[#4752C4] transition-colors"
            >
              Join Discord
            </a>
            <p className="text-xs text-slate-400 sm:ml-2">
              Community & Support
            </p>
          </div>
        </div>
  
        {/* --- Bottom Bar --- */}
        <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Flight Sim Central — All rights reserved.
          &nbsp;|&nbsp;
          <a
            href="https://www.ivao.aero/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5C518]"
          >
            IVAO Network
          </a>
        </div>
      </footer>
    );
  }  

/* =========================
   Page
   ========================= */
export default function Page() {
  return (
    <div className="min-h-screen bg-[#081826] text-slate-100">
      <NavBar />
      <HeroMedia
        // If you want video, set videoUrl and remove imageUrl
        // videoUrl="https://www.youtube.com/embed/XXXXXXXX?rel=0&modestbranding=1"
        imageUrl="/hero.jpg"
        title="Connecting simmers, mentoring pilots, building community."
        subtitle="Flight Sim Central — train, fly, and control together on IVAO."
      />
      <NewSkyMap style="dark" />
      <Team />
      <ContentPage />
      <Join />
      <Rules />
      <GDPR />
      <Footer />
    </div>
  );
}