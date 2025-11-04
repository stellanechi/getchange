import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/auth/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [{ path: "/", component: AuthLayout }],
});

export default router;
