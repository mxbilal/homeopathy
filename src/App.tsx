import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/Homepage";

import "./App.scss";

const About = () => <h1 className="bg-slate-900">About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Products = () => <h1>Products Page</h1>;

const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
