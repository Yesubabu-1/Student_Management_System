import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/authSlice";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.auth.currentUser);

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <nav className="navbar">

      <div className="logo">
        Student Management
      </div>
      <div className="nav-links">
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/students/all">
          Students
        </NavLink>

      </div>

      <div className="nav-right">

        <ThemeToggle />

        <span>
          Welcome, {currentUser?.name}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;