import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../contexts/auth-context";

export default function MobileNavigation() {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <nav className="mobile-nav" id="mobileNav" aria-label="Mobile">
      <ul>
        <li>
          <Link className="m-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <div className="m-drop-head">
            <Link className="m-link" to="/catalog">
              Catalog
            </Link>
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
              <Link to="/catalog">Furniture</Link>
            </li>
            <li>
              <Link to="/catalog">Free to take</Link>
            </li>
            <li>
              <Link to="/catalog">Electronics</Link>
            </li>
            <li>
              <Link to="/catalog">Textiles &amp; clothes</Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="m-drop-head">
            <Link className="m-link" to="/repair-tips">
              Repair Tips
            </Link>
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
            <li>
              <Link className="m-link" to="/create">
                Share an item
              </Link>
            </li>
            <li>
              <Link className="m-link" to={`/users/${user?.id}`}>
                My profile
              </Link>
            </li>
            <li>
              <Link className="m-link" to="/logout">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="m-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="m-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
