<template>
    <IonPage>
        <IonHeader class=" ion-no-border ">
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton default-href="/" />
      </IonButtons>
      <IonTitle   class="ion-text-center" >Order</IonTitle>
    </IonToolbar>
  </IonHeader>
        <IonContent>
                      <div v-for="(item) in order" :key="item.id">
                                    <ion-item lines="none" class="overflow-hidden pb-4" 
                                      @click="goorder()"
                                    >
                <!-- Product Image -->
                <ion-avatar slot="start" class="w-[70px] h-[93px] rounded-sm overflow-hidden"
                    style="--border-radius: 0.375rem;">
                    <img :src="item.productImage" alt="Product" />
                </ion-avatar>

                <!-- Order Details -->
                <ion-label class="ml-4">
                    <h3 class="!font-bold text_font  font-Manrope">
                        Order numbe: <span class="font-normal">{{ item.orderNumber }}</span>
                    </h3>
                    <p class="text-sm   !text-[#634F96]">Order date:{{item.orderDate}}</p>
                    <p class="text-sm !text-[#634F96]">Total: {{ item.total }}</p>
                </ion-label>

                <!-- Arrow Icon -->
                        <IonIcon aria-hidden="true" :icon="arrowForwardOutline" class="size-6" />

            </ion-item>
                      </div>
               
        

            
        </IonContent>

    </IonPage>

</template>

<script setup lang="ts">

import { IonPage, IonContent, IonHeader, IonToolbar,IonLabel, IonAvatar,IonItem,IonTitle, IonBackButton, IonButtons, IonIcon } from "@ionic/vue";
import { ref } from "vue"
import { arrowBackOutline, arrowForwardOutline} from "ionicons/icons";
import { randomids } from "@/utils/id";
import router from "@/router";
const order =[
    {
        id:randomids(),
        productImage: "/public/image/night_suite.png",
        orderNumber: "789012",
        orderDate: "2024-01-15",
        total: 150
    },
    {
        id:randomids(),
        productImage: "/public/image/coat.png",
        orderNumber: "789012",
        orderDate: "2024-01-15",
        total: 150
    },
    {
        id:randomids(),
        productImage: "/public/image/bag.png",
        orderNumber: "789012",
        orderDate: "2024-01-15",
        total: 150
    }
]

   function goorder(){
          router.push("/OrderDetails")

   }
</script>
<style></style>
