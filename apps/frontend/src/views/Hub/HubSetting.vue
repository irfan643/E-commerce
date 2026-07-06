<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="text-center font-semibold text_color">Hub Settings</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">

      <!-- Notifications -->
      <IonLabel class="font-bold text-lg block mb-2">Notifications</IonLabel>
      <IonList>
        <IonItem lines="none">
          <IonIcon
            :icon="cubeOutline"
            slot="start"
            class="bg-gray-200 w-6 h-6 p-1 rounded-lg"
          />
          <div class="flex flex-col ml-4">
            <p class="!font-medium">New Package Arrival</p>
            <p class="!text-sm ">Notify when a new package arrives</p>
          </div>
          <IonToggle slot="end" v-model="toggles.packageArrival" />
        </IonItem>

        <IonItem lines="none">
          <IonIcon
            :icon="alertCircleOutline"
            slot="start"
            class="bg-gray-200 w-6 h-6 p-1 rounded-lg"
          />
          <div class="flex flex-col ml-4">
            <p class="!font-medium">Issue Reported</p>
            <p class="!text-sm ">Notify when an issue is reported</p>
          </div>
          <IonToggle slot="end" v-model="toggles.issueReported" />
        </IonItem>
      </IonList>

      <!-- Package Processing -->
      <IonLabel class="font-bold text-lg block mt-6 mb-2">Package Processing</IonLabel>
      <IonList>
        <IonItem lines="none">
          <IonIcon
            :icon="qrCodeOutline"
            slot="start"
            class="bg-gray-200 w-6 h-6 p-1 rounded-lg"
          />
          <div class="flex flex-col ml-4">
            <p class="!font-smeibold">Auto-Scan on Drop-off</p>
            <p class="!text-sm ">Automatically scan packages on <br>  </br> drop-off</p>
          </div>
          <IonToggle slot="end" v-model="toggles.autoScan" />
        </IonItem>
      </IonList>

      <!-- Integrations -->
      <IonLabel class="font-bold text-lg block mt-6 mb-2">Integrations</IonLabel>
      <IonList lines="none">
        <IonItem button detail>
          <IonIcon
            :icon="turnk"
            slot="start"
            class="bg-gray-200 w-6 h-6 p-1 rounded-lg"
          />
          <div class="ml-4">
            <p class="!font-medium">Logistics Integration</p>
            <p class="!text-sm ">Connect to third-party logistics systems</p>
          </div>
        </IonItem>

        <IonItem button detail>
          <IonIcon
            :icon="cubeOutline"
            slot="start"
            class="bg-gray-200 w-6 h-6 p-1 rounded-lg"
          />
          <div class="ml-4">
            <p class="!font-medium">Inventory Integration</p>
            <p class="!text-sm ">Connect to inventory management systems</p>
          </div>
        </IonItem>
      </IonList>

      <!-- Access Control -->
      <IonLabel class="font-bold text-lg block mt-6 mb-2">Access Control</IonLabel>
      <IonList lines="none">
        <IonItem button detail>
          <IonIcon
            :icon="personOutline"
            slot="start"
            class="bg-gray-200 w-6 h-6 p-1 rounded-lg"
          />
          <div class="ml-4">
            <p class="!font-medium">Staff Permissions</p>
            <p class="!text-sm ">Manage staff permissions and access levels</p>
          </div>
        </IonItem>
      </IonList>
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
  IonToggle,
} from "@ionic/vue";

import {
  cubeOutline,
  alertCircleOutline,
  qrCodeOutline,
  busOutline,
  personOutline,
} from "ionicons/icons";
 import turnk from "@/assets/icon/truck.svg"
import { ref } from "vue";

const toggles = ref({
  packageArrival: false,
  issueReported: false,
  autoScan: false,
});
</script>
<style scoped>


    ion-item {
  --padding-start: 0px;
  --padding-bottom: 15px;
  --padding-end: 0px;
  --inner-padding-end: 0px;
  --inner-padding-start: 0px;
  
}
ion-item div p:last-child {
  font-size: 13px;
  color: var(--primary-color);
}
</style>