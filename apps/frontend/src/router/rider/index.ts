import { RouteRecordRaw } from "vue-router";
import RiderTabs from "@/views/rider/RiderTabs.vue";
const   Rider: Array <RouteRecordRaw>=[
{
    path:"/",
  component :RiderTabs,
  redirect:"/RiderDashborad",
  children:[
        {
          path:"RiderDashborad",
          component : ()=> import ("@/views/rider/RiderDashborad.vue")
        }, 
         {
          path:"Deliver",
          component : ()=> import ("@/views/rider/Delivers.vue")
        }, 
         {
          path:"RiderEaring",
          component : ()=> import ("@/views/rider/RiderEaring.vue")
        },
          {
          path:"Profile",
          component : ()=> import ("@/views/rider/RiderProfile.vue")
        }

  ]

},
{
   path:"/Setting",
   component: ()=> import ("@/views/rider/Setting.vue")
},
 {
  path:"/OrderDetails/:id",
  component:()=> import("@/views/rider/OrderDetails.vue")
 },
 {
  path: '/update/:type', // type can be "email" or "phone"
  name: 'UpdateContact',
  component: () => import('@/views/rider/UpdateContact.vue')
},
    {
      path:"/Vehicallicense",
      component: ()=> import("@/views/rider/VehicalLicense.vue")
    },
    {
      path:"/DeliveryInfo/:id",
      component:()=>import("@/views/rider/DeliveryInfo.vue")
    }
]
export  default Rider;
