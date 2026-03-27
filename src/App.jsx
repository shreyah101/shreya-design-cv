// ╔══════════════════════════════════════════════════════════════════╗
// ║  Shreya Sundli — Design Portfolio                               ║
// ║  src/App.jsx                                                    ║
// ║                                                                 ║
// ║  SETUP (run once in terminal):                                  ║
// ║  1. npm create vite@latest shreya-portfolio -- --template react ║
// ║  2. cd shreya-portfolio && npm install                          ║
// ║  3. npm install -D tailwindcss postcss autoprefixer             ║
// ║  4. npx tailwindcss init -p                                     ║
// ║  5. Replace src/App.jsx, src/index.css, index.html              ║
// ║  6. npm run dev                                                 ║
// ║                                                                 ║
// ║  IMAGE SETUP:                                                   ║
// ║  → Place all images in: /public/images/                        ║
// ║  → Update each `image:` path in PROJECTS below                 ║
// ╚══════════════════════════════════════════════════════════════════╝

import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// Place images in /public/images/ and update the `image` paths below.
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Branding",
    tag: "BRAND",
    image: "/images/brand-kacheri.jpg",        // ← Replace with your filename
    accent: "#D4A896",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective:
      "Establish a cohesive visual identity for a legal-content startup across all digital touchpoints.",
    tools: ["Figma", "Adobe Illustrator", "Canva"],
    outcome:
      "Delivered 30+ brand-aligned assets; social media engagement increased by 40%.",
  },
  {
    id: 2,
    title: "Event Poster Series",
    category: "Print & Posters",
    tag: "PRINT",
    image: "/images/poster-pixelate.jpg",       // ← Replace with your filename
    accent: "#A8C2B4",
    year: "2024–25",
    org: "Pixelate Design Club, VIT",
    objective:
      "Design a bold poster series for VIT's flagship design workshops that captures creative energy.",
    tools: ["Figma", "Canva"],
    outcome:
      "Posters reached 180+ attendees and became the club's ongoing visual standard.",
  },
  {
    id: 3,
    title: "Social Media Creatives",
    category: "Social Media",
    tag: "SOCIAL",
    image: "/images/social-creatives.jpg",      // ← Replace with your filename
    accent: "#A49BC4",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective:
      "Create scroll-stopping content for LinkedIn and Instagram that reinforces brand storytelling.",
    tools: ["Canva", "Figma", "Adobe Photoshop"],
    outcome:
      "Consistently high-performing creatives; became the visual voice of the brand online.",
  },
  {
    id: 4,
    title: "Mobile UI/UX Case Study",
    category: "UI/UX Design",
    tag: "UI/UX",
    image: "/images/uiux-app.jpg",              // ← Replace with your filename
    accent: "#8FAEC4",
    year: "2025",
    org: "Personal Project",
    objective:
      "Design an intuitive mobile app experience grounded in user research and end-to-end UX flows.",
    tools: ["Figma", "FigJam", "Maze"],
    outcome:
      "Prototype validated through user testing; achieved 92% task completion rate.",
  },
  {
    id: 5,
    title: "Event Visual Identity",
    category: "Event Design",
    tag: "EVENT",
    image: "/images/event-design.jpg",          // ← Replace with your filename
    accent: "#C4B08A",
    year: "2024–25",
    org: "ISA VIT & Pixelate",
    objective:
      "Create immersive event identity systems — banners, standees, and digital decks — for college fests.",
    tools: ["Figma", "Canva", "Adobe Photoshop"],
    outcome:
      "Visual systems deployed across 5+ fests, reaching thousands of students across VIT.",
  },
  {
    id: 6,
    title: "Motion Templates",
    category: "Motion & Reels",
    tag: "MOTION",
    image: "/images/motion-reels.jpg",          // ← Replace with your filename
    accent: "#C49AB4",
    year: "2025",
    org: "Freelance",
    objective:
      "Build dynamic, reusable visual templates for short-form video content and Instagram Reels.",
    tools: ["Canva", "CapCut", "Adobe Premiere"],
    outcome:
      "20+ reels produced using templates; video engagement improved by 60%.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE DATA
// ─────────────────────────────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    role: "Design Head",
    org: "Indian Society of Automation, VIT",
    type: "Leadership",
    period: "Jan 2026 – Present",
    description:
      "Leading the visual design strategy for ISA VIT - managing event graphics, club branding, and creative campaigns for a 100+ member organization. Overseeing all design output from conception to delivery.",
    highlights: ["100+ members", "12+ campaigns", "3 major events"],
  },
  {
    role: "Graphic Design & UI/UX Intern",
    org: "Kacheri Diaries LLP",
    type: "Internship · Gurugram (Remote)",
    period: "Mar 2025 – Present",
    description:
      "Designing high-impact visuals and UI elements for a legal-content startup. Building brand-aligned assets that simplify complex legal ideas for digital audiences across LinkedIn and Instagram.",
    highlights: ["30+ brand assets", "40% engagement uplift", "Full brand system"],
  },
  {
    role: "Core Committee - Design",
    org: "Pixelate Design Club, VIT",
    type: "Extracurricular",
    period: "Mar 2025 – Present",
    description:
      "Organizing hands-on Figma workshops, maintaining club visual identity, and producing event graphics for VIT's premier design community. One of four core leads managing the creative direction.",
    highlights: ["180+ workshop participants", "25+ design assets", "1+ yrs active"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MODAL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-inner">
          {/* ── Image ── */}
          <div
            className="modal-image-wrap"
            style={{ background: project.accent + "55" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="modal-img"
              onError={(e) => (e.target.style.display = "none")}
            />
            {/* Placeholder shown if image fails to load */}
            <div className="modal-img-placeholder">
              <span>{project.category}</span>
            </div>
          </div>

          {/* ── Details ── */}
          <div className="modal-details">
            <span className="modal-tag">{project.tag}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-org">
              {project.org} · {project.year}
            </p>

            <div className="modal-block">
              <h4>Objective</h4>
              <p>{project.objective}</p>
            </div>

            <div className="modal-block">
              <h4>Tools Used</h4>
              <div className="tool-list">
                {project.tools.map((t) => (
                  <span key={t} className="tool-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-block">
              <h4>Outcome / Impact</h4>
              <p>{project.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function GalleryCard({ project, onClick }) {
  return (
    <article className="g-card" onClick={() => onClick(project)}>
      {/* Image area */}
      <div
        className="g-card-img-wrap"
        style={{ background: project.accent + "44" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="g-card-img"
          onError={(e) => (e.target.style.display = "none")}
        />
        <div className="g-card-hover-layer">
          <span className="g-view-cta">View Project →</span>
        </div>
      </div>

      {/* Footer */}
      <div className="g-card-meta">
        <span className="g-card-pill">{project.tag}</span>
        <span className="g-card-year">{project.year}</span>
      </div>
      <h3 className="g-card-title">{project.title}</h3>
      <p className="g-card-cat">{project.category}</p>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar becomes solid on scroll + fade-in animations
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ════════════════════ NAV ════════════════════ */}
      <nav className={`site-nav ${navSolid ? "nav-solid" : ""}`}>
        <div className="nav-wrap">
          <a href="#" className="nav-logo">S.</a>

          {/* Desktop links */}
          <div className="nav-links-desktop">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta-btn">Let's Talk</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? "open" : ""} />
            <span className={menuOpen ? "open" : ""} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="nav-mobile-menu">
            {["#work", "#experience", "#about", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {href.replace("#", "").charAt(0).toUpperCase() +
                  href.replace("#", "").slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Portfolio · 2026</p>
          <h1 className="hero-name">
            Shreya<br />Sundli
          </h1>
          <div className="hero-rule" />
          <p className="hero-role">UI/UX &amp; Visual Designer</p>
          <p className="hero-tagline">
            Turning ideas into visual stories<br />
            that resonate and convert.
          </p>
          <div className="hero-btns">
            <a href="#work" className="btn-fill">View My Work</a>
            {/* Replace Shreya_Sundli_Resume.pdf with your actual resume filename in /public/ */}
            <a
              href="/shreya_resume.pdf"
              download
              className="btn-outline"
            >
              Resume ↓
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-bar" />
        </div>

        {/* Decorative floating tag */}
        <div className="hero-float-tag">
          <span>Open to Work ✦</span>
        </div>
      </section>

      {/* ════════════════════ GALLERY ════════════════════ */}
      <section className="section-gallery" id="work">
        <div className="sec-header fade-up">
          <span className="sec-label">Selected Work</span>
          <h2 className="sec-heading">Design Projects</h2>
        </div>

        <div className="gallery-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="fade-up"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <GalleryCard project={p} onClick={setActiveProject} />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ EXPERIENCE ════════════════════ */}
      <section className="section-exp" id="experience">
        <div className="sec-header fade-up">
          <span className="sec-label">Background</span>
          <h2 className="sec-heading">Experience</h2>
        </div>

        <div className="exp-list">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="exp-row fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="exp-left">
                <span className="exp-type">{exp.type}</span>
                <span className="exp-period">{exp.period}</span>
              </div>
              <div className="exp-right">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-org">{exp.org}</p>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-pills">
                  {exp.highlights.map((h) => (
                    <span key={h} className="exp-pill">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ ABOUT ════════════════════ */}
      <section className="section-about" id="about">
        <div className="about-wrap">
          {/* Photo — replace /images/shreya-photo.jpg in /public/images/ */}
          <div className="about-img-wrap fade-up">
            <img
              src="/images/shreya-photo.jpg"   // ← Replace with your photo filename
              alt="Shreya Sundli"
              className="about-photo"
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="about-photo-fallback">SS</div>
          </div>

          <div className="about-text fade-up">
            <span className="sec-label">About Me</span>
            <h2 className="about-heading">
              Design is how I<br />make sense of the world.
            </h2>
            <p>
              I'm Shreya - a Computer Science student at VIT Vellore with a deep love
              for visual design, UX thinking, and brand storytelling. I believe great
              design isn't just beautiful; it solves problems, tells stories, and
              creates feelings that last.
            </p>
            <p>
              From crafting brand identities to designing end-to-end mobile UI flows,
              I bring both analytical thinking and creative intuition to every project.
              Currently exploring the intersection of Web3 and design as a SheFi
              Season 15 Scholar.
            </p>
            <div className="about-tags">
              {[
                "Figma",
                "Canva",
                "UI/UX",
                "Branding",
                "Illustration",
                "Motion",
                "HTML/CSS",
                "React",
              ].map((s) => (
                <span key={s} className="about-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ CONTACT ════════════════════ */}
      <section className="section-contact" id="contact">
        <div className="contact-wrap fade-up">
          <span className="sec-label sec-label-light">Get In Touch</span>
          <h2 className="contact-heading">
            Let's make something
            <br />
            <em>great</em> together.
          </h2>
          <a
            href="mailto:shreyasundliwork@gmail.com"
            className="contact-email"
          >
            shreyasundliwork@gmail.com
          </a>
          <div className="contact-links">
            <a
              href="https://linkedin.com/in/shreya-sundli-aa899a330"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:shreyasundliwork@gmail.com">Email ↗</a>
            {/* Replace Shreya_Sundli_Resume.pdf with your resume filename */}
            <a href="/shreya_resume.pdf" download>
              Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer className="site-footer">
        <span>© 2026 Shreya Sundli</span>
        <span>Designed with intention ✦</span>
      </footer>

      {/* ════════════════════ MODAL ════════════════════ */}
      {activeProject && (
        <Modal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}