import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { itemsApi } from "../../api";
import AuthContext from "../../contexts/auth-context";

export default function Details() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    itemsApi.getOne(itemId)
      .then((result) => setItem(result[0] || null))
      .catch((err) => alert(err.message))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  const deleteHandler = async () => {
    const confirmed = window.confirm(`Are you sure you want to delete "${item.title}"?`);

    if (!confirmed) {
      return;
    }

    try {
      const result = await itemsApi.remove(item.id, accessToken);

      if (result.length === 0) {
        alert("The item was not deleted.");
        return;
      }

      navigate("/catalog");
    } catch (err) {
      alert(err.message);
    }
  };

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

  const isOwner = user?.id === item.ownerId;

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
            Posted by{" "}
            <Link to={`/users/${item.ownerId}`}>{item.profiles?.username}</Link>
          </p>
          {isOwner && (
            <div style={{ display: "flex", gap: 16, marginTop: 34 }}>
              <Link to={`/items/${item.id}/edit`} className="btn">
                Edit
              </Link>
              <button type="button" className="btn btn-solid" onClick={deleteHandler}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
