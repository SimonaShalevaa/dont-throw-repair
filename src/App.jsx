

function App() {

  return (
    <>
       {/*
  Lumen Eighty Template
  https://templatemo.com/tm-628-lumen-eighty
*/}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>
    LUMEN // 80 - Scandinavian Furniture &amp; Spatial Design Atelier
  </title>
  <meta
    name="description"
    content="LUMEN // 80 is a luxury Scandinavian furniture and spatial design atelier. Minimalist lounge pieces, monolith tables, architectural lighting and bespoke textiles."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="template.css" />
  {/* ============ HEADER ============ */}
  <header className="site-header">
    <div className="container header-inner">
      <a href="#home" className="brand" data-route="home">
        LUMEN <span>//</span> 80
      </a>
      <nav className="main-nav" aria-label="Primary">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#home" data-route="home">
              Home
            </a>
          </li>
          <li className="nav-item has-drop">
            <a
              className="nav-link"
              href="#catalogue"
              data-route="catalogue"
              aria-haspopup="true"
            >
              Catalogue <span className="caret" />
            </a>
            <ul className="dropdown">
              <li className="drop-label">Collections</li>
              <li>
                <a
                  href="#catalogue"
                  data-route="catalogue"
                  data-anchor="cat-lounge"
                >
                  Minimalist Lounge
                </a>
              </li>
              <li>
                <a
                  href="#catalogue"
                  data-route="catalogue"
                  data-anchor="cat-tables"
                >
                  Monolith Tables
                </a>
              </li>
              <li>
                <a
                  href="#catalogue"
                  data-route="catalogue"
                  data-anchor="cat-lighting"
                >
                  Architectural Lighting
                </a>
              </li>
              <li>
                <a
                  href="#catalogue"
                  data-route="catalogue"
                  data-anchor="cat-textiles"
                >
                  Bespoke Textiles
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-drop">
            <a
              className="nav-link"
              href="#atelier"
              data-route="atelier"
              aria-haspopup="true"
            >
              Atelier <span className="caret" />
            </a>
            <ul className="dropdown">
              <li className="drop-label">The Studio</li>
              <li>
                <a
                  href="#atelier"
                  data-route="atelier"
                  data-anchor="at-philosophy"
                >
                  Design Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#atelier"
                  data-route="atelier"
                  data-anchor="at-provenance"
                >
                  Material Provenance
                </a>
              </li>
              <li>
                <a
                  href="#atelier"
                  data-route="atelier"
                  data-anchor="at-woodcraft"
                >
                  Sustainable Woodcraft
                </a>
              </li>
              <li>
                <a href="#atelier" data-route="atelier" data-anchor="at-press">
                  Press &amp; Awards
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#inquire" data-route="inquire">
              Inquire
            </a>
          </li>
        </ul>
        <a href="#inquire" className="nav-cta" data-route="inquire">
          Book Consultation
        </a>
      </nav>
      <button
        className="menu-toggle"
        id="menuToggle"
        aria-label="Open menu"
        aria-expanded="false"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </div>
  </header>
  {/* ============ MOBILE NAV ============ */}
  <nav className="mobile-nav" id="mobileNav" aria-label="Mobile">
    <ul>
      <li>
        <a className="m-link" href="#home" data-route="home">
          Home
        </a>
      </li>
      <li>
        <div className="m-drop-head">
          <a className="m-link" href="#catalogue" data-route="catalogue">
            Catalogue
          </a>
          <button
            className="m-sub-toggle"
            aria-expanded="false"
            aria-label="Toggle catalogue submenu"
          >
            <span className="caret" />
          </button>
        </div>
        <ul className="m-sub">
          <li>
            <a
              href="#catalogue"
              data-route="catalogue"
              data-anchor="cat-lounge"
            >
              Minimalist Lounge
            </a>
          </li>
          <li>
            <a
              href="#catalogue"
              data-route="catalogue"
              data-anchor="cat-tables"
            >
              Monolith Tables
            </a>
          </li>
          <li>
            <a
              href="#catalogue"
              data-route="catalogue"
              data-anchor="cat-lighting"
            >
              Architectural Lighting
            </a>
          </li>
          <li>
            <a
              href="#catalogue"
              data-route="catalogue"
              data-anchor="cat-textiles"
            >
              Bespoke Textiles
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div className="m-drop-head">
          <a className="m-link" href="#atelier" data-route="atelier">
            Atelier
          </a>
          <button
            className="m-sub-toggle"
            aria-expanded="false"
            aria-label="Toggle atelier submenu"
          >
            <span className="caret" />
          </button>
        </div>
        <ul className="m-sub">
          <li>
            <a href="#atelier" data-route="atelier" data-anchor="at-philosophy">
              Design Philosophy
            </a>
          </li>
          <li>
            <a href="#atelier" data-route="atelier" data-anchor="at-provenance">
              Material Provenance
            </a>
          </li>
          <li>
            <a href="#atelier" data-route="atelier" data-anchor="at-woodcraft">
              Sustainable Woodcraft
            </a>
          </li>
          <li>
            <a href="#atelier" data-route="atelier" data-anchor="at-press">
              Press &amp; Awards
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="m-link" href="#inquire" data-route="inquire">
          Inquire
        </a>
      </li>
    </ul>
  </nav>
  <main>
    {/* ============ PAGE: HOME ============ */}
    <section className="page" id="page-home">
      <div className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">Copenhagen / Est. 1980</span>
            <h1
              className="editorial-title hero-title"
              style={{ marginTop: 22 }}
            >
              Light, held
              <br />
              in <em>quiet</em> form.
            </h1>
            <p className="lede hero-copy">
              LUMEN // 80 is a Scandinavian atelier for furniture and spatial
              design. Each piece is drawn once, prototyped by hand, and built to
              outlast the room it enters.
            </p>
            <div className="hero-actions">
              <a
                href="#catalogue"
                className="btn btn-solid"
                data-route="catalogue"
              >
                View Catalogue
              </a>
              <a href="#atelier" className="btn" data-route="atelier">
                The Atelier
              </a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <span className="hero-meta">Series N°14 · Oak / Wool / Brass</span>
            <div className="frame hero-img-main">
              <img
                src="/images/lumen-hero.jpg"
                alt="A minimalist oak lounge chair in a bright white studio"
                loading="eager"
              />
            </div>
            <div className="frame hero-img-detail">
              <img
                src="/images/lumen-detail.jpg"
                alt="Close detail of joinery in pale oak"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Philosophy quote over 80-degree diagonal slate */}
      <div className="band band-quote band-violet">
        <div className="container reveal">
          <span className="quote-mark">“</span>
          <p className="editorial-title big-quote">
            A room should hold its silence the way a shelf holds weight:{" "}
            <span
              className="editorial-italic"
              style={{ color: "var(--accent-violet)" }}
            >
              without announcing the effort.
            </span>
          </p>
          <p className="quote-attr">Astrid Lindqvist · Founding Director</p>
        </div>
      </div>
      {/* Featured catalogue over diagonal slate */}
      <div className="band band-featured">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Featured Works</span>
              <h2 className="editorial-title section-title">
                The current edit
              </h2>
            </div>
            <a href="#catalogue" className="text-link" data-route="catalogue">
              Full catalogue
            </a>
          </div>
          <div className="product-grid">
            <article className="product-card reveal">
              <a
                href="#catalogue"
                className="card-link"
                data-route="catalogue"
                data-anchor="cat-lounge"
              >
                <div className="frame">
                  <img
                    src="/images/lumen-p1.jpg"
                    alt="Fjord lounge chair in pale ash and undyed wool"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <div>
                    <h3 className="product-name">Fjord Chair</h3>
                    <p className="product-cat">Minimalist Lounge</p>
                  </div>
                  <span className="product-price">€2,450</span>
                </div>
              </a>
            </article>
            <article className="product-card reveal">
              <a
                href="#catalogue"
                className="card-link"
                data-route="catalogue"
                data-anchor="cat-tables"
              >
                <div className="frame">
                  <img
                    src="/images/lumen-p2.jpg"
                    alt="Basalt monolith dining table with a single stone base"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <div>
                    <h3 className="product-name">Basalt Table</h3>
                    <p className="product-cat">Monolith Tables</p>
                  </div>
                  <span className="product-price">€6,900</span>
                </div>
              </a>
            </article>
            <article className="product-card reveal">
              <a
                href="#catalogue"
                className="card-link"
                data-route="catalogue"
                data-anchor="cat-lighting"
              >
                <div className="frame">
                  <img
                    src="/images/lumen-p3.jpg"
                    alt="Meridian floor lamp casting a soft vertical light"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <div>
                    <h3 className="product-name">Meridian Lamp</h3>
                    <p className="product-cat">Architectural Lighting</p>
                  </div>
                  <span className="product-price">€1,780</span>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
      {/* Materials strip */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Material Honesty</span>
              <h2 className="editorial-title section-title">
                Four materials, no substitutes
              </h2>
            </div>
          </div>
          <div className="materials-grid reveal">
            <div className="material-cell">
              <span className="material-num">i.</span>
              <h3>Nordic Oak</h3>
              <p>
                Slow-grown, quarter-sawn, air-dried for three winters before a
                single cut is made.
              </p>
            </div>
            <div className="material-cell">
              <span className="material-num">ii.</span>
              <h3>Undyed Wool</h3>
              <p>
                Sourced from two Gotland flocks. The colour is the sheep's, not
                a factory's.
              </p>
            </div>
            <div className="material-cell">
              <span className="material-num">iii.</span>
              <h3>Honed Basalt</h3>
              <p>
                Volcanic stone finished to a matte touch that reads as warm
                rather than cold.
              </p>
            </div>
            <div className="material-cell">
              <span className="material-num">iv.</span>
              <h3>Patinated Brass</h3>
              <p>
                Left unlacquered on purpose. Every fingerprint becomes part of
                the record.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Split feature */}
      <div className="section" style={{ paddingTop: 20 }}>
        <div className="container split">
          <div className="frame reveal">
            <img
              src="/images/lumen-atelier.jpg"
              alt="The LUMEN // 80 workshop with benches and hand tools"
              loading="lazy"
            />
          </div>
          <div className="split-content reveal">
            <span className="eyebrow">Inside the Atelier</span>
            <h2 className="editorial-title">
              Built by eleven hands, signed by one
            </h2>
            <p className="lede">
              Our Copenhagen workshop keeps a deliberate ceiling of forty
              commissions per year. Every piece carries the mark of the lead
              maker who saw it from rough plank to final oiling.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Visits are by appointment, and we encourage them. Furniture should
              be met in person before it is chosen.
            </p>
            <a
              href="#atelier"
              className="text-link"
              style={{ marginTop: 34 }}
              data-route="atelier"
            >
              Read our philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* ============ PAGE: CATALOGUE ============ */}
    <section className="page" id="page-catalogue">
      <div className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">Catalogue</span>
          <h1 className="editorial-title page-hero-title">
            Forty pieces,{" "}
            <span
              className="editorial-italic"
              style={{ color: "var(--accent-violet)" }}
            >
              one language
            </span>
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Each collection is small by design. Pieces marked bespoke can be
            commissioned in alternate timbers, stones and weaves.
          </p>
        </div>
      </div>
      {/* Minimalist Lounge */}
      <div className="catalogue-section" id="cat-lounge">
        <div className="container">
          <div className="cat-head reveal">
            <h2 className="editorial-title">Minimalist Lounge</h2>
            <span className="cat-count">09 pieces</span>
          </div>
          <div className="product-grid">
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-l1.jpg"
                  alt="Fjord lounge chair"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Fjord Chair</h3>
                  <p className="product-cat">Ash / Wool</p>
                </div>
                <span className="product-price">€2,450</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-l2.jpg"
                  alt="Skagen low sofa"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Skagen Sofa</h3>
                  <p className="product-cat">Oak / Bouclé</p>
                </div>
                <span className="product-price">€5,200</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-l3.jpg"
                  alt="Vidde daybed"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Vidde Daybed</h3>
                  <p className="product-cat">Oak / Linen</p>
                </div>
                <span className="product-price">€3,850</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* Monolith Tables on diagonal slate */}
      <div className="band band-slice" id="cat-tables">
        <div className="container">
          <div className="cat-head reveal">
            <h2 className="editorial-title">Monolith Tables</h2>
            <span className="cat-count">07 pieces</span>
          </div>
          <div className="product-grid">
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-t1.jpg"
                  alt="Basalt dining table"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Basalt Table</h3>
                  <p className="product-cat">Honed Stone</p>
                </div>
                <span className="product-price">€6,900</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-t2.jpg"
                  alt="Plinth side table"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Plinth Side</h3>
                  <p className="product-cat">Travertine</p>
                </div>
                <span className="product-price">€1,650</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-t3.jpg"
                  alt="Strata console table"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Strata Console</h3>
                  <p className="product-cat">Oak / Stone</p>
                </div>
                <span className="product-price">€4,300</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* Architectural Lighting */}
      <div className="catalogue-section" id="cat-lighting">
        <div className="container">
          <div className="cat-head reveal">
            <h2 className="editorial-title">Architectural Lighting</h2>
            <span className="cat-count">12 pieces</span>
          </div>
          <div className="product-grid">
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-g1.jpg"
                  alt="Meridian floor lamp"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Meridian Lamp</h3>
                  <p className="product-cat">Brass / Opal Glass</p>
                </div>
                <span className="product-price">€1,780</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-g2.jpg"
                  alt="Halo pendant light"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Halo Pendant</h3>
                  <p className="product-cat">Patinated Brass</p>
                </div>
                <span className="product-price">€980</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-g3.jpg"
                  alt="Skygge wall sconce"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Skygge Sconce</h3>
                  <p className="product-cat">Oak / Linen Shade</p>
                </div>
                <span className="product-price">€640</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* Bespoke Textiles on diagonal slate */}
      <div className="band band-slice band-crimson" id="cat-textiles">
        <div className="container">
          <div className="cat-head reveal">
            <h2 className="editorial-title">Bespoke Textiles</h2>
            <span className="cat-count">Made to order</span>
          </div>
          <div className="product-grid">
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-x1.jpg"
                  alt="Gotland woven throw"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Gotland Throw</h3>
                  <p className="product-cat">Undyed Wool</p>
                </div>
                <span className="product-price">€420</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-x2.jpg"
                  alt="Dune flatweave rug"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Dune Rug</h3>
                  <p className="product-cat">Wool / Flax</p>
                </div>
                <span className="product-price">from €2,100</span>
              </div>
            </article>
            <article className="product-card reveal">
              <div className="frame">
                <img
                  src="/images/lumen-x3.jpg"
                  alt="Tidal linen curtain panels"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-name">Tidal Panels</h3>
                  <p className="product-cat">Washed Linen</p>
                </div>
                <span className="product-price">from €760</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    {/* ============ PAGE: ATELIER ============ */}
    <section className="page" id="page-atelier">
      <div className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">The Atelier</span>
          <h1 className="editorial-title page-hero-title">
            Where restraint is{" "}
            <span
              className="editorial-italic"
              style={{ color: "var(--accent-violet)" }}
            >
              a craft
            </span>
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Founded in Copenhagen in 1980. Eleven makers, one workshop, forty
            commissions a year. Nothing leaves the bench unsigned.
          </p>
        </div>
      </div>
      {/* Design Philosophy */}
      <div className="atelier-block" id="at-philosophy">
        <div className="container split">
          <div className="split-content reveal">
            <span className="eyebrow">Design Philosophy</span>
            <h2 className="editorial-title">Subtract until it holds</h2>
            <p className="lede">
              Every LUMEN // 80 piece begins as an over-drawn sketch. The work
              of the studio is removal: taking away line after line until only
              the structure that carries weight, light and use remains.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              We do not follow seasons. A chair drawn in 1984 still sits in the
              current catalogue because nothing about sitting has changed.
            </p>
          </div>
          <div className="frame reveal">
            <img
              src="/images/lumen-ph.jpg"
              alt="Pencil drawings of chair profiles pinned to a white wall"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Material Provenance on diagonal slate */}
      <div className="band band-slice" id="at-provenance">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Material Provenance</span>
              <h2 className="editorial-title section-title">
                Every plank has an address
              </h2>
            </div>
          </div>
          <ul className="provenance-list reveal">
            <li>
              <strong>Oak &amp; Ash</strong>
              <span>
                Certified forests in Jämtland, Sweden. Felled in winter, milled
                within 40 km, air-dried on site for three years.
              </span>
            </li>
            <li>
              <strong>Wool</strong>
              <span>
                Two family-run Gotland flocks. Sheared, sorted and spun on the
                island; never bleached, never dyed.
              </span>
            </li>
            <li>
              <strong>Basalt &amp; Travertine</strong>
              <span>
                Quarried in the Eifel region and Tivoli. Offcuts return to the
                quarry for aggregate, not landfill.
              </span>
            </li>
            <li>
              <strong>Brass</strong>
              <span>
                Minimum 85% recycled content, cast in a fourth-generation
                Copenhagen foundry twelve minutes from our bench.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Sustainable Woodcraft */}
      <div className="atelier-block" id="at-woodcraft">
        <div className="container split">
          <div className="frame reveal">
            <img
              src="/images/lumen-wood.jpg"
              alt="A maker hand-planing a pale oak board"
              loading="lazy"
            />
          </div>
          <div className="split-content reveal">
            <span className="eyebrow">Sustainable Woodcraft</span>
            <h2 className="editorial-title">Joinery instead of hardware</h2>
            <p className="lede">
              Our frames are cut with wedged tenons and dovetails, not screws
              and brackets. A piece that is joined can be re-joined; a piece
              that is glued and bolted usually cannot.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Every commission includes a lifetime refinishing service. We would
              rather restore a thirty-year-old table than sell a new one to the
              same address.
            </p>
            <a
              href="#inquire"
              className="text-link"
              style={{ marginTop: 34 }}
              data-route="inquire"
            >
              Commission a piece
            </a>
          </div>
        </div>
      </div>
      {/* Press & Awards */}
      <div className="atelier-block" id="at-press">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Press &amp; Awards</span>
              <h2 className="editorial-title section-title">
                Quiet work, noted
              </h2>
            </div>
          </div>
          <div className="awards-grid">
            <div className="award-cell reveal">
              <span className="award-year">2025</span>
              <h3>Nordic Design Prize / Furniture</h3>
              <p>
                Awarded for the Basalt Table series and its single-stone
                cantilever base.
              </p>
            </div>
            <div className="award-cell reveal">
              <span className="award-year">2024</span>
              <h3>Wallpaper* Design Awards / Shortlist</h3>
              <p>
                Meridian Lamp shortlisted in the Best Domestic Lighting
                category.
              </p>
            </div>
            <div className="award-cell reveal">
              <span className="award-year">2022</span>
              <h3>Danish Craft Council / Gold Mark</h3>
              <p>
                Studio-wide recognition for joinery standards and repairable
                construction.
              </p>
            </div>
            <div className="award-cell reveal">
              <span className="award-year">2019</span>
              <h3>Monocle / Top 25 Ateliers</h3>
              <p>
                Featured for the forty-commission ceiling and lifetime
                refinishing programme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ============ PAGE: INQUIRE ============ */}
    <section className="page" id="page-inquire">
      <div className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">Inquire</span>
          <h1 className="editorial-title page-hero-title">
            Begin a{" "}
            <span
              className="editorial-italic"
              style={{ color: "var(--accent-violet)" }}
            >
              conversation
            </span>
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Tell us about the room, the light it receives, and how you live in
            it. We reply personally within two working days.
          </p>
        </div>
      </div>
      <div className="container inquire-grid">
        <div className="inquire-details reveal">
          <h3>Showroom &amp; Workshop</h3>
          <p>
            Refshalevej 163A
            <br />
            1432 Copenhagen K, Denmark
            <br />
            By appointment, Tuesday to Saturday
          </p>
          <h3>Contact</h3>
          <p>
            studio@lumen80.example
            <br />
            +45 33 12 80 80
          </p>
          <h3>Commissions</h3>
          <p>
            Current lead time is 14 to 18 weeks. The annual commission list
            opens each January and typically closes by late spring.
          </p>
          <h3>Trade &amp; Architects</h3>
          <p>
            We collaborate with architects and interior studios on full spatial
            programmes. Request the trade dossier in your message.
          </p>
        </div>
        <form id="inquireForm" className="reveal" noValidate="">
          <div className="form-row">
            <div className="field">
              <label htmlFor="f-name">Full name</label>
              <input
                type="text"
                id="f-name"
                name="name"
                required=""
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input
                type="email"
                id="f-email"
                name="email"
                required=""
                autoComplete="email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="f-interest">Interest</label>
              <select id="f-interest" name="interest">
                <option>Minimalist Lounge</option>
                <option>Monolith Tables</option>
                <option>Architectural Lighting</option>
                <option>Bespoke Textiles</option>
                <option>Full spatial programme</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-timeline">Timeline</label>
              <select id="f-timeline" name="timeline">
                <option>Flexible</option>
                <option>Within 3 months</option>
                <option>Within 6 months</option>
                <option>This year</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-message">About the space</label>
            <textarea
              id="f-message"
              name="message"
              placeholder="Room dimensions, orientation, existing materials, and anything the piece must live alongside."
              required=""
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-solid">
            Send inquiry
          </button>
          <p className="form-note" id="formNote">
            Thank you. Your inquiry has been received and the studio will reply
            within two working days.
          </p>
        </form>
      </div>
    </section>
  </main>
  {/* ============ FOOTER ============ */}
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand" data-route="home">
            LUMEN <span>//</span> 80
          </a>
          <p>
            A Scandinavian atelier for furniture and spatial design. Copenhagen,
            since 1980.
          </p>
        </div>
        <div className="footer-col">
          <h4>Catalogue</h4>
          <ul>
            <li>
              <a
                href="#catalogue"
                data-route="catalogue"
                data-anchor="cat-lounge"
              >
                Minimalist Lounge
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                data-route="catalogue"
                data-anchor="cat-tables"
              >
                Monolith Tables
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                data-route="catalogue"
                data-anchor="cat-lighting"
              >
                Architectural Lighting
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                data-route="catalogue"
                data-anchor="cat-textiles"
              >
                Bespoke Textiles
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Atelier</h4>
          <ul>
            <li>
              <a
                href="#atelier"
                data-route="atelier"
                data-anchor="at-philosophy"
              >
                Design Philosophy
              </a>
            </li>
            <li>
              <a
                href="#atelier"
                data-route="atelier"
                data-anchor="at-provenance"
              >
                Material Provenance
              </a>
            </li>
            <li>
              <a
                href="#atelier"
                data-route="atelier"
                data-anchor="at-woodcraft"
              >
                Sustainable Woodcraft
              </a>
            </li>
            <li>
              <a href="#atelier" data-route="atelier" data-anchor="at-press">
                Press &amp; Awards
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Studio</h4>
          <ul>
            <li>
              <a href="#inquire" data-route="inquire">
                Inquire
              </a>
            </li>
            <li>
              <a href="#inquire" data-route="inquire">
                Book consultation
              </a>
            </li>
            <li>
              <a href="#inquire" data-route="inquire">
                Trade programme
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <span>
          © <span id="year" /> LUMEN // 80. All rights reserved.
        </span>
        <span>
          Design:{" "}
          <a
            href="https://templatemo.com"
            target="_blank"
            rel="nofollow noopener"
          >
            TemplateMo
          </a>
        </span>
      </div>
    </div>
  </footer>
    </>
  )
}

export default App
