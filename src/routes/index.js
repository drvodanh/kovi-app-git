import { HeaderOnly } from "~/Layouts";
import { Home, Info, Dict, Verbs, NonePage, MoreSearch } from "~/pages";

const publicPath = [
  {
    path: "*",
    component: NonePage,
    layout: null,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dict",
    component: Dict,
  },
  {
    path: "/verbs",
    component: Verbs,
  },
  {
    path: "/info",
    component: Info,
    layout: HeaderOnly,
  },
  {
    path: "/search/:value",
    component: MoreSearch,
    layout: HeaderOnly,
  },
];

//when login
const privatePath = [];

export { publicPath, privatePath };
