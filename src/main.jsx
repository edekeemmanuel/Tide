import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ErrorPage from "./Error.jsx";
import Home from "./component/homepage/Home.jsx";
import Categorie from "./component/categories/Categorie.jsx";
import MyClass from "./component/myclass/MyClass.jsx";
import Login from "./component/login/Login.jsx";
import SignUp from "./component/signup/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  children: [
    {
      path: "/categories/:categorieId",
      element: <Categorie />,
    },
    {
      path: "/classes/class:id",
      element: <MyClass />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]
  }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
