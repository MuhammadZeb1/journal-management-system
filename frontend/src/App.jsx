import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import RoleManagement from "./pages/RoleManagement.jsx";
import AuthorRequestPage from "./pages/AuthorRequestPage.jsx";
import AdminApprovePage from "./pages/AdminApprovePage.jsx";
import LoginSuccess from "./pages/LoginSuccess.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-expert" element={<AuthorRequestPage />} />
        <Route path="/admin-approve" element={<AdminApprovePage />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        </Routes>
      
    </>
  );
}

export default App;
