<template>
  <IonPage>
    <IonHeader class="ion-no-border" >
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/"></IonBackButton>
        </IonButtons>
        <IonTitle class="ion-text-center text_color font-bold">
          Package Details
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding">
      <!-- Section Title -->
      <div class="my-4">
        <IonLabel class="font-bold text-lg">Package Information</IonLabel>
      </div>

      <!-- Info List -->
      <IonList lines="none" class="!p-0 !m-0">
        <IonItem class="!p-0 !m-0" button>
          <IonIcon  :icon="cubeOutline" slot="start"></IonIcon>
          <IonLabel>
            <div class="font-semibold">Sender: Tech Solutions Inc.</div>
            <p class="text-sm text-gray-500">Tracking ID: 1234567890</p>
          </IonLabel>  
        </IonItem>

        <IonItem class="!p-0 !m-0" button>
          <IonIcon :icon="personOutline" slot="start"></IonIcon>
          <IonLabel>
            <div class="font-semibold">Address: 123 Elm Street, Anytown</div>
            <p class="text-sm text-gray-500">Recipient: Alex Johnson</p>
          </IonLabel>
        </IonItem>

        <IonItem class="!p-0 !m-0" >
          <IonIcon :icon="trunk" slot="start"></IonIcon>
          <IonLabel>
            <div class="font-semibold">Status: Received</div>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Section Title -->
      <div class="my-8">
        
        <IonLabel class="font-bold text-lg">Update Status</IonLabel>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col gap-3">
        <IonButton expand="block" class="btn button_color capitalize font-bold ">
          Processing
        </IonButton>
        <IonButton expand="block"  fill="outline" class="btn text-gray-700 capitalize font-bold shadow-none "  style="--shadow:none" color="#ED8F2" >
          Problem
        </IonButton>
        <IonButton expand="block" fill="outline" class="btn text-gray-700 capitalize font-bold shadow-none "  style="--shadow:none" color="#ED8F2">
          Delivered
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
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
} from '@ionic/vue'
 import { busOutline, cubeOutline, person, personOutline } from 'ionicons/icons';
 import trunk from "@/assets/icon/truck.svg"
</script>
<style scoped>
 p{
  color:#634F96 !important;
 }
ion-item {
  --padding-start: 0px;
  --padding-bottom: 15px;
  --padding-end: 0px;
  --inner-padding-end: 0px;
  --inner-padding-start: 0px;
}

ion-label {
  padding-left: 5px;
}
ion-icon {
  height: 32px;
  width: 32px;
  background-color: #ede8f2;
  padding: 10px;
  border-radius: 10px;
}


</style>