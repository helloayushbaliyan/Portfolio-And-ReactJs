import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import { Route } from "react-router";
import Layout from "./layout.jsx";
import About from "./components/about/about.jsx";
import Blog from "./components/blog/blog.jsx";
import Pricing from "./components/pricing/pricing.jsx";
import Services from "./components/services/services.jsx";
import Home from "./components/home/home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </>
);
