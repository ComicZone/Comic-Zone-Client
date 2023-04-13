
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
       <Routes>
        <Route path="/"/>
         <Route path="/main"/>

         

       </Routes>
      </Router>
      
    </div>
  );
}

export default App;
