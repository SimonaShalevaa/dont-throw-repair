export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" data-route="home">
          Don't throw <span>//</span> repair or share
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
                Catalog <span className="caret" />
              </a>
              <ul className="dropdown">
                <li className="drop-label">Categories</li>
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
                <li>
                  <a
                    href="#catalogue"
                    data-route="catalogue"
                    data-anchor="cat-tables"
                  >
                    Free to take
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
                Repair Tips <span className="caret" />
              </a>
              <ul className="dropdown">
                <li className="drop-label">Guides</li>
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
                  <a
                    href="#atelier"
                    data-route="atelier"
                    data-anchor="at-press"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#inquire" data-route="inquire">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#inquire" data-route="inquire">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#logout">
                Logout
              </a>
            </li>
          </ul>
          <a href="#inquire" className="nav-cta" data-route="inquire">
            + Share an item
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
