import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import request from "../../utils/request";
import ItemCard from "../common-components/ItemCard";

export default function Profile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      request(`profiles?id=eq.${userId}`),
      request(`items?ownerId=eq.${userId}&order=created_at.desc`),
    ])
      .then(([profiles, userItems]) => {
        setProfile(profiles[0] || null);
        setItems(userItems);
      })
      .catch((err) => alert(err.message))
      .finally(() => setIsLoading(false));
  }, [userId]);

  if (isLoading) {
    return (
      <section className="page-hero">
        <div className="container">
          <p className="lede">Loading...</p>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1 className="editorial-title page-hero-title">User not found</h1>
          <Link to="/catalog" className="text-link" style={{ marginTop: 24 }}>
            Back to catalog
          </Link>
        </div>
      </section>
    );
  }

  const fixedCount = items.filter((item) => item.status === "fixed").length;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Profile</span>
          <h1 className="editorial-title page-hero-title">
            {profile.username}
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            {items.length} items posted · {fixedCount} fixed
          </p>
        </div>
      </section>

      <div className="catalogue-section">
        <div className="container">
          <div className="product-grid">
            {items.length > 0 ? (
              items.map((item) => <ItemCard key={item.id} {...item} />)
            ) : (
              <h3 className="no-articles">No items yet</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
