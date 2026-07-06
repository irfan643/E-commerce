import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import customerRoutes from "./customer";
import SelllerRute from "./seller";
import  authRoute from "./auth"
import Rider from "./rider"
import  HubRoute from "./Hub"
const routes: Array<RouteRecordRaw> = [
  ...customerRoutes,
  ...SelllerRute,
     ...Rider,
    ...HubRoute,
   ...authRoute,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

