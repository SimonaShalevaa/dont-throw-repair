import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import request from "../../utils/request";
import ItemCard from "../common-components/ItemCard";

export default function Catalogue() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    request("items?order=created_at.desc")
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  let shownItems = items;

  if (category === "free") {
    shownItems = items.filter((item) => item.giveAway && item.status === "needs_help");
  } else if (category) {
    shownItems = items.filter((item) => item.category === category);
  }

  return (
    <section className="page" id="page-catalogue">
      <div className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">
            {category === "free" ? "Free to take" : category || "Catalog"}
          </span>
          <h1 className="editorial-title page-hero-title">
            Things worth{" "}
            <span
              className="editorial-italic"
              style={{ color: "var(--accent-violet)" }}
            >
              saving
            </span>
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Browse items that need repair or are free to take. Pick a category
            and see where you can help.
          </p>
          {category && (
            <Link to="/catalog" className="text-link" style={{ marginTop: 24 }}>
              Show all items
            </Link>
          )}
        </div>
      </div>
      <div className="catalogue-section">
        <div className="container">
          <div className="product-grid">
            {isLoading && <p className="lede">Loading...</p>}
            {error && <p className="form-error">{error}</p>}
            {!isLoading && !error && shownItems.length === 0 && (
              <h3 className="no-articles">No items yet</h3>
            )}
            {shownItems.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
