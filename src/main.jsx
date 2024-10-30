import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import HomePage from "./components/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
  {
    path: "/registro",
    element: <RegisterForm/>
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
