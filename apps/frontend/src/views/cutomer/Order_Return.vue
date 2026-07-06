<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/home" />
        </IonButtons>
        <IonTitle class="ion-text-center font-semibold">Order Return</IonTitle>
      </IonToolbar>
        
             
         
    
    </IonHeader>

    <!-- Tabs -->
     <IonContent>
 
    
     <IonSegment>

      <IonSegmentButton   value="order" content-id="order" style="   --indicator-color:#7847EB;  --color-checked:#7847EB">
      <ion-label class="text-base   capitalize  font-semibold ">Order</ion-label> 
         
      </IonSegmentButton>
      <IonSegmentButton   value="order2" content-id="history"  style="   --indicator-color:#7847EB;    --color-checked:#7847EB">
      <ion-label class="text-base   capitalize  font-semibold ">History</ion-label> 
        
      </IonSegmentButton>
     </IonSegment>
      <IonSegmentView>
         <IonSegmentContent id="order" class="  pt-4  ">

                <div v-for="(item) in order" :key="item.id">
                                    <ion-item lines="none" button class=" overflow-hidden pb-4">
                <!-- Product Image -->
                <IonAvatar slot="start" class="w-[70px] h-[93px] rounded-sm overflow-hidden"
                    style="--border-radius: 0.375rem;">
                    <img :src="item.productImage" alt="Product" />
                </IonAvatar>

                <!-- Order Details -->
                <IonLabel class="ml-4">
                    <h3 class="!font-bold text_font  font-Manrope">
                        Order numbe: <span class="font-normal">{{ item.orderNumber }}</span>
                    </h3>
                    <p class="text-sm   !text-[#634F96]">Order date:{{item.orderDate}}</p>
                    <p class="text-sm !text-[#634F96]">Total: {{ item.total }}</p>
                </IonLabel>

                <!-- Arrow Icon -->
                         <IonButton fill="clear"  class=" 
         
         rounded-full">
                        <IonIcon aria-hidden="true" slot="icon-only" :icon="arrowForwardOutline" class="size-6 text-gray-400 "  />

                         </IonButton>

            </ion-item>
                      </div>

         </IonSegmentContent>     
                 <IonSegmentContent id="history" class="  pt-4  ">

                <div v-for="(history) in history" :key="history.id">
                                    <ion-item lines="none" button class=" overflow-hidden pb-4">
                <!-- Product Image -->
                <IonAvatar slot="start" class="w-[70px] h-[93px] rounded-sm overflow-hidden"
                    style="--border-radius: 0.375rem;">
                    <img :src="history.productImage" alt="Product" />
                </IonAvatar>

                <!-- Order Details -->
                <IonLabel class="ml-4">
                    <h3 class="!font-bold text_font  font-Manrope">
                        Order numbe: <span class="font-normal">{{ history.orderNumber }}</span>
                    </h3>
                    <p class="text-sm   !text-[#634F96]">Order date:{{history.orderDate}}</p>
                    <p class="text-sm !text-[#634F96]">Total: {{ history.total }}</p>
                </IonLabel>

                <!-- Arrow Icon -->
                         <IonButton fill="clear"  class=" 
         
         rounded-full">
                        <IonIcon aria-hidden="true" slot="icon-only" :icon="arrowForwardOutline" class="size-6 text-gray-400 "  />

                         </IonButton>

            </ion-item>
                      </div>

         </IonSegmentContent> 
       </IonSegmentView>
  </IonContent>
  </IonPage>
</template>  

<script setup>
import { randomids } from '@/utils/id';
import { 
  IonPage, IonHeader, IonToolbar,IonContent ,IonButtons, IonBackButton, IonTitle, 
  IonLabel,IonAvatar,IonItem,IonButton,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonIcon
} from '@ionic/vue'
 import { arrowForwardOutline } from 'ionicons/icons';
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
const history=[
    {
        id:randomids(),
                productImage: "/public/image/shoes2.png",

        orderNumber: "789112",
        orderDate: "2024-01-16",
        total: 150
    },
    {
        id:randomids(),
                productImage: "/public/image/shoes.png",

        orderNumber: "789012",
        orderDate: "2024-01-15",
        total: 150
    },
    {
        id:randomids(),
        productImage: "/public/image/Sneakers.png",
        orderNumber: "789012",
        orderDate: "2024-01-15",
        total: 150
    }
]
</script>

<style scoped>
/* your styles here */
</style>
