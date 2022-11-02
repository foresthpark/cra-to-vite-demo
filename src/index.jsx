import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RandomGif from "./routes/RandomGif";
import Root from "./routes/root";
import Search from "./routes/Search";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorPage from "./components/ErrorPage";
import Counter from "./routes/Counter";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/random",
        element: <RandomGif />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
