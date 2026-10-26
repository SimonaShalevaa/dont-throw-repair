import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./header.css";

export default function Header({ isMenuOpen, onMenuClick }) {
  const { isAuthenticated, user } = useAuth();
  const [closedMenu, setClosedMenu] = useState("");

  const closeMenu = (e, name) => {
    e.currentTarget.blur();
    setClosedMenu(name);
  };

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
            <li
              className={
                closedMenu === "catalog" ? "nav-item has-drop drop-closed" : "nav-item has-drop"
              }
              onMouseLeave={() => setClosedMenu("")}
            >
              <Link
                className="nav-link"
                to="/catalog"
                aria-haspopup="true"
                onClick={(e) => closeMenu(e, "catalog")}
              >
                Catalog <span className="caret" />
              </Link>
              <ul className="dropdown">
                <li className="drop-label">Categories</li>
                <li>
                  <Link to="/catalog?category=Furniture" onClick={(e) => closeMenu(e, "catalog")}>Furniture</Link>
                </li>
                <li>
                  <Link to="/catalog?category=Electronics" onClick={(e) => closeMenu(e, "catalog")}>Electronics</Link>
                </li>
                <li>
                  <Link to="/catalog?category=Textiles%20%26%20clothes" onClick={(e) => closeMenu(e, "catalog")}>Textiles &amp; clothes</Link>
                </li>
                <li>
                  <Link to="/catalog?category=free" onClick={(e) => closeMenu(e, "catalog")}>Free to take</Link>
                </li>
              </ul>
            </li>
            <li
              className={
                closedMenu === "tips" ? "nav-item has-drop drop-closed" : "nav-item has-drop"
              }
              onMouseLeave={() => setClosedMenu("")}
            >
              <Link
                className="nav-link"
                to="/repair-tips"
                aria-haspopup="true"
                onClick={(e) => closeMenu(e, "tips")}
              >
                Repair Tips <span className="caret" />
              </Link>
              <ul className="dropdown">
                <li className="drop-label">Guides</li>
                <li>
                  <Link to="/repair-tips#before-you-throw" onClick={(e) => closeMenu(e, "tips")}>Before you throw it away</Link>
                </li>
                <li>
                  <Link to="/repair-tips#tool-kit" onClick={(e) => closeMenu(e, "tips")}>Basic tool kit</Link>
                </li>
                <li>
                  <Link to="/repair-tips#common-fixes" onClick={(e) => closeMenu(e, "tips")}>Common fixes</Link>
                </li>
                <li>
                  <Link to="/repair-tips#community" onClick={(e) => closeMenu(e, "tips")}>Community</Link>
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
          type="button"
          className={isMenuOpen ? "menu-toggle open" : "menu-toggle"}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={onMenuClick}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
}
