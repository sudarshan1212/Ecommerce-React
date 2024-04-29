import React from "react";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SingleProduct } from "./components/SingleProduct";
import { porductsData } from "./api/Api";
import { Login } from "./pages/Login";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: porductsData,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
