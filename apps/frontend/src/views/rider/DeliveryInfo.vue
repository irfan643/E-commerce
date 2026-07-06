<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border ">
      <IonToolbar>
             <IonButtons slot="start">
              <IonBackButton 
                default-href="/" 
              >

              </IonBackButton>
             </IonButtons>
        <IonTitle class="text-lg font-bold ion-text-center text-[#140D1C]">
          Delivery Details
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Main Content -->
    <IonContent class="bg-[#FAF7FC]">
      <!-- Order Summary -->
      <section class="p-4">
        <h2 class="text-xl !font-bold text-[#140D1C]">Order Summary</h2>

        <!-- Products List -->
        <div class="space-y-3 mt-4">
          <div class="flex items-center gap-4 bg-[#FAF7FC] p-3 rounded-lg">
            <div class="w-14 h-14 bg-gray-200 rounded-lg"></div>
            <div>
              <p class="font-medium text-base">Product A</p>
              <p class="text-sm text-[#734F96]">Quantity: 2</p>
            </div>
          </div>

          <div class="flex items-center gap-4 bg-[#FAF7FC] p-3 rounded-lg">
            <div class="w-14 h-14 bg-gray-200 rounded-lg"></div>
            <div>
              <p class="font-medium text-base">Product B</p>
              <p class="text-sm text-[#734F96]">Quantity: 1</p>
            </div>
          </div>

          <div class="flex items-center gap-4 bg-[#FAF7FC] p-3 rounded-lg">
            <div class="w-14 h-14 bg-gray-200 rounded-lg"></div>
            <div>
              <p class="font-medium text-base">Product C</p>
              <p class="text-sm text-[#734F96]">Quantity: 3</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Delivery Status -->
      <section class="p-4">
        <h2 class="text-xl !font-bold text-[#140D1C]">Delivery Status</h2>
        <IonItem lines="none" style="--padding-start:var(--padding-start)" class="mt-2   rounded-lg bg-[#FAF7FC]">
           
          <IonIcon :icon="checkmarkCircleOutline" slot="start" class="text-[#140D1C] bg-gray-200 p-2  rounded-xl " />
          <IonLabel class="text-base text-[#140D1C] pl-4">Completed</IonLabel>
        </IonItem>
      </section>

      <!-- Earnings -->
      <section class="p-4">
        <h2 class=" !font-bold text-[#140D1C]">Earnings</h2>
        <IonItem lines="none" style="--padding-start:var(--padding-start)" class="mt-2 rounded-lg bg-[#FAF7FC]">
          <IonIcon :icon="dollor" slot="start" class="text-[#140D1C] bg-gray-200 p-2  rounded-xl "  />
          <IonLabel class="text-base text-[#140D1C] pl-2 ">$12.50</IonLabel>
        </IonItem>
      </section>
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
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonBackButton
} from '@ionic/vue';
import dollor from"@/assets/icon/dollor.svg"
import {checkmarkCircleOutline} from 'ionicons/icons';
</script>
