import { useEffect, useState } from "react";
import request from "../../utils/request";
import ItemCard from "../common-components/ItemCard";

export default function Catalogue() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    request("items?order=created_at.desc")
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="page" id="page-catalogue">
      <div className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">Catalog</span>
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
        </div>
      </div>
      <div className="catalogue-section">
        <div className="container">
          <div className="product-grid">
            {isLoading && <p className="lede">Loading...</p>}
            {error && <p className="form-error">{error}</p>}
            {!isLoading && !error && items.length === 0 && (
              <h3 className="no-articles">No items yet</h3>
            )}
            {items.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
