<template>
  <ion-page>
    <!-- Header -->
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-buttons slot="end" class="pr-2.5 ">
          <ion-icon aria-hidden="true" :icon="bag" class="size-6" />

        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->

    <ion-content>
      <!-- Product Image -->
      <ion-img :src="product.image" class="product-image" />
      <div class="ion-padding-start">
        <!-- Product Info -->
        <div class="product-info font-Manrope text-[#120D1C] ">
          <h2>{{ product.name }}</h2>
          <p>{{ product.tagline }}</p>
          <h6> {{ product.pricetag }}</h6>
          <p>{{ product.short_description }}</p>
          <!-- Size Selector -->
        </div>
        <div v-if="selectedSize" class="flex gap-3.5 my-12">

          <div v-for="item in ['Small', 'Medium', 'Large']">
            <div class="border-1 border-[#D6D1E8] rounded-lg px-4 py-2"
              :class="{ 'button_color ': selectedSize === item.toLowerCase() }"
              @click="selectedSize = item.toLowerCase()">{{ item }}</div>
          </div>
        </div>


        <!-- Description -->
        <ion-card class="shadow-none space-y-4 border-none text_color">
          <ion-card-header>
            <ion-card-title class="text_color font-bold">
              Description
            </ion-card-title>
          </ion-card-header>

          <ion-card-content class="ion-no-padding product-info ion-padding-end ">
            <!-- Description Section -->
            <p class=" leading-relaxed text-base  text_color  pb-6 ">
              {{ product.description }}
            </p>

            <!-- Specification Section -->

          </ion-card-content>
        </ion-card>
        <ion-card class="shadow-none my-4 border-none">
          <ion-card-title class="text_color font-bold">
            Specifications
          </ion-card-title>
          <ion-card-content class="ion-no-padding">


            <div class="flex flex-wrap    font-Manrope text_color">
              <div v-for="(spec, index) in product.specs" :key="index" class="w-1/2    py-4 ">
                <div class="border-t-2  border-gray-300 mr-4" v-for="(value, key) in spec" :key="key">
                  <div class="text-[#7847EB] my-2 ">{{ key }}</div>
                  <div class="text-base">{{ value }}</div>
                </div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <!-- Delivery & Returns -->
        <ion-card class="shadow-none ion-no-padding  border-none">
          <ion-card-header>
            <ion-card-title class="text_color text-xl font-bold">Delivery & Returns</ion-card-title>
          </ion-card-header>
          <ion-card-content class=" my-4 ion-no-padding product-info ion-padding-end">
            <p class="whitespace-pre-line text-base leading-relaxed text-gray-700">
              {{ product.delivery }}
            </p>
          </ion-card-content>
        </ion-card>

        <!-- Pair it With -->
         <div class="my-4">

           <ion-text class="text_color   font-bold text-xl">
         Pair it With
        </ion-text>
         </div>
       
        <ion-grid>
          <div class=" flex    space-x-4 overflow-x-auto mb-9 py-3.5 no-scrollbar ">
            <ion-row v-for="(item, index) in product.pairWith" :key="index">
              <ion-col>
                <Card 
                :imageSrc="item.image"
                 :title="item.name"
                  :productId="index"
                   cardWidth="w-42"
                   
                    subTitle ="$99.99"
                      subtitleClass="mt-[-5px]"
                   />
              </ion-col>
            </ion-row>
          </div>
        </ion-grid>

        <!-- Store Info -->
         <IonText class="text_color font-bold text-2xl  font-Manrope ">Store Information</IonText>
        <div class="my-2 flex flex-col  gap-2.5  ">
         
            <ion-item class="flex items-center" lines="none" style="--padding-start:0;" >
            <ion-avatar class="w-16 h-16">
              <img src="/public/image/store_avtar.png" alt="Store Avatar" />
            </ion-avatar>
            <div class="flex flex-col  justify-center ">
               <ion-label class="text_color flex flex-col font-Manrope font-medium text-base pl-2.5">
              
              {{ product.store.name }}
              
            </ion-label>
            <div>
              <div class="ml-2 text-[#7847EB]">4.5 (120 reviews)</div>
            </div>
            </div>
           
           
           
          </ion-item>
           <ion-item class="flex   pl-1.5 items-center bg-transparent " lines="none" style="--padding-start:0;">
              <ion-button fill="solid" size="small"  class=" rounded-lg overflow-hidden text_color size-12" style="--background:#EBE8F2 ">

          <ion-icon aria-hidden="true" slot="icon-only" :icon="callOutline" class="size-8  " />
          </ion-button>
            <ion-label class="text_color  font-Manrope !text-lg   pl-2.5 ">
             Contact now
            </ion-label>
           
           
          </ion-item>
<div class="flex justify-center gap-4 mt-4 w-full">


    <ion-button class="btn font-bold capitalize " style="--background:#EBE8F2 ; --color:#120D1C; --padding-start:3rem; --padding-end:3rem">
      add to cart
    </ion-button>

 <ion-button class="btn font-bold capitalize" color="tertiary" style="  --padding-start:3rem; --padding-end:3rem">
      buy now
    </ion-button>

    </div>
        </div>
      </div>
    </ion-content>

    <!-- Bottom Buy Button -->
 


  </ion-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  IonPage, IonHeader, IonToolbar,IonAvatar, IonChip, IonLabel, IonItem,IonButtons, IonBackButton, IonContent,
  IonImg, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonText, IonGrid, IonRow, IonCol, IonButton, IonFooter, IonIcon
} from '@ionic/vue'
import { bag, callOutline, } from 'ionicons/icons'
import Card from '@/components/Card.vue'
import { string } from 'zod';
const selectedSize = ref<string>(' ');


watch(selectedSize, (newValue: string) => {
  console.log("Selected size changed:", newValue);
});


const product = {
  image: '/public/image/Sneakers.png',
  name: 'Generic Product Store',
  tagline: 'generic product Name',
  pricetag: '$99.99',
  short_description: 'This is a versatile product suitable for various needs. It can be used as clothing, grocery, or medicine. Please select your preferred option below.',
  description: 'This versatile product is designed to meet a variety of needs, functioning as clothing, a grocery carrier, or a medicine container. Its adaptable nature makes it an essential item for everyday use. Detailed description of the product goes here...',
  specs: [{ Dimension: '10x10x5' }, { Weight: '0.5kg' }, { Material: 'Polycarbonate' }],
  delivery: 'Enjoy free delivery on orders over $50. Returns are accepted within 30 days of purchase, provided the item is unused and in its original packaging.',
  pairWith: [
    { image: '/public/image/limited_addition.png', name: 'Related Item 1' },
    { image: '/public/image/Sneakers.png', name: 'Related Item 2' },
    { image: '/public/image/Sneakers.png', name: 'Related Item 2' }


  ],
  store: { name: 'Generic Store', actionText: 'Visit Store' }
}
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;
}

.product-info h2 {
  font-weight: 600;
  margin-bottom: 4px;
}

.product-info p {
  color: #120D1C;
  margin-bottom: px;
}

.custom-line-height {

  font-size: 16px;
  /* or any size you prefer */
  font-weight: bolder;
}
</style>
