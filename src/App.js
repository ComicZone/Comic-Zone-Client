import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Preview from "./Pages/Preview";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/main" />
        </Routes>
      </Router>
      <Preview/>
    </div>
  );
}

export default App;
