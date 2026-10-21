import { useState } from "react";
import { Link } from "react-router";

function validate(values) {
  const errors = {};

  if (values.username.length < 3 || values.username.length > 20) {
    errors.username = "Username must be between 3 and 20 characters.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (values.password !== values.rePassword) {
    errors.rePassword = "Passwords don't match.";
  }

  return errors;
}

export default function Register({ onRegister }) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
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

        <form onSubmit={submitHandler} noValidate style={{ marginTop: 40, maxWidth: 480 }}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={changeHandler}
            />
            {errors.username && <p className="field-error">{errors.username}</p>}
          </div>

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

          <div className="field">
            <label htmlFor="rePassword">Repeat password</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={values.rePassword}
              onChange={changeHandler}
            />
            {errors.rePassword && <p className="field-error">{errors.rePassword}</p>}
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
