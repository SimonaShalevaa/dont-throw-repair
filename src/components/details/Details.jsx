import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { itemsApi, offersApi } from "../../api";
import useAuth from "../../hooks/useAuth";
import OfferForm from "./offer-form/OfferForm";
import OfferList from "./offer-list/OfferList";
import "./details.css";

export default function Details() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const { user, accessToken, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    itemsApi.getOne(itemId)
      .then((result) => setItem(result[0] || null))
      .catch((err) => alert(err.message))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  useEffect(() => {
    offersApi
      .getByItem(itemId)
      .then(setOffers)
      .catch((err) => alert(err.message));
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

  const createOfferHandler = async (text) => {
    try {
      const result = await offersApi.create(itemId, text, accessToken);
      const newOffer = { ...result[0], profiles: { username: user.user_metadata?.username } };

      setOffers((state) => [...state, newOffer]);
    } catch (err) {
      alert(err.message);
    }
  };

  const deleteOfferHandler = async (offerId) => {
    if (!window.confirm("Delete this offer?")) {
      return;
    }

    try {
      await offersApi.remove(offerId, accessToken);
      setOffers((state) => state.filter((offer) => offer.id !== offerId));
    } catch (err) {
      alert(err.message);
    }
  };

  const resolveHandler = async (offerId) => {
    const newStatus = item.giveAway ? "given" : "fixed";

    try {
      const result = await itemsApi.update(
        item.id,
        { status: newStatus, resolvedByOfferId: offerId },
        accessToken
      );

      setItem((state) => ({ ...state, ...result[0] }));
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
          <Link to="/catalog" className="text-link back-link">
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
          <h1 className="editorial-title item-title">{item.title}</h1>
          {item.status !== "needs_help" && (
            <span className="eyebrow">{item.status === "fixed" ? "Fixed ✓" : "Given away ✓"}</span>
          )}
          <p className="lede">{item.description}</p>
          <p className="lede posted-by">
            Posted by{" "}
            <Link to={`/users/${item.ownerId}`}>{item.profiles?.username}</Link>
          </p>
          {isOwner && (
            <div className="owner-actions">
              <Link to={`/items/${item.id}/edit`} className="btn">
                Edit
              </Link>
              <button type="button" className="btn btn-solid" onClick={deleteHandler}>
                Delete
              </button>
            </div>
          )}

          <div className="offers">
            <h2 className="editorial-title offers-title">Offers</h2>

            <OfferList
              offers={offers}
              userId={user?.id}
              isOwner={isOwner}
              canResolve={item.status === "needs_help"}
              resolvedByOfferId={item.resolvedByOfferId}
              resolveLabel={item.giveAway ? "Give to this person" : "This helped"}
              onDelete={deleteOfferHandler}
              onResolve={resolveHandler}
            />

            {isAuthenticated && !isOwner && item.status === "needs_help" && (
              <OfferForm onCreate={createOfferHandler} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
