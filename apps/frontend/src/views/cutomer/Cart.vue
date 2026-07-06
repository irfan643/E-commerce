<template>
    <IonPage>
        <IonHeader class=" ion-no-border ">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton default-href="/" />
                </IonButtons>
                <IonTitle class="ion-text-center font-bold text_color">cart</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class=" ion-padding-start">
            <ion-item v-for="(product, index) in products" :key="index" lines="none"
                class="overflow-hidden mb-2.5 pb-4 ion-no-padding">
                <!-- Product Image -->
                <ion-avatar slot="start" class="w-[52px] h-[52px] rounded-sm overflow-hidden"
           x         style="--border-radius: 0.375rem;">
                    <img :src="product.image" alt="Product" />
                </ion-avatar>

                <!-- Order Details -->
                <div class="w-full h-full flex justify-between">
                    <ion-label class="ml-3 mt-2.5">
                        <h3 class="!font-bold text_font font-Manrope">
                            Order number: <span class="font-normal">{{ product.orderNumber }}</span>
                        </h3>
                        <p>Size <span>{{ product.size }}</span></p>
                    </ion-label>

                    <!-- Quantity Controls -->
                    <div class="flex items-center justify-center pb-6">
                        <div class="rounded-full size-6 bg-gray-300 flex justify-center items-center cursor-pointer"
                            @click="increment(index)">
                            +
                        </div>
                        <div class="rounded-lg size-8 flex justify-center items-center">
                            {{ product.quantity }}
                        </div>
                        <div class="rounded-full size-6 bg-gray-300 flex justify-center items-center cursor-pointer"
                            @click="decrement(index)">
                            -
                        </div>
                    </div>
                </div>
            </ion-item>

            <h1>summary</h1>
            <div class="flex flex-col ">
                <IonItem lines="none" class="ion-no-padding  compact-item">
                    <IonLabel class="!flex justify-between !py-0 ">
                        SubTotal

                        <div>
                            <p class="font-bold ">{{ formatCurrency(subtotal) }}</p>
                        </div>
                    </IonLabel>

                </IonItem>
                <IonItem lines="none" class="ion-no-padding  compact-item">
                    <IonLabel class="!flex justify-between    ">
                        <div>delivery</div>
                        <div>
                            <p class="font-bold "> Free</p>
                        </div>
                    </IonLabel>

                </IonItem>
                <IonItem lines="none" class="ion-no-padding compact-item">
                    <IonLabel class="!flex justify-between   ">
                        <div>Total</div>
                        <div>
                            <p class="font-bold ">{{ formatCurrency(subtotal) }}</p>
                        </div>
                    </IonLabel>

                </IonItem>
            </div>


                <div></div>
               <IonButton expand="block"  color="tertiary"  
             class="btn font-bold  ion-padding  capitalize"
                   @click="goto()"
              >check out</IonButton>
        </IonContent>
         

    </IonPage>

</template>

<script setup lang="ts">

import { IonItem } from "@ionic/vue";
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonLabel, IonAvatar,IonButton } from "@ionic/vue";
import { computed, ref } from "vue"
import { formatCurrency } from "@/utils/id";
import { createMemoryHistory, useRouter } from "vue-router";
 import Checkout from "./Checkout.vue";
const route=useRouter();
 function goto(){
        route.push({
            path:"/checkout",
             query: {
      subtotal: summary.value.subtotal.toString(),
      total: summary.value.total.toString(),
      shipping: summary.value.shipping.toString(),
    }
        })
       
      
 }
const products = ref([
    {
        orderNumber: 45631,
        size: "M",
        image: "../../public/image/night_suite.png",
        quantity: 2,
        price: 100,
    },
    {
        orderNumber: 45632,
        size: "L",
        image: "../../public/image/night_suite.png",
        quantity: 1,
        price: 100,
    },
    {
        orderNumber: 45632,
        size: "L",
        image: "../../public/image/night_suite.png",
        quantity: 1,
        price: 100,
    },

]);
       let subtotal =computed(()=>{
               return products.value.reduce((acc , product) => {
                return   acc + product.price * product.quantity
               }, 0)
       }) 
// let total = computed(() => {
                    
//  if (typeof shipping.value === "number") {
//     return subtotal.value + shipping.value
//     }
//    return  subtotal.value
// })

 const shipping = ref("FREE")
const summary =  computed(() => {
  return {
    subtotal: subtotal.value,
    shipping: shipping.value,
    total: subtotal.value + (typeof shipping.value === "number" ? shipping.value : 0)
    
  }
}) 

console.log(summary.value)

const increment = (index: number) => {
    products.value[index].quantity++;

};

const decrement = (index: number) => {
    if (products.value[index].quantity > 1) {
        products.value[index].quantity--;
    }
};

</script>
<style scoped>
.compact-item {



    --min-height: 30px;
    /* reduce default 44px row height */
    color: #7847eb;
    /* applies text color */
}
</style>
