export default function ItemCard({ image, title, category, city, status }) {
  return (
    <article className="product-card reveal">
      <a href="#catalogue" className="card-link">
        <div className="frame">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="product-info">
          <div>
            <h3 className="product-name">{title}</h3>
            <p className="product-cat">
              {category} · {city}
            </p>
          </div>
          <span className="product-price">{status}</span>
        </div>
      </a>
    </article>
  );
}
