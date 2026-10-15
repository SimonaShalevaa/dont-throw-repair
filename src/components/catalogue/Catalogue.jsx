import ItemCard from "../common-components/ItemCard";

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
                <ItemCard
                  image="/images/lumen-l1.jpg"
                  title="Chair with a loose leg"
                  category="Furniture"
                  city="Sofia"
                  status="Needs help"
                />
                <ItemCard
                  image="/images/lumen-l2.jpg"
                  title="Sofa with torn fabric"
                  category="Furniture"
                  city="Burgas"
                  status="Needs help"
                />
                <ItemCard
                  image="/images/lumen-l3.jpg"
                  title="Daybed with a broken slat"
                  category="Furniture"
                  city="Ruse"
                  status="Fixed"
                />
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
                <ItemCard
                  image="/images/lumen-t1.jpg"
                  title="Old dining table"
                  category="Furniture"
                  city="Plovdiv"
                  status="Free to take"
                />
                <ItemCard
                  image="/images/lumen-t2.jpg"
                  title="Small side table"
                  category="Furniture"
                  city="Sofia"
                  status="Free to take"
                />
                <ItemCard
                  image="/images/lumen-t3.jpg"
                  title="Console with a stuck drawer"
                  category="Furniture"
                  city="Varna"
                  status="Given away"
                />
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
                <ItemCard
                  image="/images/lumen-g1.jpg"
                  title="Lamp that won't turn on"
                  category="Electronics"
                  city="Varna"
                  status="Needs help"
                />
                <ItemCard
                  image="/images/lumen-g2.jpg"
                  title="Flickering pendant light"
                  category="Electronics"
                  city="Sofia"
                  status="Fixed"
                />
                <ItemCard
                  image="/images/lumen-g3.jpg"
                  title="Wall lamp with a broken switch"
                  category="Electronics"
                  city="Pleven"
                  status="Needs help"
                />
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
                <ItemCard
                  image="/images/lumen-x1.jpg"
                  title="Blanket with a hole"
                  category="Textiles & clothes"
                  city="Stara Zagora"
                  status="Needs help"
                />
                <ItemCard
                  image="/images/lumen-x2.jpg"
                  title="Rug with frayed edges"
                  category="Textiles & clothes"
                  city="Sofia"
                  status="Free to take"
                />
                <ItemCard
                  image="/images/lumen-x3.jpg"
                  title="Curtains with broken hooks"
                  category="Textiles & clothes"
                  city="Plovdiv"
                  status="Fixed"
                />
              </div>
            </div>
          </div>
        </section>
  )
}