import { useState } from "react";
import { Link } from "react-router";

export default function Login({ onLogin }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      alert("Email and password are required!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      alert("Please enter a valid email!");
      return;
    }

    onLogin(values);
  };

  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="editorial-title page-hero-title">Login</h1>

        <form onSubmit={submitHandler} style={{ marginTop: 40, maxWidth: 480 }}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
            />
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