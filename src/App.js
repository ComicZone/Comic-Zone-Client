import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Preview from "./Pages/Preview";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <Preview/>
    </div>
  );
}

export default App;
