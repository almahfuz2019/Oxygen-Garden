import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Root from "../Layout/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
      // {
      //   path: "/contact",
      // },
      // {
      //   path: "/about",
      // },
      // {
      //   path: "/pricing",
      // },
      // {
      //   path: "/templates",
      // },

      // {
      //   path: "/template/details/:name",
      // },
    ],
  },
]);

export default router;
