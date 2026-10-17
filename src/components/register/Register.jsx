import { useState } from "react";
import { Link } from "react-router";

export default function Register({ onRegister }) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!values.username || !values.email || !values.password || !values.rePassword) {
      alert("All fields are required!");
      return;
    }

    if (values.username.length < 3) {
      alert("Username must be at least 3 characters!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      alert("Please enter a valid email!");
      return;
    }

    if (values.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (values.password !== values.rePassword) {
      alert("Passwords do not match!");
      return;
    }

    onRegister({
      username: values.username,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="editorial-title page-hero-title">Register</h1>

        <form onSubmit={submitHandler} style={{ marginTop: 40, maxWidth: 480 }}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={values.username} onChange={changeHandler} />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={values.email} onChange={changeHandler} />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} />
          </div>

          <div className="field">
            <label htmlFor="rePassword">Repeat password</label>
            <input type="password" id="rePassword" name="rePassword" value={values.rePassword} onChange={changeHandler} />
          </div>

          <button type="submit" className="btn btn-solid">
            Register
          </button>

          <p className="lede" style={{ marginTop: 24 }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}