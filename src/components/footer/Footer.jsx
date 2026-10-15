export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="brand" data-route="home">
                LUMEN <span>//</span> 80
              </a>
              <p>
                A Scandinavian atelier for furniture and spatial design.
                Copenhagen, since 1980.
              </p>
            </div>
            <div className="footer-col">
              <h4>Catalogue</h4>
              <ul>
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
            </div>
            <div className="footer-col">
              <h4>Atelier</h4>
              <ul>
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
            </div>
            <div className="footer-col">
              <h4>Studio</h4>
              <ul>
                <li>
                  <a href="#inquire" data-route="inquire">
                    Inquire
                  </a>
                </li>
                <li>
                  <a href="#inquire" data-route="inquire">
                    Book consultation
                  </a>
                </li>
                <li>
                  <a href="#inquire" data-route="inquire">
                    Trade programme
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <span>
              © <span id="year" /> LUMEN // 80. All rights reserved.
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