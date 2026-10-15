import ItemCard from "../common-components/ItemCard";

export default function Hero() {
  return (
    <section className="page" id="page-home">
      <div className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">Repair · Reuse · Share</span>
            <h1
              className="editorial-title hero-title"
              style={{ marginTop: 22 }}
            >
              Every repaired thing is one less thing in the landfill,
              <br /> <em>and one more story worth telling.</em>
            </h1>
            <p className="lede hero-copy">
              Got something broken? Post a photo and the community will tell you
              how to fix it. Don't want to fix it yourself? Give it to someone
              who will.
            </p>
            <div className="hero-actions">
              <a
                href="#catalogue"
                className="btn btn-solid"
                data-route="catalogue"
              >
                Browse items
              </a>
              <a href="#atelier" className="btn" data-route="atelier">
                Share an item
              </a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <span className="hero-meta">
              Fixed this week: lamp, chair, bike
            </span>
            <div className="frame hero-img-main">
              <img
                src="/images/lumen-hero.jpg"
                alt="An old wooden chair ready for repair"
                loading="eager"
              />
            </div>
            <div className="frame hero-img-detail">
              <img
                src="/images/lumen-detail.jpg"
                alt="Close detail of a wooden joint"
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
            Don't throw it away.{" "}
            <span
              className="editorial-italic"
              style={{ color: "var(--accent-violet)" }}
            >
              Repair it, or share it.
            </span>
          </p>
          <p className="quote-attr">The Dont-throw-repair community</p>
        </div>
      </div>
      {/* Featured catalogue over diagonal slate */}
      <div className="band band-featured">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Latest items</span>
              <h2 className="editorial-title section-title">
                Waiting for your advice
              </h2>
            </div>
            <a href="#catalogue" className="text-link" data-route="catalogue">
              See all items
            </a>
          </div>
          <div className="product-grid">
            <ItemCard
              image="/images/lumen-p1.jpg"
              title="Wobbly chair"
              category="Furniture"
              city="Sofia"
              status="Needs help"
            />
            <ItemCard
              image="/images/lumen-p2.jpg"
              title="Scratched table"
              category="Furniture"
              city="Plovdiv"
              status="Free to take"
            />
            <ItemCard
              image="/images/lumen-p3.jpg"
              title="Lamp that won't turn on"
              category="Electronics"
              city="Varna"
              status="Fixed"
            />
          </div>
        </div>
      </div>
      {/* Materials strip */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 className="editorial-title section-title">
                Four steps, no trash
              </h2>
            </div>
          </div>
          <div className="materials-grid reveal">
            <div className="material-cell">
              <span className="material-num">i.</span>
              <h3>Post it</h3>
              <p>
                Take a photo of the broken thing and describe what is wrong.
              </p>
            </div>
            <div className="material-cell">
              <span className="material-num">ii.</span>
              <h3>Get advice</h3>
              <p>Other users suggest how to fix it or offer to help.</p>
            </div>
            <div className="material-cell">
              <span className="material-num">iii.</span>
              <h3>Fix it</h3>
              <p>Try the advice and mark the one that worked.</p>
            </div>
            <div className="material-cell">
              <span className="material-num">iv.</span>
              <h3>Or give it away</h3>
              <p>Can't fix it? Someone else will be happy to.</p>
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
              alt="A workbench with hand tools"
              loading="lazy"
            />
          </div>
          <div className="split-content reveal">
            <span className="eyebrow">Free to take</span>
            <h2 className="editorial-title">
              One person's junk is another person's project
            </h2>
            <p className="lede">
              Some owners don't have the time or tools to repair their things.
              Instead of throwing them away, they give them to someone who does.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Check the free items. Maybe your next project is waiting there.
            </p>
            <a
              href="#atelier"
              className="text-link"
              style={{ marginTop: 34 }}
              data-route="atelier"
            >
              See free items
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
