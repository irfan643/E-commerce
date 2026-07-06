<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class=" ion-no-border">
      <IonToolbar>
        <IonTitle class="text-xl ion-text-center font-bold text_color">Dashboard</IonTitle>
        
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class=" ion-padding">

      <!-- Section: Today’s Tasks -->
      <div class="">
        <h2 class="text-lg font-bold text-[#140D1C]">Today's Tasks</h2>
      </div>

      <IonList lines="none">
        <IonItem  button >
          <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C] " />
          <IonLabel class="">
            <h3 class=" text-[#140D1C]">Drop off 5 packages</h3>
            <p class="text-sm text-[#734F96]">123 Main St, Apt 4B</p>
          </IonLabel>
        </IonItem>

        <IonItem class="bg-[#FAF7FC]" button>
          <IonIcon :icon="downloadOutline" slot="start" class="text-[#140D1C]" />
          <IonLabel>
            <h3 class="font-medium text-[#140D1C]">Pick up 2 packages</h3>
            <p class="text-sm text-[#734F96]">123 Main St, Apt 4B</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Section: Hub Updates -->
      <div class=" ">
        <h2 class="text-lg font-bold text-[#140D1C]">Hub Updates</h2>
      </div>

      <IonList lines="none" >
        <IonItem class="bg-[#FAF7FC] " button>
          <IonIcon :icon="informationCircleOutline" slot="start" class="text-[#140D1C]" />
          <IonLabel>
            <h3 class="font-medium text-[#140D1C]">New drop-off procedure</h3>
            <p class="text-sm text-[#734F96]">Effective June 1st</p>
          </IonLabel>
        </IonItem>
      </IonList>

    </IonContent>

    <!-- Footer / Bottom Tabs -->
    
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonContent, IonList, IonItem, IonLabel,
  IonFooter, IonTabBar, IonTabButton
} from '@ionic/vue';
import {
  notificationsOutline, cubeOutline, downloadOutline,
  informationCircleOutline, homeOutline, refreshOutline, personCircleOutline
} from 'ionicons/icons';
</script>
<style scoped>
 ion-item{
  --padding-start:0px ;
   --padding-bottom:10px
   


 }
 ion-label{
  padding-left: 10px;
 }
 ion-icon{
  height: 32px;
  width: 32px;
  background-color: #EDE8F2;
  padding: 10px;
  border-radius: 10px;
 }
h2 {
  font-weight: bold;


 }h3 {
    font-weight: 700;

 }
  
</style>
