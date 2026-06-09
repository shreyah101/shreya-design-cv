import { useState, useEffect } from "react";

// ─── PROJECT DATA ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 10,
    title: "Joker: Requiem Movie Poster",
    category: "Poster Design",
    tag: "POSTER",
    image: "/images/JOKER  requiem.png",
    images: [
      "/images/JOKER  requiem.png"
    ],
    accent: "#5C1318",
    year: "2024",
    org: "Pixelate Design Competition",
    objective: "Create a cinematic poster for a fictional movie 'Joker: Requiem' emphasizing dark, dramatic lighting and psychological depth.",
    tools: [
      "Adobe Photoshop",
      "Lightroom"
    ],
    outcome: "Produced a highly striking conceptual movie poster with custom typography and advanced compositing techniques."
  },
  {
    id: 1,
    title: "Porsche & Red Bull Motorsport Posters",
    category: "Graphic Design",
    tag: "GRAPHIC",
    image: "/images/car 2.png",
    images: [
      "/images/car 2.png",
      "/images/car 3.png",
      "/images/car 4.png",
      "/images/car 5.png",
      "/images/car 6.png",
      "/images/car 7.png"
    ],
    accent: "#8FAEC4",
    year: "2024",
    org: "Personal Project",
    objective: "Design a series of bold, high-contrast wallpapers and posters showcasing the Porsche 911 GT3 RS, Porsche GTS, and Red Bull Racing.",
    tools: [
      "Adobe Photoshop",
      "Lightroom"
    ],
    outcome: "Created premium wallpapers with custom typography, lighting effects, and motorsport aesthetics."
  },
  {
    id: 11,
    title: "404 Mobile Error Page",
    category: "UI/UX Design",
    tag: "MOBILE",
    image: "/images/404 ERROR !.png",
    images: [
      "/images/404 ERROR !.png"
    ],
    accent: "#D94A4A",
    year: "2025",
    org: "Personal Project",
    objective: "Design an engaging and creative 404 error page specifically optimized for mobile interfaces.",
    tools: [
      "Figma"
    ],
    outcome: "Created a visually pleasing error state that guides users back home smoothly."
  },
  {
    id: 12,
    title: "404 Desktop Error Page",
    category: "UI/UX Design",
    tag: "WEB",
    image: "/images/THIS PAGE DOES NOT EXIST.png",
    images: [
      "/images/THIS PAGE DOES NOT EXIST.png"
    ],
    accent: "#E2A96B",
    year: "2025",
    org: "Personal Project",
    objective: "Design a vast, empty-state 404 page for web/laptop screens that feels intentional and beautiful.",
    tools: [
      "Figma"
    ],
    outcome: "Developed an artistic web error layout emphasizing negative space and clear typography."
  },
  {
    id: 5,
    title: "Women's Day Creatives",
    category: "Social Media Design",
    tag: "SOCIAL",
    image: "/images/women 1.png",
    images: [
      "/images/women 1.png"
    ],
    accent: "#C49AB4",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective: "Create expressive social media creatives that celebrate female legal minds.",
    tools: [
      "Figma",
      "Canva"
    ],
    outcome: "Produced beautiful design variants aligned with the startup's visual voice."
  },
  {
    id: 8,
    title: "Environment Day Story",
    category: "Social Media Design",
    tag: "SOCIAL",
    image: "/images/EnvDay.png",
    images: [
      "/images/EnvDay.png"
    ],
    accent: "#6BA876",
    year: "2024",
    org: "Pixelate Design Club",
    objective: "Create an engaging Instagram story post for Environment Day.",
    tools: [
      "Figma"
    ],
    outcome: "Designed a visually compelling social media story graphic to raise environmental awareness."
  },
  {
    id: 7,
    title: "The Legal Impact Summit 2025",
    category: "Event Poster",
    tag: "EVENT",
    image: "/images/legal 1.jpeg",
    images: [
      "/images/legal 1.jpeg"
    ],
    accent: "#C55A3A",
    year: "2025",
    org: "Masters' Union & ILTN",
    objective: "Create an official event poster for The Legal Impact Summit 2025, coordinating brand guidelines of Masters' Union, HaqSe, and ILTN.",
    tools: [
      "Figma",
      "Adobe Illustrator"
    ],
    outcome: "Designed a clean, professional poster displayed online and across campus, attracting over 200 attendees."
  },
  {
    id: 9,
    title: "IEEE Landing Page",
    category: "UI/UX Design",
    tag: "WEB",
    image: "/images/IEEE website landing page.png",
    images: [
      "/images/IEEE website landing page.png"
    ],
    accent: "#3A73B8",
    year: "2024",
    org: "IEEE Student Branch",
    objective: "Design a clean, professional, and tech-forward landing page interface for the IEEE student branch website.",
    tools: [
      "Figma",
      "UI/UX"
    ],
    outcome: "Delivered a modern landing page wireframe and UI that improves user navigation and event discovery."
  },
  {
    id: 13,
    title: "Podcast Series Promos",
    category: "Social Media Design",
    tag: "SOCIAL",
    image: "/images/podcast 1.png",
    images: [
      "/images/podcast 1.png",
      "/images/podcast 2.png",
      "/images/podcast 3.png"
    ],
    accent: "#83A2A8",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective: "Design an Instagram post series promoting upcoming legal podcast episodes featuring industry guests.",
    tools: [
      "Figma",
      "Canva"
    ],
    outcome: "Produced a cohesive 3-part promo series that unified the podcast's visual identity."
  },
  {
    id: 14,
    title: "War Legal Awareness",
    category: "Social Media Campaign",
    tag: "CAMPAIGN",
    image: "/images/war 1.png",
    images: [
      "/images/war 1.png",
      "/images/war 2.png",
      "/images/war 3.png"
    ],
    accent: "#A84C3F",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective: "Create an impactful carousel addressing the legal implications of international conflicts and wartime law.",
    tools: [
      "Figma"
    ],
    outcome: "Delivered a dramatic, thought-provoking 3-slide visual essay that resonated with legal audiences."
  },
  {
    id: 15,
    title: "Meet The Team Post",
    category: "Social Media Design",
    tag: "SOCIAL",
    image: "/images/MEET.png",
    images: [
      "/images/MEET.png"
    ],
    accent: "#D6B573",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective: "Design a warm, welcoming introductory post for the organization's team members.",
    tools: [
      "Figma",
      "Canva"
    ],
    outcome: "Created an elegant profile template that highlights the team's human side while keeping the professional brand."
  },
  {
    id: 2,
    title: "Kacheri Diaries Social Media Carousels",
    category: "Social Media / Branding",
    tag: "SOCIAL",
    image: "/images/law 1.png",
    images: [
      "/images/law 1.png",
      "/images/law 3.png",
      "/images/law 4.png",
      "/images/law 5.png"
    ],
    accent: "#D4A896",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective: "Create thought-provoking engagement carousels for LinkedIn and Instagram asking users critical questions.",
    tools: [
      "Figma",
      "Canva"
    ],
    outcome: "Designed high-impact slides with uniform branding that generated substantial user discussion."
  },
  {
    id: 3,
    title: "Pregnancy Termination Law",
    category: "Social Media Campaign",
    tag: "CAMPAIGN",
    image: "/images/preg 1.png",
    images: [
      "/images/preg 1.png",
      "/images/preg 2.png",
      "/images/preg 3.png",
      "/images/preg 4.png"
    ],
    accent: "#C4B08A",
    year: "2025",
    org: "Kacheri Diaries LLP",
    objective: "Develop an educational Instagram carousel explaining the Supreme Court's landmark ruling.",
    tools: [
      "Figma",
      "Canva"
    ],
    outcome: "Created a 4-slide legal awareness post that simplified complex rights for a lay audience."
  },
  {
    id: 4,
    title: "Ayush Chandra Speaker Poster",
    category: "Poster Design",
    tag: "POSTER",
    image: "/images/ayush 1.png",
    images: [
      "/images/ayush 1.png"
    ],
    accent: "#A8C2B4",
    year: "2024",
    org: "Professional Branding",
    objective: "Design clean and professional promotional posters to introduce Ayush Chandra for speaking engagements.",
    tools: [
      "Figma",
      "Adobe Photoshop"
    ],
    outcome: "Delivered poster variants emphasizing professional authority and clean layouts."
  },
  {
    id: 6,
    title: "Cloud AI Event Poster",
    category: "Event Poster",
    tag: "EVENT",
    image: "/images/vit 2.png",
    images: [
      "/images/vit 2.png"
    ],
    accent: "#A49BC4",
    year: "2026",
    org: "Indian Society of Automation, VIT",
    objective: "Design a striking, high-contrast poster to promote the 'Cloud AI and Beyond' seminar.",
    tools: [
      "Figma",
      "Canva"
    ],
    outcome: "Designed promotional variations boosting student registrations."
  }
];

