<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center font-semibold  font-Manrope">Order Settings</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding space-y-10">

      <!-- Order Visibility -->
      <div>
        <p class="text-lg font-semibold mb-2">Order Visibility</p>
        <div class="flex justify-between text-sm text-gray-600 mb-1">
          <span>Maximum Orders Visible</span>
          <span>{{ maxOrders }}</span>
        </div>
        <IonRange v-model="maxOrders" min="1" max="50" step="1" class="a" />
      </div>

      <!-- Delivery Duration -->
      <div>
        <p class="text-lg font-semibold mb-2">Delivery Duration</p>
        <div class="flex   gap-2">
          <IonChip
            v-for="option in deliveryOptions"
            :key="option.value"
          
            class="cursor-pointer p-3  rounded-md bg-transparent border-[1px] border-gray-300 "
             
            :color="deliveryDuration === option.value ? 'tertiary' : undefined"
            @click="deliveryDuration = option.value"
          >
            {{ option.label }}
          </IonChip>
        </div>
      </div>

      <!-- Earnings Filter -->
      <div>
        <p class="text-lg font-semibold mb-2">Earnings Filter</p>
        <p class="text-sm text-gray-600 mb-1">Estimated Earnings Range</p>
        <IonRange
          dual-knobs="true"
          v-model="earningsRange"
          min="0"
          max="200"
          step="5"
        
        />
        <p class="text-sm text-gray-700 mt-1">
          ${{ earningsRange.lower }} – ${{ earningsRange.upper }}
        </p>
      </div>

      <!-- Distance Filter -->
      <div>
        <p class="text-lg font-semibold mb-2">Distance Filter</p>
        <div class="flex justify-between text-sm text-gray-600 mb-1">
          <span>Maximum Delivery Distance</span>
          <span>{{ maxDistance }} miles</span>
        </div>
        <IonRange v-model="maxDistance" min="1" max="50" step="1" />
      </div>

      <!-- Save Button -->
      <IonButton expand="block" class="btn button_color" @click="saveSettings">
        Save Settings
      </IonButton>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonRange,
  IonChip,
  IonButton,
} from "@ionic/vue";

// State
const maxOrders = ref(10);
const deliveryDuration = ref("any");
const earningsRange = ref({ lower: 20, upper: 100 });
const maxDistance = ref(5);

const deliveryOptions = [
  { label: "Next 1 Hour", value: "1h" },
  { label: "Next 3 Hours", value: "3h" },
  { label: "Any Time", value: "any" },
];

const saveSettings = () => {
  console.log("Saved settings:", {
    maxOrders: maxOrders.value,
    deliveryDuration: deliveryDuration.value,
    earningsRange: earningsRange.value,
    maxDistance: maxDistance.value,
  });
};
</script>
<style>
ion-range::part(knob) {
  display: none; 
}
ion-range{
       /* unfilled track */
  --bar-background-active: #7a24f7; /* filled portion */
      /* knob color */
        /* popup pin color */
   
}
</style>