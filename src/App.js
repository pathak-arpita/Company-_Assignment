import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Errorpage from "./components/Errorpage";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouts = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouts} />);
