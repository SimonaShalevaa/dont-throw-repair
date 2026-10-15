export default function MobileNavigation() {
  return (
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
        <li>
          <a className="m-link" href="#inquire" data-route="inquire">
            Inquire
          </a>
        </li>
      </ul>
    </nav>
  );
}
