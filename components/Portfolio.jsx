/* Portfolio.jsx — main portfolio component.
   accent: CSS color string, defaults to coral.
   logoId: key from MDLogos, defaults to "framed" (Imprint mark). */

import { MDLogos } from "./Logos";
import Piece from "./Piece";

export default function Portfolio({ logoId = "framed", accent = "#C45E51" }) {
  const Logo = MDLogos[logoId] ?? MDLogos.framed;

  return (
    <div className="port-root">

      {/* NAV */}
      <nav className="port-nav">
        <a href="#" className="port-nav-mark" aria-label="M.A. Durhal home">
          <Logo size={36} />
          <span className="port-nav-name">M.A. Durhal</span>
        </a>
        <div className="port-nav-links">
          <a href="#work">Work</a>
          <a href="#statement">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="port-hero">
        <div className="port-hero-left">
          <div className="port-hero-tag">
            <span className="port-hero-tag-dot" />
            Writing portfolio · 2026
          </div>
          <h1 className="port-hero-title">
            Language,<br />
            culture, <em>&amp; who<br />gets to speak.</em>
          </h1>
          <p className="port-hero-desc">
            Essays and research at the intersection of identity, media,
            and how we talk about the things we love.
          </p>
        </div>
        <div className="port-hero-right">
          <div className="port-hero-meta">
            <div className="port-hero-meta-row">
              <span className="port-hero-meta-key">Name</span>
              <span className="port-hero-meta-val">Mecca Durhal</span>
            </div>
            <div className="port-hero-meta-row">
              <span className="port-hero-meta-key">At</span>
              <span className="port-hero-meta-val">
                University of Michigan<br />
                <span className="port-hero-meta-light">Bachelor of General Studies</span>
              </span>
            </div>
            <div className="port-hero-meta-row">
              <span className="port-hero-meta-key">Field</span>
              <span className="port-hero-meta-val">
                Linguistics &amp; Digital Studies<br />
                <span className="port-hero-meta-light">Class of 2026</span>
              </span>
            </div>
          </div>
          <p className="port-hero-meta-note">
            An interdisciplinary degree built around a single question:
            how language, culture, and media shape{" "}
            <em>who gets to belong.</em>
          </p>
        </div>
      </section>

      {/* THEMES */}
      <section className="port-themes">
        <div className="port-section-label">Recurring themes</div>
        <div className="port-themes-inner">
          <span className="port-theme-pill accent">Black representation in media</span>
          <span className="port-theme-pill accent">Fandom &amp; cringe culture</span>
          <span className="port-theme-pill accent">Gaming history</span>
          <span className="port-theme-pill">authenticity</span>
          <span className="port-theme-pill">community belonging</span>
          <span className="port-theme-pill">who defines &ldquo;legitimate&rdquo;</span>
          <span className="port-theme-pill">generational language shift</span>
          <span className="port-theme-pill">digital media &amp; culture</span>
        </div>
      </section>

      {/* WORK */}
      <section className="port-work" id="work">
        <div className="port-work-header">
          <h2 className="port-work-title">Selected work</h2>
          <span className="port-work-count">Four pieces · 2024–2026</span>
        </div>

        <Piece
          num="01"
          cat="Artist statement · Award-winning"
          name="Fans, Games, & Bots: Whose Story Is It, Anyway?"
          sub="Excellence in Upper Level Writing, March 2026"
          desc="A personal reckoning with cringe culture — built around a physical collage of beloved fandoms and the vulnerability of caring loudly about things the world calls nerdy."
          tags={["creative nonfiction", "fandom", "identity", "D&D · anime · Vocaloid"]}
        />
        <Piece
          num="02"
          cat="Digital studies · StoryMap"
          name="Absent No Longer"
          sub="Digital Minstrelsy, Black Fatherhood, and Lee Everett from The Walking Dead"
          desc="A media studies essay tracing how minstrel-era stereotypes persist in modern Black video game characters — and why fatherhood alone isn't enough to subvert them."
          tags={["media analysis", "Black representation", "video games", "DIGITAL 334"]}
        />
        <Piece
          num="03"
          cat="Sociolinguistics · Original research"
          name={
            <>
              Damn, What the F<span className="port-piece-redact">***</span> Is This Sh
              <span className="port-piece-redact">**</span>t?
            </>
          }
          sub="A Generational Look at Swearing, in Context"
          desc="An original survey study on how Gen Z and Millennials differ — and often don't — in their attitudes toward common swear words across social contexts, with a close look at LGBTQ+ identity and religious distancing."
          tags={["research paper", "sociolinguistics", "LING 340", "original survey"]}
        />
        <Piece
          num="04"
          cat="Cultural anthropology · StoryMap"
          href="https://storymaps.arcgis.com/stories/c0b7d836b403419591ff6e24b453467d"
          name="From Cabinet, to Console, to Computer"
          sub="The History of Nintendo, Emulators, and Brand Piracy"
          desc="A cultural and legal history of how Nintendo built one of the world's most recognizable brands — and how the emulator community's fight to preserve gaming history exposes the tensions between corporate IP, fan culture, and who really owns the games we love."
          tags={["cultural anthropology", "gaming history", "IP & piracy", "fan culture", "ANTHRCUL 458"]}
        />
      </section>

      {/* STATEMENT */}
      <section className="port-statement" id="statement">
        <div className="port-section-label">Through-line</div>
        <div className="port-statement-inner">
          <div className="port-statement-label-col">
            <div className="port-statement-aside">
              Every piece asks the same question from a different angle.
            </div>
          </div>
          <div>
            <p className="port-statement-quote">
              <span className="port-statement-quote-open">&ldquo;</span>
              Who gets to decide what counts as <em>legitimate</em> — and
              what happens to the people who love things outside that line?
              <span className="port-statement-quote-close">&rdquo;</span>
            </p>
            <p className="port-statement-body">
              Whether it&rsquo;s a Black man in a cop car at the start of a video game,
              a queer student who swears differently than their Millennial peers,
              a fan community preserving games that corporations would rather let
              disappear, or someone gluing their hyperfixations to a poster board
              at 2am — Mecca&rsquo;s work keeps returning to the same questions about
              authenticity, belonging, and the cost of caring too visibly about
              the wrong things.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="port-contact" id="contact">
        <div className="port-section-label">Get in touch</div>
        <div className="port-contact-inner">
          <p className="port-contact-text">
            Open to writing opportunities, research collaborations, and
            conversations about culture, language, and games.
          </p>
          <div className="port-contact-links">
            <a href="mailto:madurhal@gmail.com" className="port-contact-link">
              <span className="port-contact-link-label">email</span>
              <span className="port-contact-link-val">madurhal@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/meccadurhal"
              target="_blank"
              rel="noopener noreferrer"
              className="port-contact-link"
            >
              <span className="port-contact-link-label">linkedin</span>
              <span className="port-contact-link-val">in/meccadurhal</span>
            </a>
            <a href="/portfolio.pdf" className="port-contact-link">
              <span className="port-contact-link-label">read all</span>
              <span className="port-contact-link-val">download portfolio.pdf →</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="port-footer">
        <div className="port-footer-mark">
          <Logo size={22} />
        </div>
        <span className="port-footer-copy">© 2026 M.A. Durhal · Ann Arbor</span>
        <span className="port-footer-note">&ldquo;I&rsquo;m cringe but I&rsquo;m free.&rdquo;</span>
      </footer>

    </div>
  );
}
