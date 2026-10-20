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
    return <p className="lede">No offers yet. Be the first to help!</p>;
  }

  return (
    <ul className="provenance-list">
      {offers.map((offer) => (
        <li key={offer.id}>
          <p>
            <Link to={`/users/${offer.authorId}`}>{offer.profiles?.username}</Link>:{" "}
            {offer.text}
          </p>

          {offer.id === resolvedByOfferId && <strong>✓ This one helped</strong>}

          {isOwner && canResolve && (
            <button type="button" className="btn" onClick={() => onResolve(offer.id)}>
              {resolveLabel}
            </button>
          )}

          {offer.authorId === userId && (
            <button type="button" className="text-link" onClick={() => onDelete(offer.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
