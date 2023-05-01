import { createWebHistory, createRouter } from "vue-router";
import User from "../components/ReusableInduk.vue";
import Admin from "../components/crudview.vue";
import AuthView from "../components/auth/authview.vue";
import LoginForm from "../components/auth/loginform.vue";
import RegisterForm from "../components/auth/registerform.vue";
const routes = [
  {
    path: "/User",
    name: "User",
    component: User,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/auth",
    component: AuthView,
    children: [
      {
        path: "login",
        component: LoginForm,
        name: "auth.login",
      },
      {
        path: "register",
        component: RegisterForm,
        name: "auth.register",
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
