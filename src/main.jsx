import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/layout.jsx";
import Homepage from "./app/page.jsx";
import AboutPage from "./app/about/page.jsx";
import ServicesPage from "./app/services/page.jsx";
import PortfolioPage from "./app/portfolio/page.jsx";
import BlogPage, { fetchdata } from "./app/blog/page.jsx";
import ContactPage from "./app/contact/page.jsx";
import Article from "./components/article.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route loader={fetchdata} path="/blog" element={<BlogPage />} />
      <Route path="/article" element={<Article />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
