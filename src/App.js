import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Error from "./Components/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Error/>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
