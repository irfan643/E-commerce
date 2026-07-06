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
       
      <IonList lines="full" class="border-t-1  border-[#E5E8EB]">
        <IonItem>
          <IonLabel>
            <p class="label">Order Number</p>
            <h3>#123456789</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Order Date</p>
            <h3>July 15, 2024</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Order Status</p>
            <h3>Incoming</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Payment Status</p>
            <h3>Paid</h3>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Customer Information -->
      <h2 class="section-title">Customer Information</h2>
      <IonList lines="full">
        <IonItem>
          <IonLabel>
            <p class="label">Customer Name</p>
            <h3>Sophia Bennett</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Contact Number</p>
            <h3>+1 (555) 123-4567</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Email Address</p>
            <h3>sophia.bennett@email.com</h3>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Items Purchased -->
      <h2 class="section-title">Items Purchased</h2>
      <IonList lines="full">
        <IonItem lines="none">
           <div class="flex  gap-2.5  ">
            
                <img src="../../../public/image/shoes.png" class="size-16 rounded-lg" alt="sope">
                <IonLabel>
                  <h3 class="product-name">Product Name 2</h3>
                  <p class="product-qty">Quantity: 2</p>
                </IonLabel>
                
            </div>
            <div slot="end" class="price">$15.00</div>
        </IonItem>

        <IonItem  lines="none">
            <div class="flex  gap-2.5  ">
            
                <img src="../../../public/image/shoes.png" class="size-16 rounded-lg" alt="sope">
                <IonLabel>
                  <h3 class="product-name">Product Name 2</h3>
                  <p class="product-qty">Quantity: 2</p>
                </IonLabel>
                
            </div>
            <div slot="end" class="price">$15.00</div>
        </IonItem>
      </IonList>

      <!-- Shipping Information -->
      <h2 class="section-title">Shipping Information</h2>
      <IonList lines="full">
        <IonItem>
          <IonLabel>
            <p class="label">Shipping Address</p>
            <h3>123 Main Street, Anytown, USA</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Shipping Method</p>
            <h3>Standard Shipping</h3>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Order Deadline -->
      <h2 class="section-title">Order Deadline</h2>
      <IonList lines="full">
        <IonItem>
          <IonLabel class="py-6">
            <p class="label">Fulfillment Deadline</p>
            <h3>July 18, 2024</h3>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Additional Information -->
      <h2 class="section-title">Additional Information</h2>
      <IonList lines="full">
        <IonItem>
          <IonLabel>
            <p class="label">Special Instructions</p>
            <h3>None</h3>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Order Source</p>
            <h3>Online Store</h3>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Actions -->
      <div class="actions    ">
        <IonButton expand="block"  fill="clear" class=" capitalize font-Manrope  font-semibold bg-[#EDE8F2] text-[#140D1C] rounded-[10px] 
         ">Cancel Order</IonButton>
        <IonButton expand="block"  fill="clear"   class=" capitalize    font-Manrope  bg-[#7847EB] text-[#FAF7FC]  rounded-[10px]   ">Mark as Shipped</IonButton>
      </div>
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
