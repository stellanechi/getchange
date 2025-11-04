import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/auth/AuthLayout.vue";
import SignUpStepOne from "@/pages/signup/SignUpStepOne.vue";
import SignUpStepTwo from "@/pages/signup/SignUpStepTwo.vue";
import SignUpComplete from "@/pages/signup/SignUpComplete.vue";

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
