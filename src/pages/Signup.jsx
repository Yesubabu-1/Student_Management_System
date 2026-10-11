import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  getTeachers,
  addTeacher,
} from "../services/localStorageService";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  function handleSubmit(event) {

    event.preventDefault();

    setError("");

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const teachers = getTeachers();

    const teacherExists = teachers.find(
      (teacher) => teacher.email === email
    );

    if (teacherExists) {
      setError("Email is already registered.");
      return;
    }

    addTeacher({
      id: Date.now(),
      name,
      email,
      password,
    });

    alert("Account Created Successfully!");

    navigate("/login");

  }

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>🎓 Student Management</h1>

        <p>
          Create your teacher account
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button type="submit">
            Create Account
          </button>

        </form>

        <div className="auth-footer">

          Already have an account?

          <Link to="/login">
            {" "}Login
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Signup;