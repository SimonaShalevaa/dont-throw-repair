import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="brand">
                Don't throw <span>//</span> repair or share
              </Link>
              <p>
                Repair, reuse, share. Keep things out of the landfill and help
                each other.
              </p>
            </div>
            <div className="footer-col">
              <h4>Catalog</h4>
              <ul>
                <li>
                  <Link to="/catalog?category=Furniture">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link to="/catalog?category=free">
                    Free to take
                  </Link>
                </li>
                <li>
                  <Link to="/catalog?category=Electronics">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/catalog?category=Textiles%20%26%20clothes">
                    Textiles &amp; clothes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Repair Tips</h4>
              <ul>
                <li>
                  <Link to="/repair-tips#before-you-throw">
                    Before you throw it away
                  </Link>
                </li>
                <li>
                  <Link to="/repair-tips#tool-kit">
                    Basic tool kit
                  </Link>
                </li>
                <li>
                  <Link to="/repair-tips#common-fixes">
                    Common fixes
                  </Link>
                </li>
                <li>
                  <Link to="/repair-tips#community">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Account</h4>
              <ul>
                <li>
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/create">
                    Share an item
                  </Link>
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