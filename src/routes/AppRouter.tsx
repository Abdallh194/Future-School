import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainLayout = lazy(() => import("@layouts/MainLayout"));
import HomeIndex from "@pages/HomeIndex";
import Login from "@pages/Login";
import Register from "@pages/Register";

import Loading from "@Components/Loading/Loading";
import UserProfile from "@pages/UserProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
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
        path: "userprofile",
        element: <UserProfile />,
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
