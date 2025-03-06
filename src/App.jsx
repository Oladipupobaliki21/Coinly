import { BrowserRouter as Router, Routes, Route } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import FaqsPage from "./pages/FaqsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FaqsPage />} />
        <Route path="/signIn" element={<SignInPage/>} />
        <Route path="/signUp" element={<SignUpPage/>} />
      </Routes>
    </Router>


  );
}

export default App