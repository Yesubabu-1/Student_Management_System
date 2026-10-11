// ===============================
// KEYS
// ===============================

const TEACHERS_KEY = "teachers";
const CURRENT_USER_KEY = "currentUser";
const STUDENTS_KEY = "students";

// ===============================
// AUTH FUNCTIONS
// ===============================

// Get all teachers
export function getTeachers() {
  const teachers = localStorage.getItem(TEACHERS_KEY);

  return teachers ? JSON.parse(teachers) : [];
}

// Save teachers
export function saveTeachers(teachers) {
  localStorage.setItem(
    TEACHERS_KEY,
    JSON.stringify(teachers)
  );
}

// Add Teacher
export function addTeacher(teacher) {
  const teachers = getTeachers();

  teachers.push(teacher);

  saveTeachers(teachers);
}

// Current Logged-in User
export function getCurrentUser() {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  return user ? JSON.parse(user) : null;
}

// Save Current User
export function saveCurrentUser(user) {
  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );
}

// Remove Current User
export function removeCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// ===============================
// STUDENT FUNCTIONS
// ===============================

// Get Students
export function getStudents() {
  const students = localStorage.getItem(STUDENTS_KEY);

  return students ? JSON.parse(students) : [];
}

// Save Students
export function saveStudents(students) {
  localStorage.setItem(
    STUDENTS_KEY,
    JSON.stringify(students)
  );
}

// Initialize Students
export function initializeStudents(initialStudents) {
  const students = getStudents();

  if (students.length === 0) {
    saveStudents(initialStudents);
  }
}

// Add Student
export function addStudent(student) {

  const students = getStudents();

  const newStudent = {
    ...student,

    id:
      students.length > 0
        ? Math.max(...students.map((s) => s.id)) + 1
        : 1,
  };

  students.push(newStudent);

  saveStudents(students);
}

// Update Student
export function updateStudent(updatedStudent) {

  const students = getStudents();

  const updatedStudents = students.map((student) =>
    student.id === updatedStudent.id
      ? updatedStudent
      : student
  );

  saveStudents(updatedStudents);
}

// Delete Student
export function deleteStudent(id) {

  const students = getStudents();

  const updatedStudents = students.filter(
    (student) => student.id !== id
  );

  saveStudents(updatedStudents);
}

// Get Student By Id
export function getStudentById(id) {

  const students = getStudents();

  return students.find(
    (student) => student.id === Number(id)
  );
}