// ─── EXPERIENCE DATA ─────────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    role: "Design Head",
    org: "Indian Society of Automation, VIT",
    type: "Leadership",
    period: "Jan 2026 – Present",
    year: "2026",
    description: "Leading the visual design strategy for ISA VIT - managing event graphics, club branding, and creative campaigns for a 100+ member organization. Overseeing all design output from conception to delivery.",
    highlights: ["100+ members", "12+ campaigns", "3 major events"],
  },
  {
    role: "Graphic Design & UI/UX Intern",
    org: "Kacheri Diaries LLP",
    type: "Internship · Gurugram (Remote)",
    period: "Mar 2025 – Present",
    year: "2025",
    description: "Designing high-impact visuals and UI elements for a legal-content startup. Building brand-aligned assets that simplify complex legal ideas for digital audiences across LinkedIn and Instagram.",
    highlights: ["30+ brand assets", "40% engagement uplift", "Full brand system"],
  },
  {
    role: "Core Committee – Design",
    org: "Pixelate Design Club, VIT",
    type: "Extracurricular",
    period: "Mar 2025 – Present",
    year: "2025",
    description: "Organizing hands-on Figma workshops, maintaining club visual identity, and producing event graphics for VIT's premier design community. One of four core leads managing the creative direction.",
    highlights: ["180+ workshop participants", "25+ design assets", "1+ yrs active"],
  },
];

