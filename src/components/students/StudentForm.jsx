import { useEffect, useState } from "react";

function StudentForm({
  onSubmit,
  initialData = {},
  isEditing = false,
}) {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    marks: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (isEditing) {
      setStudent(initialData);
    }
  }, [initialData, isEditing]);

  function handleChange(event) {
    const { name, value } = event.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const marks = Number(student.marks);

    onSubmit({
      ...student,
      marks,
      status: marks >= 35 ? "Passed" : "Failed",
    });
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <h2>
        {isEditing ? "Edit Student" : "Add Student"}
      </h2>

      <div className="student-grid">

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={student.marks}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={student.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={student.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
          required
        />

      </div>

      <button type="submit">
        {isEditing ? "Update Student" : "Save Student"}
      </button>

    </form>
  );
}

export default StudentForm;