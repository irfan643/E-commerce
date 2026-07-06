import { RouteRecordRaw } from "vue-router";
   import SellerTabLayout from "@/views/seller/SellerTabLayout.vue";
import { Component } from "ionicons/dist/types/stencil-public-runtime";
const SelllerRute: Array<RouteRecordRaw> =[

   {
    path: "/",
    component : SellerTabLayout,
    redirect: "/PorductMangement",
    children:[
       {
        path:"PorductMangement",
        component:  ()=> import("@/views/seller/ProductMangement.vue"),
       },
       {
        path :"Orders",
            component :()=> import ("@/views/seller/Ordes.vue"),
       },
      {
        path :"Earings",
            component :()=> import ("@/views/seller/Earnings.vue"),
       },
       {
        path :"Profile",
            component :()=> import ("@/views/seller/Profile.vue"),
       },
    ],
   
   },
   {
      path:"/ProductDetails/:id",
   component: ()=> import ("@/views/seller/ProductDetails.vue")
   },
{
   path:"/AddNewProduct",
   component: ()=>import("@/views/seller/AddNewPeoduct.vue")

},
{
path: "/OrderInfo/:id",
component: ()=>import ("@/views/seller/OrderInfo.vue"),
},

{


   path:"/CustomerInfo",
   component:()=> import("@/views/seller/CutomerInfo.vue")  ,  
},

{
  path:"/Transaction/:id",
  component: ()=>import ("@/views/seller/TransactionHistory.vue"),
}  

   
]
export default SelllerRute;