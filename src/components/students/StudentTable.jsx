import StudentRow from "./StudentRow";

function StudentTable({
  students,
  onEdit,
  onDelete,
}) {

  return (

    <table className="student-table">

      <thead>

        <tr>

          <th>ID</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Status</th>
          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {

          students.map((student) => (

            <StudentRow
              key={student.id}
              student={student}
              onEdit={onEdit}
              onDelete={onDelete}
            />

          ))

        }

      </tbody>

    </table>

  );

}

export default StudentTable;