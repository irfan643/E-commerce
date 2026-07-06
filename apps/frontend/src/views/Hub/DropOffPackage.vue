<template  >
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border  ">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/packages"></IonBackButton>
        </IonButtons>
        <IonTitle class="ion-text-center text_color font-bold">
          Package Details
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding">
      <!-- Package Information -->
      <div class="">
        <IonLabel class="font-bold text-lg">Package Information</IonLabel>
        <IonGrid class="pb-11">
          <IonRow class="gap-8  p-0 py-8">
            <IonCol class="   " size="3">
              <div class=" font-medium">Tracking Number</div>
              <div class="text-sm">1234567890</div>
            </IonCol>
            <IonCol size="7">
              <div class=" font-medium  ">Drop-off Time</div>
              <div class="text-sm">10:00 AM</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" class="  ">
              <div class=" font-medium">Package ID</div>
              <div class="text-sm">PKG-12345</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>

      <!-- Driver Information -->
      <div class="my-6">
        <IonLabel class="font-bold text-lg">Driver Information</IonLabel>
        <IonGrid class="mt-5">
          <IonRow class="gap-3">
            <IonCol size="4">
              <div class=" font-medium">Driver ID</div>
              <div class="text-sm">DRV-001</div>
            </IonCol>
            <IonCol>
              <div class=" font-medium">Name</div>
              <div class="text-sm">Ethan Carter</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>

      <!-- Package Status -->
      <div class="my-16">
        <IonLabel class="font-bold text-lg">Package Status</IonLabel>
        <IonGrid class="mt-6">
          <IonRow>
            <IonCol size="4" >
              <div class="  font-medium">Status</div>
              <div class="text-sm">Received</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>

      <!-- Update Button -->
      <div class="mt-10">
        <IonButton expand="block" class="btn button_color capitalize  font-bold ">
          Update Status
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
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from '@ionic/vue'
</script>
<style  scoped>

 ion-col{
    border-top: 1px solid  #E5E8EB;
    margin-top: 5px;
 } 
 ion-col :first-child{
    padding-top: 12px;
    color: var(--primary-color);
 }
</style>