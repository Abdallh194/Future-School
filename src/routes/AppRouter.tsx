import MainLayout from "@layouts/MainLayout";
import HomeIndex from "@pages/HomeIndex";
import Login from "@pages/Login";
import Register from "@pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
