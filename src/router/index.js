import { createWebHistory, createRouter } from "vue-router";
import User from "../components/ReusableInduk.vue";
import Admin from "../components/crudview.vue";
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
