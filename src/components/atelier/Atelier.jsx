export default function Atelier() {
  return (
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
                Founded in Copenhagen in 1980. Eleven makers, one workshop,
                forty commissions a year. Nothing leaves the bench unsigned.
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
                  Every LUMEN // 80 piece begins as an over-drawn sketch. The
                  work of the studio is removal: taking away line after line
                  until only the structure that carries weight, light and use
                  remains.
                </p>
                <p className="lede" style={{ marginTop: 16 }}>
                  We do not follow seasons. A chair drawn in 1984 still sits in
                  the current catalogue because nothing about sitting has
                  changed.
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
                    Certified forests in Jämtland, Sweden. Felled in winter,
                    milled within 40 km, air-dried on site for three years.
                  </span>
                </li>
                <li>
                  <strong>Wool</strong>
                  <span>
                    Two family-run Gotland flocks. Sheared, sorted and spun on
                    the island; never bleached, never dyed.
                  </span>
                </li>
                <li>
                  <strong>Basalt &amp; Travertine</strong>
                  <span>
                    Quarried in the Eifel region and Tivoli. Offcuts return to
                    the quarry for aggregate, not landfill.
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
                  Our frames are cut with wedged tenons and dovetails, not
                  screws and brackets. A piece that is joined can be re-joined;
                  a piece that is glued and bolted usually cannot.
                </p>
                <p className="lede" style={{ marginTop: 16 }}>
                  Every commission includes a lifetime refinishing service. We
                  would rather restore a thirty-year-old table than sell a new
                  one to the same address.
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
  )
}