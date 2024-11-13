import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "rsuite/dist/rsuite.min.css";

import App from "./App";
import Academic from "./pages/academic";
import Academic1 from "./pages/academic-1/academic-1";
import QA from "./pages/QA/q&a";
import Research from "./pages/researcher/researcher";
import HighPositioning from "./pages/high-positioning/page";
import Academic2 from "./pages/academic-2/page";
import CheckList from "./pages/checklist/page";

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
