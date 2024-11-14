import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "rsuite/dist/rsuite.min.css";

import App from "./App";
import Academic from "./pages/HR/academic";
import Academic1 from "./pages/HR/academic-1/academic-1";
import QA from "./pages/HR/QA/q&a";
import Research from "./pages/HR/researcher/researcher";
import HighPositioning from "./pages/HR/high-positioning/page";
import Academic2 from "./pages/HR/academic-2/page";
import CheckList from "./pages/HR/checklist/page";
import PageHR from "./pages/HR/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },

  {
    path: "/pages/academic",
    element: <PageHR />,
  },
  {
    path: "/pages/academic/page",
    element: <Academic />,
  },
  {
    path: "/pages/academic/research",
    element: <Research />,
  },
  {
    path: "/pages/academic/1",
    element: <Academic1 />,
  },
  {
    path: "/pages/academic/2",
    element: <Academic2 />,
  },
  {
    path: "/pages/academic/q&a",
    element: <QA />,
  },
  {
    path: "/pages/academic/high-positioning",
    element: <HighPositioning />,
  },
  {
    path: "/pages/academic/checklist",
    element: <CheckList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
