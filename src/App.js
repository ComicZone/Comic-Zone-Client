import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Preview from "./Pages/Preview";
import Card from "./Components/Card";
import Books from "./Components/Books";
import Error from "./Components/Error";
// import Profile from "./Pages/Profile";
import Layout from "./Components/Layout";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/home", element: <Homepage /> },
    { path: "/preview", element: <Preview /> },
    // { path: "/profile", element: <Profile /> },
    { path: "*", element: <Error /> },

    // {
    //   element: <Authorize />,
    //   children: [
    //     { path: "/user/account", element: <UserAccount /> },
    //   ],
    // },

    // {
    //   element: <Authenticate />,
    //   children: [
    //     { path: "/user/signup", element: <Signup /> },
    //   ],
    // },
  ]);
  return routes;
}

function App() {
  return (
    <div className="App">
      <Router>    
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
      </Router>
    </div>
  );
}

export default App;