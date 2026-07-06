<template>
  <IonPage>
    <IonHeader class="ion-no-border shadow-none  ">
      <IonToolbar>

        <IonTitle class="ion-text-center text-[18px] text-base  font-Manrope  text_color ">Product Management</IonTitle>
        <IonButtons slot="end" class=""
         
        >
          <IonButton router-link="/AddNewProduct">
                     
            <ion-icon aria-hidden="true" :icon="plus" slot="icon-only" class="size-6" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion--no-padding">
            
      <IonLabel class="   font-bold">
        
        <div class=" ion-padding text-xl text_color mb-1">
           My Products
        </div>
       </IonLabel>
      <IonList lines="none"  
    
      >
        <IonItem  @click="goto()"
          button lines="none"
         
         
          
          
          >
        <div class="flex gap-3 "
         
        >
         
          <img src="../../../public/image/sope.png" class="size-16 rounded-lg" alt="sope">
          <IonLabel class="ion-align-content-center ">
            <h2 class=" text_color capitalize font-Manrope !text-[17px] ">handmade soap </h2>
            <p class="p_color">In Stock:50 </p>
          </IonLabel>
        </div>
        </IonItem>
         <IonItem  @click="goto()"
          button lines="none"
         
          
          
          >
        <div class="flex gap-3 "
         
        >
         
          <img src="../../../public/image/sope.png" class="size-16 rounded-lg" alt="sope">
          <IonLabel class="ion-align-content-center ">
            <h2 class=" text_color capitalize font-Manrope !text-[17px] ">handmade soap </h2>
            <p class="p_color">In Stock:50 </p>
          </IonLabel>
        </div>
        </IonItem>
         <IonItem  @click="goto()"
          button lines="none"
         
          
          
          >
        <div class="flex gap-3 "
         
        >
         
          <img src="../../../public/image/sope.png" class="size-16 rounded-lg" alt="sope">
          <IonLabel class="ion-align-content-center ">
            <h2 class=" text_color capitalize font-Manrope !text-[17px] ">handmade soap </h2>
            <p class="p_color">In Stock:50 </p>
          </IonLabel>
        </div>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonButtons,
  IonList,
  IonLabel,
  IonItem
} from "@ionic/vue";

import plus from "@/assets/icon/Pluse.svg"
    import { useRouter } from "vue-router";
    const route =useRouter();
    function goto() {
        route.push(`/ProductDetails/4545545`)
    }
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: var(--ion-color-primary);
}
ion-item{
  margin-bottom: 12px;
}
</style>
