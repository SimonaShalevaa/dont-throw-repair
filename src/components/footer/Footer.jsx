export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="brand" data-route="home">
                Don't throw <span>//</span> repair or share
              </a>
              <p>
                Repair, reuse, share. Keep things out of the landfill and help
                each other.
              </p>
            </div>
            <div className="footer-col">
              <h4>Catalog</h4>
              <ul>
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
            </div>
            <div className="footer-col">
              <h4>Repair Tips</h4>
              <ul>
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
            </div>
            <div className="footer-col">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="#inquire" data-route="inquire">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#inquire" data-route="inquire">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#inquire" data-route="inquire">
                    Share an item
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <span>
              © 2026 Dont-throw-repair. React course project.
            </span>
            <span>
              Design:{" "}
              <a
                href="https://templatemo.com"
                target="_blank"
                rel="nofollow noopener"
              >
                TemplateMo
              </a>
            </span>
          </div>
        </div>
      </footer>
  )
}