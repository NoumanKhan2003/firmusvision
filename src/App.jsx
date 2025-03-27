import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
