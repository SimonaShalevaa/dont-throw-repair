export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" data-route="home">
          Don`t throw <span>//</span> repair or share
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
                Branches <span className="caret" />
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
                  <a
                    href="#atelier"
                    data-route="atelier"
                    data-anchor="at-press"
                  >
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
  );
}
