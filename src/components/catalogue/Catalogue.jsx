export default function Catalogue() {
  return (
    <section className="page" id="page-catalogue">
          <div className="page-hero">
            <div className="container reveal">
              <span className="eyebrow">Catalog</span>
              <h1 className="editorial-title page-hero-title">
                Things worth{" "}
                <span
                  className="editorial-italic"
                  style={{ color: "var(--accent-violet)" }}
                >
                  saving
                </span>
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Browse items that need repair or are free to take. Pick a
                category and see where you can help.
              </p>
            </div>
          </div>
          {/* Furniture */}
          <div className="catalogue-section" id="cat-lounge">
            <div className="container">
              <div className="cat-head reveal">
                <h2 className="editorial-title">Furniture</h2>
                <span className="cat-count">3 items</span>
              </div>
              <div className="product-grid">
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-l1.jpg"
                      alt="A chair with a loose leg"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Chair with a loose leg</h3>
                      <p className="product-cat">Sofia</p>
                    </div>
                    <span className="product-price">Needs help</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-l2.jpg"
                      alt="A sofa with torn fabric"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Sofa with torn fabric</h3>
                      <p className="product-cat">Burgas</p>
                    </div>
                    <span className="product-price">Needs help</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-l3.jpg"
                      alt="A daybed with a broken slat"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Daybed with a broken slat</h3>
                      <p className="product-cat">Ruse</p>
                    </div>
                    <span className="product-price">Fixed</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/* Free to take */}
          <div className="band band-slice" id="cat-tables">
            <div className="container">
              <div className="cat-head reveal">
                <h2 className="editorial-title">Free to take</h2>
                <span className="cat-count">3 items</span>
              </div>
              <div className="product-grid">
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-t1.jpg"
                      alt="An old dining table"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Old dining table</h3>
                      <p className="product-cat">Plovdiv</p>
                    </div>
                    <span className="product-price">Free to take</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-t2.jpg"
                      alt="A small side table"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Small side table</h3>
                      <p className="product-cat">Sofia</p>
                    </div>
                    <span className="product-price">Free to take</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-t3.jpg"
                      alt="A console table with a stuck drawer"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Console with a stuck drawer</h3>
                      <p className="product-cat">Varna</p>
                    </div>
                    <span className="product-price">Given away</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/* Electronics */}
          <div className="catalogue-section" id="cat-lighting">
            <div className="container">
              <div className="cat-head reveal">
                <h2 className="editorial-title">Electronics</h2>
                <span className="cat-count">3 items</span>
              </div>
              <div className="product-grid">
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-g1.jpg"
                      alt="A floor lamp that does not turn on"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Lamp that won't turn on</h3>
                      <p className="product-cat">Varna</p>
                    </div>
                    <span className="product-price">Needs help</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-g2.jpg"
                      alt="A pendant light that flickers"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Flickering pendant light</h3>
                      <p className="product-cat">Sofia</p>
                    </div>
                    <span className="product-price">Fixed</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-g3.jpg"
                      alt="A wall lamp with a broken switch"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Wall lamp with a broken switch</h3>
                      <p className="product-cat">Pleven</p>
                    </div>
                    <span className="product-price">Needs help</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/* Textiles and clothes */}
          <div className="band band-slice band-crimson" id="cat-textiles">
            <div className="container">
              <div className="cat-head reveal">
                <h2 className="editorial-title">Textiles &amp; clothes</h2>
                <span className="cat-count">3 items</span>
              </div>
              <div className="product-grid">
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-x1.jpg"
                      alt="A woollen blanket with a hole"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Blanket with a hole</h3>
                      <p className="product-cat">Stara Zagora</p>
                    </div>
                    <span className="product-price">Needs help</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-x2.jpg"
                      alt="A rug with frayed edges"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Rug with frayed edges</h3>
                      <p className="product-cat">Sofia</p>
                    </div>
                    <span className="product-price">Free to take</span>
                  </div>
                </article>
                <article className="product-card reveal">
                  <div className="frame">
                    <img
                      src="/images/lumen-x3.jpg"
                      alt="Linen curtains with broken hooks"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3 className="product-name">Curtains with broken hooks</h3>
                      <p className="product-cat">Plovdiv</p>
                    </div>
                    <span className="product-price">Fixed</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
  )
}