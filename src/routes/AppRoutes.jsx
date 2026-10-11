import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Students from "../pages/Students";
import StudentDetails from "../pages/StudentDetails";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

// Components
import ProtectedRoute from "../components/common/ProtectedRoute";
import MainLayout from "../components/layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />

          <Route
            path="/students/:type"
            element={<Students />}
          />

          <Route
            path="/students/details/:id"
            element={<StudentDetails />}
          />
        </Route>

        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;