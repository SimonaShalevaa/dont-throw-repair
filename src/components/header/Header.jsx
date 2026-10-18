import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../contexts/auth-context";

export default function Header() {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          Don't throw <span>//</span> repair or share
        </Link>
        <nav className="main-nav" aria-label="Primary">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item has-drop">
              <Link className="nav-link" to="/catalog" aria-haspopup="true">
                Catalog <span className="caret" />
              </Link>
              <ul className="dropdown">
                <li className="drop-label">Categories</li>
                <li>
                  <Link to="/catalog">Furniture</Link>
                </li>
                <li>
                  <Link to="/catalog">Electronics</Link>
                </li>
                <li>
                  <Link to="/catalog">Textiles &amp; clothes</Link>
                </li>
                <li>
                  <Link to="/catalog">Free to take</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-drop">
              <Link className="nav-link" to="/repair-tips" aria-haspopup="true">
                Repair Tips <span className="caret" />
              </Link>
              <ul className="dropdown">
                <li className="drop-label">Guides</li>
                <li>
                  <Link to="/repair-tips">Before you throw it away</Link>
                </li>
                <li>
                  <Link to="/repair-tips">Basic tool kit</Link>
                </li>
                <li>
                  <Link to="/repair-tips">Common fixes</Link>
                </li>
                <li>
                  <Link to="/repair-tips">Community</Link>
                </li>
              </ul>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={`/users/${user?.id}`}>
                    My profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          {isAuthenticated && (
            <Link to="/create" className="nav-cta">
              + Share an item
            </Link>
          )}
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
