import TabLayout from "@/views/cutomer/TabLayout.vue";
import { RouteRecordRaw } from "vue-router";

const customerRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: TabLayout,
    redirect: "/home", 
    children: [
      {
        path: "home",
        component: () => import("@/views/cutomer/Home.vue"),
      },
      {
        path: "order",
        component: () => import("@/views/cutomer/Order.vue"),
      },
      {
        path: "cart",
        component: () => import("@/views/cutomer/Cart.vue"),
      },
      {
        path: "profile",
        component: () => import("@/views/cutomer/Profile.vue"),
      },
    ],
  },
  {
    path: "/active_order",
    component: () => import("@/views/cutomer/Order_Return.vue"),
  },
  {
    path: "/payment",
    component: () => import("@/views/cutomer/Payment.vue"),
  },
  {
    path: "/edit_profile",
    component: () => import("@/views/cutomer/EditProfile.vue"),
  },
  {
    path: "/checkout",
    component: () => import("@/views/cutomer/Checkout.vue"),
  },
  {
    path: "/OrderDetails",
    component: () => import("@/views/cutomer/OrderDetails.vue"),
  },
    {
      path :"/Search",
      component :()=> import("@/views/cutomer/SearchPage.vue")
    },
  {
    path: "/Product/:id",
    component: () => import("@/views/cutomer/ProductDetailes.vue"),
    props: true,
  },

 
];
export default customerRoutes;