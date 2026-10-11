import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getStudentById } from "../services/localStorageService";

function StudentDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {

    setStudent(getStudentById(id));

  }, [id]);

  if (!student) {

    return (

      <div className="student-details">

        <h2>Student Not Found</h2>

        <button onClick={() => navigate(-1)}>
          Back
        </button>

      </div>

    );

  }

  return (

    <div className="student-details">

      <h1>Student Details</h1>

      <div className="details-card">

        <div className="detail-row">
          <strong>ID :</strong> {student.id}
        </div>

        <div className="detail-row">
          <strong>Name :</strong> {student.name}
        </div>

        <div className="detail-row">
          <strong>Age :</strong> {student.age}
        </div>

        <div className="detail-row">
          <strong>Gender :</strong> {student.gender}
        </div>

        <div className="detail-row">
          <strong>Marks :</strong> {student.marks}
        </div>

        <div className="detail-row">
          <strong>Status :</strong> {student.status}
        </div>

        <div className="detail-row">
          <strong>Phone :</strong> {student.phone}
        </div>

        <div className="detail-row">
          <strong>Email :</strong> {student.email}
        </div>

        <div className="detail-row">
          <strong>Address :</strong> {student.address}
        </div>

      </div>

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

    </div>

  );

}

export default StudentDetails;