<template>
  <ion-page>
    <ion-header class="ion-no-border   ">
      <ion-toolbar class="ion-padding-top ">
        <!-- Center title -->
        <ion-title class="ion-text-center font-semibold font-Manrope text-[25px] font_black">Shop</ion-title>

        <!-- Right slot -->
        <ion-buttons slot="end">
          <ion-button
          
              @click="goto('cart')"
          >
            <!-- Show outline when condition is true -->
             
            <ion-icon v-if="isCartEmpty" :icon="cartOutline" class="size-8 mr-1.5" />

            <!-- Show filled when condition is false -->
            <ion-icon v-else :icon="cart"
                 
               
            class="size-8 mr-1.5" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content class="ion-padding">

      <!-- Search bar -->
      <div
        class="  border-1   h-12 flex justify-center  items-center  border-gray-500 w-full rounded-xl overflow-hidden bg-[#EBE8F2]">

        <ion-searchbar placeholder="Search"   style="   --background:#EBE8F2; --box-shadow:none;  "
          @ion-focus="goto()"
             @ion-input="goto()"
               
        ></ion-searchbar>

      </div>

      <!-- Featured Section -->
      <div class="my-6">
        <ion-text class="text-xl  font_black font-semibold ">Featured</ion-text>
      </div>

      <div class="flex   space-x-4 overflow-x-auto py-2 no-scrollbar ">
        <card
         v-for="value in Featured"
         :productId="value.id"
         :imageSrc="value.imageSrc"
         :title="value.title"
         :label="value.label"
        cardHeight="h-[260px]"
        cardWidth="min-w-[200px]"
       />

      </div>


      <!-- Categories Section -->
      <ion-text class="text-lg font-semibold mt-6">Categories</ion-text>

     

       <ion-grid class="mt-4 ">
    <ion-row
     
    >
      <ion-col 
        v-for="(category, index) in Categories"
        size="6"
        size-md="4"
      size-lg="2"
         class="px-2 "
         sm:size="6"
         
      >
        <Card
         :productId="category.id"
          :imageSrc="category.imageSrc"
          :title="category.title"
          :label="category.label"
          cardWidth="w-"
          cardHeight="h-[220px]"
           
        />
      </ion-col>
    </ion-row>
  </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  

  IonText,
} from "@ionic/vue";

import { cartOutline, card } from "ionicons/icons";
import { ref } from 'vue'
import Card from "@/components/Card.vue";
   import { randomids } from "@/utils/id";
import router from "@/router";
const isCartEmpty = ref(true)
const Featured= [
  {
     id: randomids(),
    imageSrc:    "../../public/image/shoes.png",
    title:       "New Arrivals",
    label:       "Limited Edition",
  },
  {
     id: randomids(),
    imageSrc:    "../../public/image/shoes2.png",
    title:       "New Arrivals",
    label:       "Limited Edition",
  },
   {
     id: randomids(),
    imageSrc:    "../../public/image/limited_addition.png",
    title:       "New Arrivals",
    label:       "Limited Edition",
  },
]
  
const Categories =[
  {
     id: randomids(),
    imageSrc:    "../../public/image/Sneakers.png",
    title:       "Sneaker",
    label:       "Limited Edition",
  },
  {
     id: randomids(), imageSrc:    "../../public/image/Apparel.png",
    title:       "Apparel",
    label:       "Limited Edition",
  },
  { 
     id: randomids(),
    imageSrc:    "../../public/image/Accessories.png",
    title:       "Apparel",
    label:       "Accessories",
  },
{ 
  id: randomids(),
    imageSrc:    "../../public/image/Sneakers.png",
    title:       "Sneaker",
    label:       "Limited Edition",
  },
  {
     id: randomids(),
    imageSrc:    "../../public/image/Apparel.png",
    title:       "Apparel",
    label:       "Limited Edition",
  },
  { 
     id: randomids(),
    imageSrc:    "../../public/image/Accessories.png",
    title:       "Apparel",
    label:       "Accessories",
  },
    { 
     id: randomids(),
    imageSrc:    "../../public/image/Accessories.png",
    title:       "Apparel",
    label:       "Accessories",
  },
   { 
     id: randomids(),
    imageSrc:    "../../public/image/Accessories.png",
    title:       "Apparel",
    label:       "Accessories",
  },  { 
     id: randomids(),
    imageSrc:    "../../public/image/Accessories.png",
    title:       "Apparel",
    label:       "Accessories",
  },  { 
     id: randomids(),
    imageSrc:    "../../public/image/Accessories.png",
    title:       "Apparel",
    label:       "Accessories",
  },
 
]
 function goto(route = "/Search") {
  router.push(route);
}
</script>
