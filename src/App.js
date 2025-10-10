import React, { useEffect, useRef } from "react";
import "./App.css";
import avatar from "./assets/avatar.jpg"; // ← только этот import

export default function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    // стартовая анимация страницы
    const el = rootRef.current;
    const t = setTimeout(() => el && el.classList.add("page--ready"), 50);

    // плавное появление блоков по скроллу
    const nodes = document.querySelectorAll(".reveal, .reveal-title");
    let obs = null;

    if ("IntersectionObserver" in window) {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      nodes.forEach((n) => obs.observe(n));
    } else {
      nodes.forEach((n) => n.classList.add("in"));
    }

    return () => {
      clearTimeout(t);
      if (obs) obs.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef} className="resume-grid page-enter">
      {/* LEFT: dark column spans whole height */}
      <aside className="left-rail intro-left">
        <div className="avatar-wrap intro-pop">
          <img src={avatar} alt="Iuliia Poliakova" className="profile-photo" />
        </div>

        <p className="band-role intro-up">Automation &amp; Integration Developer</p>
        <span className="band-underline grow-on-load" />

        <div className="contact-block intro-up">
          <h2 className="section-title reveal-title">Portfolio</h2>
          <div className="links stagger">
            <a
              href="https://www.linkedin.com/in/iuliiapolialova"
              target="_blank"
              rel="noreferrer"
              className="link-btn pulse"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/polyulia85/demo_booking"
              target="_blank"
              rel="noreferrer"
              className="link-btn two-line pulse"
              title="Source code of the Demo Booking project on GitHub"
              aria-label="Demo Booking project code on GitHub"
            >
              <span className="btn-title">Demo Booking</span>
              <span className="btn-sub">GitHub</span>
            </a>

            <a
              href="https://voyage-co.com"
              target="_blank"
              rel="noreferrer"
              className="link-btn pulse"
            >
              Voyage&nbsp;Co
            </a>

            <a
              href="https://voyage-co.com/landing-prepurchase-lite"
              target="_blank"
              rel="noreferrer"
              className="link-btn pulse"
            >
              Landing&nbsp;Page
            </a>
          </div>
        </div>

        {/* SKILLS */}
        <section className="intro-up">
          <h2 className="section-title reveal-title">Skills</h2>
          <ul className="plain-list">
            <li>
              <strong>Frontend:</strong> HTML, CSS, basic JavaScript, flatpickr, Framer Motion
            </li>
            <li>
              <strong>Backend/Integration:</strong> WordPress, AJAX, REST API
            </li>
            <li>
              <strong>CRM &amp; Automation:</strong> HubSpot CRM, custom workflows, Stripe API
            </li>
            <li>
              <strong>Analytics:</strong> GA4, Tag Manager, Clarity
            </li>
            <li>
              <strong>AI:</strong> ChatGPT, prompt engineering
            </li>
            <li>
              <strong>In Progress:</strong> Twilio (chat/voice bot automation), reCAPTCHA
            </li>
            <li>
              <strong>Tools:</strong> GitHub (demo_booking), VS Code
            </li>
            <li>
              <strong>Business Ops:</strong> Process design, workflow optimization, customer journey mapping
            </li>
          </ul>
        </section>

        {/* LANGUAGES */}
        <section className="languages-section intro-up">
          <h2 className="section-title reveal-title">Languages</h2>
          <ul className="plain-list">
            <li>Russian — native</li>
            <li>English — intermediate</li>
          </ul>
        </section>
      </aside>

      {/* TOP RIGHT: beige name banner */}
      <header className="top-band">
        <div className="band-inner intro-top">
          <h1 className="band-name reveal-title">IULIIA POLIAKOVA</h1>
          <span className="band-underline grow-on-load" />
          <p className="band-contacts">
            555 Palm Ave, #206 • Millbrae, CA 94030 &nbsp;/&nbsp;
            <a href="mailto:polyulia85@gmail.com">polyulia85@gmail.com</a>
            &nbsp;/&nbsp;
            <a href="tel:+16283581318">+1 628-358-1318</a>
          </p>
        </div>
      </header>

      {/* BOTTOM RIGHT: main content */}
      <main className="content">
        <section>
          <h2 className="hline reveal-title">Summary</h2>
          <p className="reveal" data-delay="100">
           In the past two years in the U.S., I designed, coded, and launched <strong>voyage-co.com</strong> — a
    multifunctional automotive platform that unites <strong>car rentals, pre-purchase
    inspections, and repair services</strong>. I managed the complete product
    lifecycle — from UX/UI design and a custom multi-step booking flow to
    <strong> HubSpot CRM</strong>, <strong>Stripe</strong> integrations, <strong>GA4</strong> and <strong>Tag Manager</strong> analytics,
    and SEO optimization. These are live, client-facing systems that operate
    daily and generate revenue. With a strong background in management,
    marketing, and process development, I combine product thinking,
    analytical strategy, and hands-on technical execution to build systems
    that are clear, scalable, and user-focused.
          </p>
        </section>

        <section>
          <h2 className="hline reveal-title">Experience</h2>
          <h3 className="reveal" data-delay="100">Voyage Co — Founder / Operations &amp; Automation Lead</h3>
          <p className="meta reveal" data-delay="150">Millbrae, CA • 2023 — Present</p>
          <ul className="reveal reveal-list" data-delay="200">
            <li>Designed a 6-step booking flow with validation and dynamic confirmation.</li>
            <li>Built HubSpot integration (contacts/deals, custom properties, timestamps).</li>
            <li>Integrated Stripe PaymentIntent (client + server) for secure payments.</li>
            <li>Implemented GA4, GTM, Clarity; created an end-to-end booking funnel.</li>
            <li>Developing Twilio chat/voice workflows with CRM sync and confirmations.</li>
            <li>Used AI tools for content, validation, and comms templates.</li>
            <li>SEO on pre-purchase keywords boosted visibility and organic traffic.</li>
          </ul>
        </section>

        <section>
          <h2 className="hline reveal-title">Previous International Experience (Russia, 2005–2023)</h2>
          <p className="meta reveal" data-delay="100">15+ years in sales, business operations, and management.</p>
          <ul className="reveal reveal-list" data-delay="200">
            <li>Founded and scaled 2 businesses (auto repair center &amp; financial brokerage).</li>
            <li>10+ years of leadership experience in banking and automotive industries.</li>
            <li>Specialized in sales strategy, client operations, and team management.</li>
          </ul>
        </section>

        <section>
          <h2 className="hline reveal-title">Education</h2>
          <ul className="reveal reveal-list" data-delay="100">
            <li>
              <strong>North Caucasus Social University</strong> — Bachelor’s in Economics
              <div className="meta">Stavropol, Russia • 2004–2007</div>
            </li>
            <li>
              <strong>Stavropol College of Computer Engineering &amp; Electronics</strong> — Bank Specialist
              <div className="meta">Stavropol, Russia • 2001–2004</div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="hline reveal-title">Key Achievements</h2>
          <ul className="reveal reveal-list" data-delay="100">
            <li>Launched voyage-co.com (booking &amp; rental platform) from scratch.</li>
            <li>Built a dedicated landing page to improve lead conversion.</li>
            <li>End-to-end ecosystem: HubSpot, Stripe, GA4/GTM, Clarity, SEO.</li>
            <li>Custom multi-step booking UX with modern validation and UI.</li>
            <li>Previously founded/scaled two repair centers and a fintech service in Russia.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
