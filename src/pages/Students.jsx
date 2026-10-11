import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StudentTable from "../components/students/StudentTable";
import StudentForm from "../components/students/StudentForm";
import SearchBar from "../components/common/SearchBar";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/localStorageService";

import { getFilteredStudents } from "../utils/helpers";

function Students() {

  const { type } = useParams();

  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  function loadStudents() {
    setStudents(getStudents());
  }

  function handleAddStudent(student) {
    addStudent(student);
    loadStudents();
    setShowForm(false);
  }

  function handleUpdateStudent(student) {
    updateStudent(student);
    loadStudents();
    setEditingStudent(null);
    setShowForm(false);
  }

  function handleEdit(student) {
    setEditingStudent(student);
    setShowForm(true);
  }

  function handleDelete(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    deleteStudent(id);

    loadStudents();

  }

  const filteredStudents = getFilteredStudents(type, students);

  const searchedStudents = filteredStudents.filter((student) => {

    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toString().includes(search)
    );

  });

  const pageTitle = {
    all: "All Students",
    passed: "Passed Students",
    failed: "Failed Students",
  };

  return (
    <div className="students-page">

      <div className="students-header">

        <h1>{pageTitle[type]}</h1>

        <button
          className="add-btn"
          onClick={() => {

            setEditingStudent(null);

            setShowForm(!showForm);

          }}
        >
          {showForm ? "Close Form" : "+ Add Student"}
        </button>

      </div>

      {/* Search only in All Students */}

      {type === "all" && (
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      )}

      {showForm && (
        <StudentForm
          initialData={editingStudent || {}}
          isEditing={editingStudent !== null}
          onSubmit={
            editingStudent
              ? handleUpdateStudent
              : handleAddStudent
          }
        />
      )}

      <StudentTable
        students={searchedStudents}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default Students;