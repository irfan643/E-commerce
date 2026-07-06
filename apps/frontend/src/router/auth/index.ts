import { RouteRecordRaw } from "vue-router";

const authRouter: Array<RouteRecordRaw>=[
     {
    path: "/login",
    component: () => import("@/features/auth/Login.vue"),
  },
  {
    path: "/Forget",
    component: () => import("@/features/auth/Forget.vue"),
  },
  {
    path: "/SetPassword",
    component: () => import("@/features/auth/SetPassword.vue"),
  },
  {
    path: "/signup",
    component: () => import("@/features/auth/SignUp.vue"),
  },
  {
    path: "/Verification",
    component: () => import("@/features/auth/Verification.vue"),
  }
]
export default authRouter;