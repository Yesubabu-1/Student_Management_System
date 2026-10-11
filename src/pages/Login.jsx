import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../redux/authSlice";
import { getTeachers } from "../services/localStorageService";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  function handleSubmit(e) {

    e.preventDefault();

    setError("");

    const teachers = getTeachers();

    const teacher = teachers.find(
      (teacher) =>
        teacher.email === formData.email &&
        teacher.password === formData.password
    );

    if (!teacher) {
      setError("Invalid Email or Password");
      return;
    }

    dispatch(login(teacher));

    navigate("/");

  }

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>🎓 Student Management</h1>

        <p>
          Welcome back! Login to continue.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-footer">

          Don't have an account?

          <Link to="/signup">
            {" "}Sign Up
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Login;