import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/auth/AuthLayout.vue";
import SignUpStepOne from "@/pages/signup/SignUpStepOne.vue";
import SignUpStepTwo from "@/pages/signup/SignUpStepTwo.vue";
import SignUpComplete from "@/pages/signup/SignUpComplete.vue";
import LoginPage from "@/pages/login/LoginPage.vue";
import Login from "@/pages/login/Login.vue";
import ForgetPassword from "@/pages/login/ForgetPassword.vue";
import DashboardLayout from "@/pages/dashboard/DashboardLayout.vue";
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Wallet from "@/pages/dashboard/Wallet.vue";
import Explore from "@/pages/dashboard/Explore.vue";
import People from "@/pages/dashboard/People.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      component: AuthLayout,
      meta: { requiresGuest: true },
      children: [
        {
          path: "",
          redirect: "/signup/step-1",
        },
        {
          path: "step-1",
          name: "SignUpStepOne",
          component: SignUpStepOne,
          meta: { stage: 1 },
        },
        {
          path: "step-2",
          name: "SignUpStepTwo",
          component: SignUpStepTwo,
          meta: { stage: 2 },
        },
        {
          path: "complete",
          name: "SignUpComplete",
          component: SignUpComplete,
          meta: { stage: 3 },
        },
      ],
    },
    {
      path: "/",
      redirect: "/signup",
    },
    {
      path: "/login",
      component: LoginPage,
      meta: { requiresGuest: true },
      children: [
        {
          path: "",
          redirect: "/login/step-1",
        },
        {
          path: "step-1",
          name: "login",
          component: Login,
          meta: { stage: 1 },
        },
        {
          path: "/forget-password",
          name: "forget-password",
          component: ForgetPassword,
          meta: { stage: 1 },
        },
      ],
    },

    {
      path: "/dashboard",
      component: DashboardLayout,
      meta: { requiresGuest: true },
      children: [
        {
          path: "",
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: "wallet",
          name: "Wallet",
          component: Wallet,
        },
        {
          path: "explore",
          name: "Explore",
          component: Explore,
        },
        {
          path: "people",
          name: "People",
          component: People,
        },
      ],
    },
    //  ---------- DEFAULT & 404 ----------
    { path: "/", redirect: "/login" },
    { path: "/:catchAll(.*)", redirect: "/login" },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Auth pages
  const authPages = [
    "/login",
    "/signup",
    "/signup/step-1",
    "/signup/step-2",
    "/signup/complete",
  ];

  if (!isLoggedIn && to.path.startsWith("/dashboard")) {
    // Not logged in but trying to access dashboard
    next("/login");
  } else if (isLoggedIn && authPages.includes(to.path)) {
    // Logged in but trying to access login/signup
    next("/dashboard");
  } else {
    next(); // Allow
  }
});

export default router;
