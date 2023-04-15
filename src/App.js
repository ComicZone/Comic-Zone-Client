import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Preview from "./Pages/Preview";
import Card from "./Components/Card";
import Books from "./Components/Books";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Card/>
        <Books/>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <Preview/>
    </div>
  );
}

export default App;
