import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
