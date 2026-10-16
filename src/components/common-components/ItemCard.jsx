import { Link } from "react-router";

const statusLabels = {
  needs_help: "Needs help",
  fixed: "Fixed",
  given: "Given away",
};

export default function ItemCard({ id, imageUrl, title, category, city, status }) {
  return (
    <article className="product-card reveal">
      <Link to={`/items/${id}`} className="card-link">
        <div className="frame">
          <img src={imageUrl} alt={title} loading="lazy" />
        </div>
        <div className="product-info">
          <div>
            <h3 className="product-name">{title}</h3>
            <p className="product-cat">{category} · {city}</p>
          </div>
          <span className="product-price">{statusLabels[status]}</span>
        </div>
      </Link>
    </article>
  );
}