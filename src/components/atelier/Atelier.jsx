import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import "./atelier.css";

export default function Atelier() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.slice(1));

      if (section) {
        section.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <section className="page" id="page-atelier">
          <div className="page-hero">
            <div className="container reveal">
              <span className="eyebrow">Repair Tips</span>
              <h1 className="editorial-title page-hero-title">
                Fix it before{" "}
                <span
                  className="editorial-italic"
                  style={{ color: "var(--accent-violet)" }}
                >
                  you throw it
                </span>
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Simple checks and fixes that save most broken things. No
                special skills needed, just a little patience.
              </p>
            </div>
          </div>
          {/* Before you throw it away */}
          <div className="atelier-block" id="before-you-throw">
            <div className="container split">
              <div className="split-content reveal">
                <span className="eyebrow">Before you throw it away</span>
                <h2 className="editorial-title">Check the simple things first</h2>
                <p className="lede">
                  Many things stop working because of something small: a dead
                  battery, a blown fuse, a loose screw or a dirty contact. Check
                  these before you decide it is broken for good.
                </p>
                <p className="lede" style={{ marginTop: 16 }}>
                  Look for the model number and search for it. Very often
                  someone has already had the same problem and explained how to
                  fix it.
                </p>
              </div>
              <div className="frame reveal">
                <img
                  src="/images/before-throw.jpg"
                  alt="An old floor lamp"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Basic tool kit */}
          <div className="band band-slice" id="tool-kit">
            <div className="container">
              <div className="section-head reveal">
                <div>
                  <span className="eyebrow">Basic tool kit</span>
                  <h2 className="editorial-title section-title">
                    Four tools, most repairs
                  </h2>
                </div>
              </div>
              <ul className="provenance-list reveal">
                <li>
                  <strong>Screwdrivers</strong>
                  <span>
                    A flat and a cross-head screwdriver open most devices and
                    tighten most furniture.
                  </span>
                </li>
                <li>
                  <strong>Pliers &amp; tape</strong>
                  <span>
                    For holding, bending and quick fixes until the real repair
                    is done.
                  </span>
                </li>
                <li>
                  <strong>Glue &amp; clamps</strong>
                  <span>
                    Wood glue for furniture, super glue for small plastic parts.
                    Clamps hold everything while it dries.
                  </span>
                </li>
                <li>
                  <strong>Needle &amp; thread</strong>
                  <span>
                    Buttons, seams and small holes in clothes, curtains and
                    blankets.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Common fixes */}
          <div className="atelier-block" id="common-fixes">
            <div className="container split">
              <div className="frame reveal">
                <img
                  src="/images/common-fixes.jpg"
                  alt="Hands repairing a sewing machine with a screwdriver"
                  loading="lazy"
                />
              </div>
              <div className="split-content reveal">
                <span className="eyebrow">Common fixes</span>
                <h2 className="editorial-title">Small repairs, big difference</h2>
                <p className="lede">
                  A wobbly chair usually needs only a tightened screw or a
                  little wood glue. A lamp that does not turn on often needs
                  just a new bulb or switch.
                </p>
                <p className="lede" style={{ marginTop: 16 }}>
                  A flat bike tyre, a broken zip or a loose door handle are
                  quick fixes too. Post a photo and someone will show you how.
                </p>
                <Link
                  to="/create"
                  className="text-link"
                  style={{ marginTop: 34 }}
                >
                  Ask for advice
                </Link>
              </div>
            </div>
          </div>
          {/* Community */}
          <div className="atelier-block" id="community">
            <div className="container">
              <div className="section-head reveal">
                <div>
                  <span className="eyebrow">Community</span>
                  <h2 className="editorial-title section-title">
                    Small fixes add up
                  </h2>
                </div>
              </div>
              <div className="awards-grid">
                <div className="award-cell reveal">
                  <span className="award-year">120</span>
                  <h3>Items posted</h3>
                  <p>
                    Broken and old things shared by the community.
                  </p>
                </div>
                <div className="award-cell reveal">
                  <span className="award-year">85</span>
                  <h3>Items fixed</h3>
                  <p>
                    Repaired with advice from other users.
                  </p>
                </div>
                <div className="award-cell reveal">
                  <span className="award-year">30</span>
                  <h3>Items given away</h3>
                  <p>
                    Found a new owner instead of the trash.
                  </p>
                </div>
                <div className="award-cell reveal">
                  <span className="award-year">300</span>
                  <h3>Pieces of advice</h3>
                  <p>
                    Tips and ideas shared under the items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}