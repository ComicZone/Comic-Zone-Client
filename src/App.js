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
import Error from "./Components/Error";
>>>>>>> ee3358be43bc9ad316f60aecf8eff3c3e16f2dfb

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/home", element: <Homepage /> },
    { path: "/preview", element: <Preview /> },
<<<<<<< HEAD
    // { path: "*", element: <Error /> },
    {path: "/signup", element: <SignUp />},
    {path: "/login", element: <Login />}
=======
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
      <Router>
<<<<<<< HEAD
        {/* <Navbar /> */}
          <AppRoutes />
        {/* <Footer /> */}
=======
        <Navbar />
        <AppRoutes />
        <Footer />
>>>>>>> ee3358be43bc9ad316f60aecf8eff3c3e16f2dfb
      </Router>
    </div>
  );
}

export default App;