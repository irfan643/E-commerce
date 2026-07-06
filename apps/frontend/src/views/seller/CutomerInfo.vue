<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/orders"></IonBackButton>
        </IonButtons>
        <IonTitle class="ion-text-center text_color font-semibold">Order Details</IonTitle>
             
    </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding-start  ion-padding-end">
      <!-- Order Information -->
      <h2 class="section-title">Order Information</h2>
       
      <IonList lines="full" class="  border-[#E5E8EB]">
        <IonItem>
          <IonLabel>
            <p class="label">Order ID</p>
            <h3>#123456789</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label"> Date</p>
            <h3>JULY 20, 2024</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label capitalize" >Customer Name</p>
            <h3 >Sophia Carter</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Contact</p>
            <h3>sophia.cart@gmail.com</h3>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Customer Information -->
      <h2 class="section-title">Shipping Address</h2>
            <div>
                <p class="capitalize"> 123 maple street ,apt 4b ,antown</p>
            </div>

      <!-- Items Purchased -->
      <h2 class="section-title !mb-0">Items Purchased</h2>
      <IonList lines="full">
        <IonItem lines="none">
           <div class="flex  gap-2.5  ">
            
                <img src="../../../public/image/shoes.png" class="size-16 rounded-lg" alt="sope">
                <IonLabel>
                  <h3 class="product-name">Product Name 2</h3>
                  <p class="product-qty">Quantity: 2 <span class=" product-qty">$15.00</span></p>
                </IonLabel>
                
            </div>
           
        </IonItem>

       
      </IonList>

      <!-- Shipping Information -->
      <h2 class="section-title">Payment DetailDetails</h2>
      <IonList lines="full">
        <IonItem>
          <IonLabel>
            <p class="label capitalize">Total amount</p>
                 <p>$25.00</p>
        </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">status</p>
            <h3>Delivered</h3>
          </IonLabel>
        </IonItem>

      </IonList>


      <!-- Order Deadline -->
      <IonList lines="full">
        <IonItem lines="none">
          <IonLabel>
            <p class="label capitalize">Payment method</p>
                 <p>Credit Card</p>
        </IonLabel>
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
  IonButtons,
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonButton,
  IonIcon,
} from "@ionic/vue";
</script>

<style scoped>
.section-title {
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 20px;
  
}
.label {
  font-size: 14px;
  color: #734F96;
  padding-bottom: 12px;
}
.thumb {
  width: 56px;
  height: 56px;
  border-radius: 6px;
  object-fit: cover;
  
}
.product-name {
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize; /* PascalCase look */
}
.product-qty {
  font-size: 14px;
  color:#734F96 ;
}
.price {
  font-size: 15px;
  font-weight: 500;
  color: var(--ion-color-dark);
}
ion-item {
  --padding-start: 0;
  --inner-padding-end:0;
  padding-top: 20px;
  padding-bottom: 12px;
}
.actions {
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
ion-label{
    padding: 0 0 20px 0;
}
</style>
