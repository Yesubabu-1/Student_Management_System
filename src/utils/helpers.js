export function getFilteredStudents(type, students) {

  switch (type) {

    case "passed":
      return students.filter(
        (student) => student.status === "Passed"
      );

    case "failed":
      return students.filter(
        (student) => student.status === "Failed"
      );

    default:
      return students;

  }

}