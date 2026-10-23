import { useContext, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../../contexts/auth-context";
import "./mobile-navigation.css";

export default function MobileNavigation({ isOpen, onClose }) {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [openSub, setOpenSub] = useState("");

  const toggleSub = (name) => {
    setOpenSub(openSub === name ? "" : name);
  };

  const linkClickHandler = (e) => {
    if (e.target.tagName === "A") {
      setOpenSub("");
      onClose();
    }
  };

  return (
    <nav
      className={isOpen ? "mobile-nav open" : "mobile-nav"}
      aria-label="Mobile"
      onClick={linkClickHandler}
    >
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
              type="button"
              className={openSub === "catalog" ? "m-sub-toggle open" : "m-sub-toggle"}
              aria-expanded={openSub === "catalog"}
              aria-label="Toggle catalog submenu"
              onClick={() => toggleSub("catalog")}
            >
              <span className="caret" />
            </button>
          </div>
          <ul className={openSub === "catalog" ? "m-sub open" : "m-sub"}>
            <li>
              <Link to="/catalog?category=Furniture">Furniture</Link>
            </li>
            <li>
              <Link to="/catalog?category=free">Free to take</Link>
            </li>
            <li>
              <Link to="/catalog?category=Electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/catalog?category=Textiles%20%26%20clothes">Textiles &amp; clothes</Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="m-drop-head">
            <Link className="m-link" to="/repair-tips">
              Repair Tips
            </Link>
            <button
              type="button"
              className={openSub === "tips" ? "m-sub-toggle open" : "m-sub-toggle"}
              aria-expanded={openSub === "tips"}
              aria-label="Toggle repair tips submenu"
              onClick={() => toggleSub("tips")}
            >
              <span className="caret" />
            </button>
          </div>
          <ul className={openSub === "tips" ? "m-sub open" : "m-sub"}>
            <li>
              <Link to="/repair-tips#before-you-throw">Before you throw it away</Link>
            </li>
            <li>
              <Link to="/repair-tips#tool-kit">Basic tool kit</Link>
            </li>
            <li>
              <Link to="/repair-tips#common-fixes">Common fixes</Link>
            </li>
            <li>
              <Link to="/repair-tips#community">Community</Link>
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
