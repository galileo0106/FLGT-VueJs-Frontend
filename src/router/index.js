import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import Download from "../views/download.vue";
import Movie from "../views/movie.vue";
import Mining from "../views/mining.vue";
import Team from "../views/team.vue";
import Help from "../views/help.vue";
import Blog from "../views/blog.vue";
import BlogDetail from "../views/blog/BlogDetail.vue";

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
    path: "/movie",
    name: "Movie",
    component: Movie
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
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/blog/detail",
    name: "BlogDetail",
    component: BlogDetail
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
