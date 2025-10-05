import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import Footer from "./Pages/Footer.jsx";
import HomePop from "./components/HomePop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    {/* <Slider /> */}
    <HomePop />
    <App />
    <Footer />
  </BrowserRouter>
);
