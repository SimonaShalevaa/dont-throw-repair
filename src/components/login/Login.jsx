import { useState } from "react";
import { Link } from "react-router";

function validate(values) {
  const errors = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  return errors;
}

export default function Login({ onLogin }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onLogin(values);
  };

  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="editorial-title page-hero-title">Login</h1>

        <form onSubmit={submitHandler} noValidate style={{ marginTop: 40, maxWidth: 480 }}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            />
            {errors.password && <p className="field-error">{errors.password}</p>}
          </div>

          <button type="submit" className="btn btn-solid">
            Login
          </button>

          <p className="lede" style={{ marginTop: 24 }}>
            No account yet? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
}