// ─── MODAL (preserved exactly) ───────────────────────────────────────────────
function Modal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const images = project.images || [project.image];

  const handlePrev = (e) => { e.stopPropagation(); setActiveIndex((p) => (p === 0 ? images.length - 1 : p - 1)); };
  const handleNext = (e) => { e.stopPropagation(); setActiveIndex((p) => (p === images.length - 1 ? 0 : p + 1)); };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { isZoomed ? setIsZoomed(false) : onClose(); }
      if (!isZoomed && images.length > 1) {
        if (e.key === "ArrowLeft") setActiveIndex((p) => (p === 0 ? images.length - 1 : p - 1));
        if (e.key === "ArrowRight") setActiveIndex((p) => (p === images.length - 1 ? 0 : p + 1));
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, images.length, isZoomed]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-inner">
          <div className="modal-image-wrap slider-container" style={{ background: project.accent + "22" }}>
            <div className="slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {images.map((imgUrl, idx) => (
                <div key={idx} className="slide-item" onClick={() => setIsZoomed(true)} title="Click to view full screen">
                  <img src={imgUrl} alt={`${project.title} - Slide ${idx + 1}`} className="slider-img" onError={(e) => (e.target.style.display = "none")} />
                </div>
              ))}
            </div>
            {images.length > 1 && (
              <>
                <button className="slider-btn prev-btn" onClick={handlePrev} aria-label="Previous">‹</button>
                <button className="slider-btn next-btn" onClick={handleNext} aria-label="Next">›</button>
                <div className="slider-counter">{activeIndex + 1} / {images.length}</div>
                <div className="slider-thumbnails">
                  {images.map((imgUrl, idx) => (
                    <button key={idx} className={`thumb-btn ${idx === activeIndex ? "active" : ""}`} onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }} aria-label={`Page ${idx + 1}`}>
                      <img src={imgUrl} alt="" className="thumb-img" />
                    </button>
                  ))}
                </div>
              </>
            )}
            <div className="zoom-hint"><span>🔍 Click to enlarge</span></div>
          </div>
          <div className="modal-details">
            <span className="modal-tag">{project.tag}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-org">{project.org} · {project.year}</p>
            <div className="modal-block"><h4>Objective</h4><p>{project.objective}</p></div>
            <div className="modal-block"><h4>Tools Used</h4><div className="tool-list">{project.tools.map((t) => <span key={t} className="tool-chip">{t}</span>)}</div></div>
            <div className="modal-block"><h4>Outcome / Impact</h4><p>{project.outcome}</p></div>
          </div>
        </div>
      </div>
      {isZoomed && (
        <div className="lightbox-overlay" onClick={() => setIsZoomed(false)}>
          <button className="lightbox-close" onClick={() => setIsZoomed(false)} aria-label="Close Zoom">✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[activeIndex]} alt={project.title} className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── VINYL RECORD ────────────────────────────────────────────────────────────
function VinylRecord() {
  return (
    <div className="vinyl" aria-hidden="true">
      <div className="vinyl-sheen" />
      <div className="vinyl-center">
        <div className="vinyl-hole" />
      </div>
    </div>
  );
}

// ─── PROJECT CARD ────────────────────────────────────────────────────────────
function ProjectCard({ project, onClick }) {
  const imgCount = project.images ? project.images.length : 1;
  return (
    <article className="project-grid-card fade-up" onClick={() => onClick(project)}>
      <div className="card-img-wrap" style={{ "--proj-accent": project.accent }}>
        <img src={project.image} alt={project.title} className="card-img" onError={(e) => (e.target.style.display = "none")} />
        <div className="spread-img-overlay">
          <span>Open Project{imgCount > 1 ? ` · ${imgCount} pages` : ""} ↗</span>
        </div>
      </div>
      <div className="card-info">
        <div className="card-meta-top">
          <span className="spread-tag">{project.tag}</span>
          <span className="card-year">{project.year}</span>
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="spread-org">{project.org}</p>
      </div>
    </article>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, [showAllProjects]); // re-run observer when projects are expanded

  const displayedProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <>
      {/* ══════════════════════════ NAV ══════════════════════════ */}
      <nav className={`ed-nav ${navSolid ? "ed-nav--solid" : ""}`}>
        <a href="#hero" className="ed-nav__logo">S.</a>
        <div className="ed-nav__links">
          <a href="#work"><em>01</em> Work</a>
          <a href="#experience"><em>02</em> Experience</a>
          <a href="#about"><em>03</em> About</a>
          <a href="#contact" className="ed-nav__cta"><em>04</em> Contact</a>
        </div>
        <button className={`ed-nav__burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span />
        </button>
        {menuOpen && (
          <div className="ed-nav__mobile">
            {[["#work", "01 Work"], ["#experience", "02 Experience"], ["#about", "03 About"], ["#contact", "04 Contact"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="hero-vinyl" id="hero">
        <div className="hero-name-block">
          <p className="hero-eyebrow">Portfolio · 2026</p>
          <h1 className="hero-name">Shreya<br />Sundli</h1>
        </div>

        <div className="vinyl-stage">
          <VinylRecord />
          <span className="vinyl-script" aria-hidden="true">Portfolio</span>
          <a href="#work" className="vn vn-1"><small>01</small><span>Work</span></a>
          <a href="#experience" className="vn vn-2"><small>02</small><span>Experience</span></a>
          <a href="#about" className="vn vn-3"><small>03</small><span>About</span></a>
          <a href="#contact" className="vn vn-4"><small>04</small><span>Contact</span></a>
        </div>

        <div className="hero-meta-block">
          <p className="hero-role">UI/UX &amp; Visual Designer</p>
          <div className="hero-ctas">
            <a href="#work" className="ed-btn-fill">View Work</a>
            <a href="/shreya_resume.pdf" download className="ed-btn-ghost">Resume ↓</a>
          </div>
        </div>

        <div className="hero-open-tag">Open to Work ✦</div>
      </section>

      {/* ═══════════════════════ WORK / PROJECTS ═════════════════════════ */}
      <section className="ed-section" id="work">
        <div className="ed-sec-head fade-up">
          <span className="ed-label">Selected Work</span>
          <h2 className="ed-display">Design<br />Projects</h2>
          <div className="ed-rule" />
        </div>

        <div className="project-grid-2x2">
          {displayedProjects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={setActiveProject} />
          ))}
        </div>

        <div className="view-all-wrap fade-up">
          {!showAllProjects ? (
            <button className="ed-btn-ghost view-all-btn" onClick={() => setShowAllProjects(true)}>
              View All 15 Projects ↓
            </button>
          ) : (
            <button className="ed-btn-fill view-all-btn" onClick={() => {
              setShowAllProjects(false);
              document.getElementById("work").scrollIntoView({ behavior: "smooth" });
            }}>
              Show Less ↑
            </button>
          )}
        </div>
      </section>

      {/* ═══════════════════════ EXPERIENCE ══════════════════════════════ */}
      <section className="ed-section ed-section--alt" id="experience">
        <div className="ed-sec-head fade-up">
          <span className="ed-label">Background</span>
          <h2 className="ed-display">Experience</h2>
          <div className="ed-rule" />
        </div>

        <div className="exp-magazine">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="exp-entry fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="exp-year-bg" aria-hidden="true">{exp.year}</div>
              <div className="exp-body">
                <div className="exp-top">
                  <span className="exp-type-pill">{exp.type}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-org">{exp.org}</p>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-chips">
                  {exp.highlights.map((h) => <span key={h} className="exp-chip">{h}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ ABOUT ═══════════════════════════════════ */}
      <section className="ed-section about-section" id="about">
        <div className="about-vinyl-deco" aria-hidden="true" />
        <div className="about-grid">
          <div className="polaroid-col fade-up">
            <div className="polaroid-card">
              <div className="polaroid-img-wrap">
                <img src="/images/shreya-photo.jpeg" alt="Shreya Sundli" className="polaroid-photo" onError={(e) => (e.target.style.display = "none")} />
                <div className="polaroid-monogram">SS</div>
              </div>
              <p className="polaroid-caption">Shreya Sundli</p>
            </div>
            <span className="polaroid-script" aria-hidden="true">Hello,</span>
          </div>

          <div className="about-text-col fade-up">
            <h2 className="about-editorial">
              <em className="about-script-a">A</em><span>BOUT (ME)</span>
            </h2>
            <p className="about-body">
              I'm Shreya - a Computer Science student at VIT Vellore with a deep love
              for visual design, UX thinking, and brand storytelling. I believe great
              design isn't just beautiful; it solves problems, tells stories, and
              creates feelings that last.
            </p>
            <p className="about-body">
              From crafting brand identities to designing end-to-end mobile UI flows,
              I bring both analytical thinking and creative intuition to every project.
              Currently exploring the intersection of Web3 and design as a SheFi Season 15 Scholar.
            </p>
            <div className="about-skills">
              {["Figma", "Canva", "UI/UX", "Branding", "Illustration", "Motion", "HTML/CSS", "React"].map((s) => (
                <span key={s} className="about-skill-tag">{s}</span>
              ))}
            </div>
            <p className="about-sign">Thanks for visiting my portfolio!</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT ══════════════════════════════════ */}
      <section className="ed-section contact-section" id="contact">
        <div className="contact-inner fade-up">
          <span className="ed-label ed-label--light">Get In Touch</span>
          <h2 className="contact-script-head">
            Let's make something<br /><em>great</em> together.
          </h2>
          <a href="mailto:shreyasundliwork@gmail.com" className="contact-email">shreyasundliwork@gmail.com</a>
          <div className="contact-links-row">
            <a href="https://linkedin.com/in/shreya-sundli-aa899a330" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:shreyasundliwork@gmail.com">Email ↗</a>
            <a href="/shreya_resume.pdf" download>Resume ↓</a>
          </div>
        </div>
        <div className="contact-vinyl-deco" aria-hidden="true" />
      </section>

      {/* ═══════════════════════ FOOTER ══════════════════════════════════ */}
      <footer className="ed-footer">
        <span>© 2026 Shreya Sundli</span>
        <span className="ed-footer__mid">UI/UX &amp; Visual Designer</span>
        <span>Designed with intention ✦</span>
      </footer>

      {/* ═══════════════════════ MODAL ═══════════════════════════════════ */}
      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
