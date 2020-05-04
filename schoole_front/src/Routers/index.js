import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Adminission from "../Components/Adminission/Adminission";

export default [
  { path: "/", component: Home, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/admit", component: Adminission, exact: true },
];
