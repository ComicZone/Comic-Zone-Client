import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
<<<<<<< HEAD
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Preview from "./Pages/Preview";
// import Error from "./Components/Error";
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"

=======
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Preview from "./Pages/Preview";
import Card from "./Components/Card";
import Books from "./Components/Books";
import Error from "./Components/Error";
<<<<<<< HEAD
>>>>>>> ee3358be43bc9ad316f60aecf8eff3c3e16f2dfb
=======
// import Profile from "./Pages/Profile";
import Layout from "./Components/Layout";
>>>>>>> develop

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/home", element: <Homepage /> },
    { path: "/preview", element: <Preview /> },
<<<<<<< HEAD
<<<<<<< HEAD
    // { path: "*", element: <Error /> },
    {path: "/signup", element: <SignUp />},
    {path: "/login", element: <Login />}
=======
=======
    // { path: "/profile", element: <Profile /> },
>>>>>>> develop
    { path: "*", element: <Error /> },
>>>>>>> ee3358be43bc9ad316f60aecf8eff3c3e16f2dfb

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
<<<<<<< HEAD
   
  ]);
  return routes;
}

=======
  ]);
  return routes;
}
>>>>>>> ee3358be43bc9ad316f60aecf8eff3c3e16f2dfb

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
<<<<<<< HEAD
        {/* <Navbar /> */}
          <AppRoutes />
        {/* <Footer /> */}
=======
=======
      <Router>    
>>>>>>> develop
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
>>>>>>> ee3358be43bc9ad316f60aecf8eff3c3e16f2dfb
      </Router>
    </div>
  );
}

export default App;