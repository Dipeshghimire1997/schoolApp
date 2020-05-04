import Home from "../Components/Home/Home";
import About from "../Components/About/About";

export default [
  { path: "/", component: Home, exact: true },
  { path: "/about", component: About, exact: true },
];
