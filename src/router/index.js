import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import Download from "../views/download.vue";
import Mining from "../views/mining.vue";
import Team from "../views/team.vue";
import Help from "../views/help.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/download",
    name: "Download",
    component: Download
  },
  {
    path: "/mining",
    name: "Mining",
    component: Mining
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/help",
    name: "Help",
    component: Help
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
