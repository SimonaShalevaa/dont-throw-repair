import { useState } from "react";

export default function OfferForm({ onCreate }) {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (text.trim().length < 3) {
      alert("Your offer must be at least 3 characters!");
      return;
    }

    if (text.length > 500) {
      alert("Your offer must be up to 500 characters!");
      return;
    }

    setIsSubmitting(true);
    await onCreate(text.trim());
    setIsSubmitting(false);
    setText("");
  };

  return (
    <form onSubmit={submitHandler} className="offer-form">
      <div className="field">
        <label htmlFor="offer">Offer help</label>
        <textarea
          id="offer"
          name="offer"
          placeholder="How would you fix it? Or write that you want to take it."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-solid" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send offer"}
      </button>
    </form>
  );
}
