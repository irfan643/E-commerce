import { RouteRecordRaw } from "vue-router";

const HubRoute: Array<RouteRecordRaw> = [
  {
    path: "/",

    component: () => import("@/views/Hub/HubTabLayout.vue"),
    children: [
      {
        path: "",
        redirect: { name: "hub-dashboard" },
      },
      {
        path: "dashboard",
        name: "hub-dashboard",
        component: () => import("@/views/Hub/Dashboard.vue"),
      },
      {
        path: "packages",
        name: "hub-packages",
        component: () => import("@/views/Hub/Packages.vue"),
      },

      {
        path: "packages/PakageDetailes",
        name: "package-details",
        component: () => import("@/views/Hub/packageDetailes.vue"),
      },

       {
        path: "packagesdetiales/:id",
        name: "dropoff-package-details",
        component: () => import("@/views/Hub/DropOffPackage.vue"),
      },

      {
        path: "return",
        name: "hub-return",
        component: () => import("@/views/Hub/Return.vue"),
      },
      {
        path: "profile",
        name: "hub-profile",
        component: () => import("@/views/Hub/Profile.vue"),
      },
      {
        path:"profile/ContactInfo",
        name:"contactinfo",
        component:()=> import("@/views/Hub/ContactInfo.vue")
      }
    ],
    
    
  },
   {
       path:"/Hubsetting",
       name:'setting',
       component:()=> import("@/views/Hub/HubSetting.vue")
       

     },
     {
      path:"/Dropoff",
      name:'dropoff',
        component:()=> import("@/views/Hub/Dropoff.vue"),
           
     }
];

export default HubRoute;
