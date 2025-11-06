import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/auth/AuthLayout.vue";
import SignUpStepOne from "@/pages/signup/SignUpStepOne.vue";
import SignUpStepTwo from "@/pages/signup/SignUpStepTwo.vue";
import SignUpComplete from "@/pages/signup/SignUpComplete.vue";
import LoginPage from "@/pages/login/LoginPage.vue";
import Login from "@/pages/login/Login.vue";
import ForgetPassword from "@/pages/login/ForgetPassword.vue";
import DashboardLayout from "@/pages/dashboard/DashboardLayout.vue";
// import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Wallet from "@/pages/dashboard/Wallet.vue";
import Explore from "@/pages/dashboard/Explore.vue";
import People from "@/pages/dashboard/People.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      component: AuthLayout,
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

    // { path: "/dashboard", component: DashboardLayout, name: "Dashboard" },
    {
      path: "/dashboardlayout",
      component: DashboardLayout,
      children: [
        {
          path: "",
          redirect: "/dashboardlayout",
        },
        // {
        //   path: "dashboard",
        //   name: "Dashboard",
        //   component: Dashboard,
        // },
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
  ],
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import AuthLayout from "@/auth/AuthLayout.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),

//   routes: [{ path: "/", component: AuthLayout }],
// });

// export default router;
