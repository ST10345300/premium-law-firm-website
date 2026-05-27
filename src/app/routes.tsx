import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Cases } from "./components/Cases";
import { Practice } from "./components/Practice";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Terms } from "./components/Terms";
import { Privacy } from "./components/Privacy";
import { Team } from "./components/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "cases", Component: Cases },
      { path: "practice", Component: Practice },
      { path: "clients", Component: Clients },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
    ],
  },
]);
