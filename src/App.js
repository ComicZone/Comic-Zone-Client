import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
