import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Adminission from "../Components/Adminission/Adminission";
import Contact from "../Components/Contact/Contact";

export default [
  { path: "/", component: Home, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/admit", component: Adminission, exact: true },
  { path: "/contact", component: Contact, exact: true },
];
