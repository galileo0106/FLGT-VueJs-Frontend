import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import Download from "../views/download.vue";
import Movie from "../views/movie.vue";
import Mining from "../views/mining.vue";
import Team from "../views/team.vue";
import Help from "../views/help.vue";
import Blog from "../views/blog.vue";
import BlogDetail from "../views/blog/BlogDetail.vue";
import PlayMovie from "../views/movie/PlayMovie.vue";
import Signup from "../views/Sign/Signup.vue";
import Login from "../views/Sign/Login.vue";
import ForgetPassword from "../views/Sign/ForgetPassword.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/download",
    name: "download",
    component: Download
  },
  {
    path: "/movie",
    name: "movie",
    component: Movie
  },
  {
    path: "/movie/:id",
    name: "movieDetail",
    component: PlayMovie
  },
  {
    path: "/mining",
    name: "mining",
    component: Mining
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/blog/:id",
    name: "blogDetail",
    component: BlogDetail
  },
  {
    path: "/help",
    name: "help",
    component: Help
  },
  {
    path: "/register",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "signin",
    component: Login
  },
  {
    path: "/resetPassword",
    name: "resetPassword",
    component: ForgetPassword
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
