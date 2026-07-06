<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center font-bold text_color">Checkout</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-no-padding">
      <IonList lines="none"   class="space-y-4 p-0 ">

        <!-- Shipping Address -->
        <IonItem button detail>
          <IonLabel >
            <h2 class="text_color">Shipping address</h2>
                 
            <p>Springfield, 62704</p>
            <p>123 Maple Street, Apt 4B</p>
          </IonLabel>
        </IonItem>

        <!-- Shipping Method -->
        <IonItem button detail>
          <IonLabel>
            <h2 class="text_color">Shipping method</h2>
            <p>2 items</p>
            <p>Standard Shipping</p>
          </IonLabel>
        </IonItem>

        <!-- Payment -->
        <IonItem button detail>
          <IonLabel>
            <h2 class="text_color" >Payment</h2>
            <p>123 Maple Street, Apt 4B, Springfield</p>
            <p>MasterCard (****5678)</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Discount Code -->
       <div class="ion-padding">
        <IonItem  class="mt-4 rounded-xl border  border-[#e0dff5]" lines="none">
        <IonInput placeholder="Discount code"></IonInput>
        <IonIcon :icon="checkmark" slot="end" class="text-purple-600" />
      </IonItem>
       <!-- Price Summary -->
      <div class="mt-6 space-y-2 text-sm">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>{{summary.subtotal}}</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping</span>
          <span>$5</span>
        </div>
        <div class="flex justify-between">
          <span>Taxes</span>
          <span>$10.50</span>
        </div>
        <div class="flex justify-between font-bold">
          <span>Total</span>
          <span>{{` $` + summary.total }}</span>
        </div>
      </div>
      <div class="mt-8 ion-text-center ">
        <IonButton  expand="block" fill="solid"   class="shadow-none btn button_color capitalize    font-bold text-[1rem]">
          Place Order
        </IonButton>
      </div>
       </div>
      

     

      <!-- Place Order Button -->
      
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
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonButton,
   
} from '@ionic/vue'
import { checkmark } from 'ionicons/icons';
import { useRoute } from 'vue-router'
const route=useRoute(); 
const summary = {
  subtotal: Number(route.query.subtotal),
  total: Number(route.query.total),
  shipping: route.query.shipping || 'FREE'
}  



</script>
<style scoped>
   p{
    color: #634F96;
   }
  div span:first-child {
  color: #634F96;;
  font-weight: bold;
}
   
   h2{
     
      font-size: 1.1rem ;
   }
   ion-list {
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}
ion-list {
  padding: 0 !important;
}
</style>