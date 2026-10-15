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
              Catalog
            </a>
            <button
              className="m-sub-toggle"
              aria-expanded="false"
              aria-label="Toggle catalog submenu"
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
                Furniture
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                data-route="catalogue"
                data-anchor="cat-tables"
              >
                Free to take
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                data-route="catalogue"
                data-anchor="cat-lighting"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                data-route="catalogue"
                data-anchor="cat-textiles"
              >
                Textiles &amp; clothes
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="m-drop-head">
            <a className="m-link" href="#atelier" data-route="atelier">
              Repair Tips
            </a>
            <button
              className="m-sub-toggle"
              aria-expanded="false"
              aria-label="Toggle repair tips submenu"
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
                Before you throw it away
              </a>
            </li>
            <li>
              <a
                href="#atelier"
                data-route="atelier"
                data-anchor="at-provenance"
              >
                Basic tool kit
              </a>
            </li>
            <li>
              <a
                href="#atelier"
                data-route="atelier"
                data-anchor="at-woodcraft"
              >
                Common fixes
              </a>
            </li>
            <li>
              <a href="#atelier" data-route="atelier" data-anchor="at-press">
                Community
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="m-link" href="#inquire" data-route="inquire">
            Share an item
          </a>
        </li>
      </ul>
    </nav>
  );
}
