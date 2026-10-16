import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import request from "../../utils/request";

export default function Details() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    request(`items?id=eq.${itemId}&select=*,profiles(username)`)
      .then((result) => setItem(result[0] || null))
      .catch((err) => alert(err.message))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  if (isLoading) {
    return (
      <section className="page-hero">
        <div className="container">
          <p className="lede">Loading...</p>
        </div>
      </section>
    );
  }

  if (!item) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1 className="editorial-title page-hero-title">Item not found</h1>
          <Link to="/catalog" className="text-link" style={{ marginTop: 24 }}>
            Back to catalog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container split">
        <div className="frame">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="split-content">
          <span className="eyebrow">
            {item.category} · {item.city}
          </span>
          <h1 className="editorial-title">{item.title}</h1>
          <p className="lede">{item.description}</p>
          <p className="lede" style={{ marginTop: 16 }}>
            Posted by {item.profiles?.username}
          </p>
        </div>
      </div>
    </section>
  );
}