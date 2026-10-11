import { Link } from "react-router-dom";

function StudentRow({
  student,
  onEdit,
  onDelete,
}) {

  return (

    <tr>

      <td>{student.id}</td>

      <td>

        <Link
          to={`/students/details/${student.id}`}
        >
          {student.name}
        </Link>

      </td>

      <td>{student.marks}</td>

      <td>{student.status}</td>

      <td>

        <button
          onClick={() => onEdit(student)}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>

      </td>

    </tr>

  );

}

export default StudentRow;