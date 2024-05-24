import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./global.css";
import BlogPostPage, { blogPostLoader } from "./views/blogPostPage";
import ErrorPage from "./views/errorPage";
import Home from "./views/home";
import RootLayout from "./views/root";
import { homeFilterLoader } from "./lib/loadersFunc";
import React from "react";

function App() {
  const MemoizedHome = React.memo(Home);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MemoizedHome />,
          errorElement: <ErrorPage />,
          loader: homeFilterLoader,
        },
        {
          path: "/posts/:id",
          element: <BlogPostPage />,
          errorElement: <ErrorPage />,
          loader: blogPostLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
