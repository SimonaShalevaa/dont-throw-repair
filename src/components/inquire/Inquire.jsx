import { useNavigate } from "react-router";
import { itemsApi } from "../../api";
import useAuth from "../../hooks/useAuth";
import ItemForm from "../common-components/ItemForm";

export default function Inquire() {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  const createHandler = async (values) => {
    const result = await itemsApi.create(values, accessToken);

    navigate(`/items/${result[0].id}`);
  };

  return (
    <section className="page" id="page-inquire">
      <div className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">Share an item</span>
          <h1 className="editorial-title page-hero-title">
            Give it a{" "}
            <span
              className="editorial-italic"
              style={{ color: "var(--accent-violet)" }}
            >
              second life
            </span>
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Tell the community what is broken. Other users will suggest how to
            fix it, or someone may want to take it and repair it.
          </p>
        </div>
      </div>
      <div className="container inquire-grid">
        <div className="inquire-details reveal">
          <h3>Take a good photo</h3>
          <p>
            Use daylight and show the broken part up close. A clear photo gets
            better advice.
          </p>
          <h3>Describe the problem</h3>
          <p>
            What happened, what you already tried and the model number, if there
            is one.
          </p>
          <h3>Choose the right category</h3>
          <p>
            So that people who know how to fix this kind of thing can find it
            faster.
          </p>
          <h3>Free to take?</h3>
          <p>
            If you do not want to repair it yourself, tick the box and give it
            to someone who will.
          </p>
        </div>
        <ItemForm submitLabel="Share item" onSubmit={createHandler} />
      </div>
    </section>
  );
}
