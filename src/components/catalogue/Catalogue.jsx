export default function Catalogue() {
  return (
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
  )
}