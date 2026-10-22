import { Link } from "react-router";

export default function OfferList({
  offers,
  userId,
  isOwner,
  canResolve,
  resolvedByOfferId,
  resolveLabel,
  onDelete,
  onResolve,
}) {
  if (offers.length === 0) {
    return <p className="offers-empty">No offers yet. Be the first to help!</p>;
  }

  return (
    <ul className="offer-list">
      {offers.map((offer) => (
        <li
          key={offer.id}
          className={offer.id === resolvedByOfferId ? "offer offer-helped" : "offer"}
        >
          <p className="offer-text">
            <Link to={`/users/${offer.authorId}`} className="offer-author">
              {offer.profiles?.username}
            </Link>
            {offer.text}
          </p>

          {offer.id === resolvedByOfferId && (
            <span className="offer-badge">✓ This one helped</span>
          )}

          <div className="offer-actions">
            {isOwner && canResolve && (
              <button type="button" className="btn" onClick={() => onResolve(offer.id)}>
                {resolveLabel}
              </button>
            )}

            {offer.authorId === userId && (
              <button type="button" className="offer-delete" onClick={() => onDelete(offer.id)}>
                Delete
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
