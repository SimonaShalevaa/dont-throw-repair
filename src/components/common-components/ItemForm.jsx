import { useState } from "react";

const emptyValues = {
  title: "",
  category: "Electronics",
  city: "",
  imageUrl: "",
  description: "",
  giveAway: false,
};

export default function ItemForm({ initialValues = emptyValues, submitLabel, onSubmit }) {
  const [values, setValues] = useState({
    ...initialValues,
    giveAway: String(initialValues.giveAway),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!values.title || !values.city || !values.imageUrl || !values.description) {
      alert("All fields are required!");
      return;
    }

    if (values.title.length < 3 || values.title.length > 60) {
      alert("Title must be between 3 and 60 characters!");
      return;
    }

    if (values.description.length < 10) {
      alert("Description must be at least 10 characters!");
      return;
    }

    if (!values.imageUrl.startsWith("http")) {
      alert("Image URL must start with http or https!");
      return;
    }

    setIsSubmitting(true);

    await onSubmit({
      ...values,
      giveAway: values.giveAway === "true",
    });

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} />
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={values.city} onChange={changeHandler} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" value={values.category} onChange={changeHandler}>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Textiles &amp; clothes</option>
            <option>Bikes</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="giveAway">I want to</label>
          <select id="giveAway" name="giveAway" value={values.giveAway} onChange={changeHandler}>
            <option value="false">Repair it myself</option>
            <option value="true">Give it away</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="What is broken, what you already tried, and the model number if there is one."
          value={values.description}
          onChange={changeHandler}
        />
      </div>

      <button type="submit" className="btn btn-solid" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}