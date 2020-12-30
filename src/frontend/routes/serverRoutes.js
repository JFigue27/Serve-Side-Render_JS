import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Player from "../containers/Player";
import Register from "../containers/Register";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    exact: true,
    path: "/register",
    component: Register,
  },
  {
    exact: true,
    path: "/player:id",
    component: Player,
  },
  {
    name: "NotFound",
    component: NotFound,
  },
];

export default routes;
