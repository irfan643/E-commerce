<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border ">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center font-semibold">Order Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding space-y-8">

      <!-- Customer Information -->
      <div>
        <h2 class=" !m-0   ">Customer Information</h2>
        <div class="flex items-center gap-3  my-3">
          <IonAvatar>
            <img src="https://i.pravatar.cc/150?img=32" alt="customer"  />
          </IonAvatar>
          <div>
            <h5 class="!m-0">Sophia Carter</h5>
            <p class="text-purple-600 text-sm">123 Elm Street, Anytown</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <IonButton fill="clear" class="!p-0 size-12 !rounded-lg bg-gray-100">
            <IonIcon :icon="callOutline" class="text-xl text-gray-700 size-full"  />
          </IonButton>
          <span class="text-gray-700 text-lg ">Contact: (555) 123-4567</span>
        </div>
      </div>

      <!-- Delivery Items -->
      <div>
        <h4 class="!mb-6">Delivery Items</h4>
        <div class="space-y-2">
          <div v-for="item in items" :key="item" class="flex items-center gap-3">
            <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100">
              <IonIcon :icon="cubeOutline" class="text-lg text-gray-700" />
            </div>
            <span class="text-gray-800">{{ item }}</span>
          </div>
        </div>
      </div>
      <!-- Delivery Route -->
      <div>
        <h4 class="!mb-6">Delivery Route</h4>
        <div class="rounded-xl overflow-hidden shadow">
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Yonkers,NY&zoom=11&size=400x200&key=YOUR_API_KEY"
            alt="map"
            class="w-full h-48 object-cover"
          />
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-3 ">
        <IonButton expand="block" class="btn button_color font-semibold">Delivered</IonButton>
        <IonButton expand="block" color="light" class="!text-gray-800 font-semibold  btn !rounded-xl">
          Scan QR Code
        </IonButton>
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
  IonButtons,
  IonBackButton,
  IonContent,
  IonAvatar,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { callOutline, cubeOutline } from "ionicons/icons";

const items = ["Laptop", "Charger", "Mouse"];
</script>
