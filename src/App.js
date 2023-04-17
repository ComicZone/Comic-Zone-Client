import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Preview from "./Pages/Preview";
// import Error from "./Components/Error";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Rnavbar from "./Components/Rnav";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import Userdashboard from "./Pages/Userdashboard";
import Profile from "./Pages/Profile";

import Summary from "./Pages/Summary";

// import Profile from "./Pages/Profile";
import Layout from "./Components/Layout";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/home", element: <Homepage /> },
    { path: "/preview/:bookId", element: <Preview /> },
    { path: "/userdashboard", element: <Userdashboard /> },
    { path: "/profile", element: <Profile /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/summary", element: <Summary /> },
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
        <Rnavbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
