import Home from "../Components/Home/Home";
import Adminission from "../Components/Adminission/Adminission";
import Contact from "../Components/Contact/Contact";
import ViewTable from "../Components/Adminission/ViewTable";

export default [
  { path: "/", component: Home, exact: true },
  { path: "/admit", component: Adminission, exact: true },
  { path: "/contact", component: Contact, exact: true },
  { path: "/viewTable", component: ViewTable, exact: true },
];
