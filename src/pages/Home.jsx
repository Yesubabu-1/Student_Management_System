import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getStudents } from "../services/localStorageService";

function Home() {

  const navigate = useNavigate();

  const currentUser = useSelector(
    (state) => state.auth.currentUser
  );

  const students = getStudents();

  const totalStudents = students.length;

  const passedStudents = useMemo(
    () =>
      students.filter(
        (student) => student.status === "Passed"
      ).length,
    [students]
  );

  const failedStudents = useMemo(
    () =>
      students.filter(
        (student) => student.status === "Failed"
      ).length,
    [students]
  );

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <h1>
          Welcome, {currentUser?.name} 👋
        </h1>

        <p>
          Monitor and manage student records efficiently.
        </p>

      </div>

      <div className="card-container">

        <div
          className="card total-card"
          onClick={() => navigate("/students/all")}
        >
          <div className="card-icon">👨‍🎓</div>

          <h3>Total Students</h3>

          <h1>{totalStudents}</h1>
        </div>

        <div
          className="card passed-card"
          onClick={() => navigate("/students/passed")}
        >
          <div className="card-icon">✅</div>

          <h3>Passed Students</h3>

          <h1>{passedStudents}</h1>
        </div>

        <div
          className="card failed-card"
          onClick={() => navigate("/students/failed")}
        >
          <div className="card-icon">❌</div>

          <h3>Failed Students</h3>

          <h1>{failedStudents}</h1>
        </div>

      </div>

    </div>
  );
}

export default Home;