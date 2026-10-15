export default function Home() {
  return (
       <section className="page" id="page-home">
          <div className="hero">
            <div className="container hero-grid">
              <div className="reveal">
                <span className="eyebrow">Copenhagen / Est. 1980</span>
                <h1
                  className="editorial-title hero-title"
                  style={{ marginTop: 22 }}
                >
                  Don`t throw,
                  <br />
                  just <em>repair</em> or <em>share</em>.
                </h1>
                <p className="lede hero-copy">
                 Many people throw away things that could be fixed with a little help. In Dont-throw-repair users publish their broken or old items with a photo and a description, and other users give advice on how to repair them. If the owner does not want to repair an item, they can give it away to someone who will fix it. This way fewer things end up in the trash and people help each other.
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
                <span className="hero-meta">
                  Series N°14 · Oak / Wool / Brass
                </span>
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
                <a
                  href="#catalogue"
                  className="text-link"
                  data-route="catalogue"
                >
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
                    Slow-grown, quarter-sawn, air-dried for three winters before
                    a single cut is made.
                  </p>
                </div>
                <div className="material-cell">
                  <span className="material-num">ii.</span>
                  <h3>Undyed Wool</h3>
                  <p>
                    Sourced from two Gotland flocks. The colour is the sheep's,
                    not a factory's.
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
                    Left unlacquered on purpose. Every fingerprint becomes part
                    of the record.
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
                  Visits are by appointment, and we encourage them. Furniture
                  should be met in person before it is chosen.
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
  );
}