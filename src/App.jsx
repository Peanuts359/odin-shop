import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Root from "./Components/Pages/Root";
import Shop from "./Components/Pages/Shop";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";

import Error from "./Components/Pages/Error";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Navigate to="/shop" />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
