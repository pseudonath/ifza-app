import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import AllVisaPage from "./pages/all-visa";
import HomePage from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-visa" element={<AllVisaPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
