import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import "./global.css";
import BlogPostPage, { blogPostLoader } from "./views/blogPostPage";
import ErrorPage from "./views/errorPage";
import Home, { homeFilterLoader } from "./views/home";
import RootLayout from "./views/root";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
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
