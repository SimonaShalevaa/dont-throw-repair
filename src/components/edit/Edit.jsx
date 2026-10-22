import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import { itemsApi } from "../../api";
import AuthContext from "../../contexts/auth-context";
import ItemForm from "../common-components/ItemForm";

export default function Edit() {
  const { itemId } = useParams();
  const { user, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    itemsApi.getOne(itemId)
      .then((result) => setItem(result[0] || null))
      .catch((err) => alert(err.message))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  const editHandler = async (values) => {
    const data = {
      title: values.title,
      category: values.category,
      city: values.city,
      imageUrl: values.imageUrl,
      description: values.description,
      giveAway: values.giveAway,
    };

    const result = await itemsApi.update(itemId, data, accessToken);

    if (result.length === 0) {
      throw new Error("Nothing was updated.");
    }

    navigate(`/items/${itemId}`);
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

  if (item.ownerId !== user?.id) {
    return <Navigate to={`/items/${itemId}`} replace />;
  }

  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Edit</span>
        <h1 className="editorial-title page-hero-title">{item.title}</h1>

        <div style={{ marginTop: 40, maxWidth: 720 }}>
          <ItemForm
            initialValues={{
              title: item.title,
              category: item.category,
              city: item.city || "",
              imageUrl: item.imageUrl || "",
              description: item.description,
              giveAway: item.giveAway,
            }}
            submitLabel="Save changes"
            onSubmit={editHandler}
          />
        </div>
      </div>
    </section>
  );
}