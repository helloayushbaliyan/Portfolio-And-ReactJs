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
import PortfolioPage from "./app/portfolio/page.jsx";
import BlogPage, { fetchdata } from "./app/blog/page.jsx";
import ContactPage from "./app/contact/page.jsx";
import Article, { fetcharticledata } from "./components/article.jsx";
import ProductsPage from "./app/products/page.jsx";
import ContextProvider from "./context/contextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="about" element={<AboutPage />} />
      <Route
        path="services"
        element={<ProductsPage />}
      />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route loader={fetchdata} path="/blog" element={<BlogPage />} />
      <Route
        loader={fetcharticledata}
        path="/article/:userid"
        element={<Article />}
      />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ContextProvider>
);
