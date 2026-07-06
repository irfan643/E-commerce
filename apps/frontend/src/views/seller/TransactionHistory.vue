<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/earnings"></IonBackButton>
        </IonButtons>
        <IonTitle class="ion-text-center font-bold">Transaction Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding-horizontal">
      <!-- Transaction Info -->
      <IonList lines="full">
        <IonItem lines="none">
          <IonLabel>
            <p class="label">Transaction</p>
            <h3>TXN1234567890</h3>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>
            <p class="label">Date</p>
            <h3>July 26, 2024</h3>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>
            <p class="label">Type</p>
            <h3>Sale</h3>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>
            <p class="label">Order ID</p>
            <h3>ORD9876543210</h3>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>
            <p class="label">Status</p>
            <h3>Completed</h3>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Items Section -->
      <h2 class="section-title">Items</h2>
      <IonList lines="none">
        <IonItem lines="none">
          <IonLabel>
            <h3 class="product-name">Handmade Leather Wallet</h3>
            <p class="product-qty">Quantity: 1</p>
          </IonLabel>
          <div slot="end" class="font-semibold">$50</div>
        </IonItem>
      </IonList>

      <!-- Summary Section -->
      <h2 class="section-title">Summary</h2>
      <IonList lines="full">
        <IonItem>
          <IonLabel>
            <p class="label">Subtotal</p>
          </IonLabel>
          <div slot="end">50$</div>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Fees</p>
          </IonLabel>
          <div slot="end">-5$</div>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p class="label">Net Amount</p>
          </IonLabel>
          <div slot="end">45$</div>
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
} from "@ionic/vue";
</script>

<style scoped>
.section-title {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 12px;
}
.label {
  font-size: 14px;
  color: #734f96;
  margin-bottom: 6px;
}
.product-name {
  font-size: 16px;
  font-weight: 600;
}
.product-qty {
  font-size: 14px;
  color: #734f96;
}
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
