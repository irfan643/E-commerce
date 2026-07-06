<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center text_color font-semibold">Order Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding bg-[#faf7fc]">
      <!-- Order Info -->
      <div class="space-y-3">
        <div class="flex justify-between summary-row">
          <span>Order number</span>
          <span>9X7Y6Z</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Date</span>
          <span>15/08/23</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Items</span>
          <span>3</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Total</span>
          <span>$245</span>
        </div>
      </div>

      <!-- Progress -->
      <div class="my-9">
        <div class="flex justify-between mb-2">
          <span class="font-bold">Order status</span>
          <!--- status percentage -->
          <span>{{ statusbar * 100 + `%` }}</span>
        </div>
        <IonProgressBar
          :value="statusbar"
          color="tertiary"
          class="rounded-lg h-2"
        ></IonProgressBar>
        <p class="text-sm text-violet-500 mt-2 summary-row">
          Estimated delivery: 2 days
        </p>
      </div>

      <!-- Items List -->
      <IonList lines="none" class=" p-0 space-y-4">
        <IonItem class="ion-no-padding">
          <div class="flex gap-3.5">
            <Card
              imageSrc="../../public/image/night_suite.png"
              cardWidth="w-16"
              cardHeight="h-18"
            ></Card>
            <IonLabel>
              <h2 class="font-bold">Ethan Walker</h2>
              <p class="text-sm text-gray-500">Leather Belt</p>
              <p class="font-semibold">$50</p>
            </IonLabel>
          </div>
        </IonItem>

        <IonItem class="ion-no-padding">
          <div class="flex gap-3.5">
            <Card
              imageSrc="../../public/image/night_suite.png"
              cardWidth="w-16"
              cardHeight="h-18"
            ></Card>
            <IonLabel>
              <h2 class="font-bold">Ethan Walker</h2>
              <p class="text-sm text-gray-500">Leather Belt</p>
              <p class="font-semibold">$50</p>
            </IonLabel>
          </div>
        </IonItem>

        <IonItem class="ion-no-padding">
          <div class="flex gap-3.5">
            <Card
              imageSrc="../../public/image/night_suite.png"
              cardWidth="w-16"
              cardHeight="h-18"
            ></Card>
            <IonLabel>
              <h2 class="font-bold">Ethan Walker</h2>
              <p class="text-sm text-gray-500">Leather Belt</p>
              <p class="font-semibold">$50</p>
            </IonLabel>
          </div>
        </IonItem>
        <IonItem class="ion-no-padding">
          <div class="flex gap-3.5">
            <Card
              imageSrc="../../public/image/night_suite.png"
              cardWidth="w-16"
              cardHeight="h-18"
            ></Card>
            <IonLabel>
              <h2 class="font-bold">Ethan Walker</h2>
              <p class="text-sm text-gray-500">Leather Belt</p>
              <p class="font-semibold">$50</p>
            </IonLabel>
          </div>
        </IonItem>
      </IonList>

      <!-- Bottom Info -->
      <div class="mt-6 space-y-3">
        <div class="flex justify-between summary-row">
          <span>Order number</span>
          <span>7FG8H9</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Transaction Date</span>
          <span>15/08/23</span>
        </div>
        <div class="flex justify-between summary-row">
          <span>Delivery Address</span>
          <span>123 Oak Street, Anytown</span>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup>
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
  IonThumbnail,
  IonProgressBar,
} from "@ionic/vue";
import { ref } from "vue";
import Card from "@/components/Card.vue";
//  change  statubar  put value between 0 (0.4 0.3 ------ ) to 1
const statusbar = ref(0.75); //change value
</script>

<style scoped>
/* Utility: first span bold in every summary row */
.summary-row > span:first-child {
  color: #634f96;
  font-weight: normal;
}
</style>
