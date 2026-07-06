<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonTitle class="!text-center !font-semibold  text_color">Hub Profile</IonTitle>
         <IonButtons slot="end" @click="goto(`setting`)">

        <IonButton  >
          <IonIcon :Icon="settings" slot="icon-only" class="size-6" ></IonIcon>
        </IonButton>
      </IonButtons>
    
      </IonToolbar>
     
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Hub Info -->
      <div class="!flex !flex-col !items-center !py-6">
        <img
          src="../../../public/image/hub.png"
          alt="Hub"
          class="!rounded-lg size-40 !shadow-md"
        />
        <h2 class=" !font-semibold !mt-4">Main Street Hub</h2>
        <p class="!text-center">Address: 123 Main St, Anytown</p>
        <p class=" !text-center">
          Operating Hours: Mon-Fri, 9 AM - 6 PM
        </p>
      </div>

      <!-- Contact Section -->
      <h1 class="!font-bold !text-lg !mb-2">Contact</h1>
      <IonList lines="none">
        <IonItem button>
          <IonIcon
            :icon="personOutline"
            slot="start"
            class="!bg-gray-200 !p-2 !rounded-lg"
          />
          <div class="listinfo flex-1">
            <div class="flex justify-between gap-12 items-center">
              <IonLabel class=" !text-gray-800">Hub Manager</IonLabel>
              <div class="capitalize">
                <p class="!text-black">manger name</p>
              </div>
            </div>
            <p class="!font-medium">contact the hub manger</p>
          </div>
        </IonItem>

        <IonItem button  @click="goto('contactinfo')">
          <IonIcon
            :icon="callOutline"
            slot="start"
            class="!bg-gray-200 !p-2 !rounded-lg"
          />
          <div class="listinfo flex-1">
            <div class="flex justify-between gap-12 items-center">
              <IonLabel class="!text-sm !text-gray-800"
                >Contact Number</IonLabel
              >

              <p class="!font-medium !text-black ">(555) 123-4567</p>
            </div>
            <p class="!font-medium">call the hub directly</p>
          </div>
        </IonItem>
      </IonList>

      <!-- Guidelines Section -->
      <h1 class="!font-bold !text-lg !mt-6 !mb-2">Guidelines</h1>
      <IonList lines="none">
        <IonItem button @click="goto('dropoff')">
          <IonIcon
            :icon="documentTextOutline"
            slot="start"
            class="!bg-gray-200 !p-2 !rounded-lg"
          />
          <div class="listinfo">
            <IonLabel class="!text-sm !text-gray-800"
              >Drop-off Guidelines</IonLabel
            >
            <p class="!font-medium">View drop-off instructions</p>
          </div>
        </IonItem>
      </IonList>

      <!-- Announcements Section -->
      <h1 class="!font-bold !text-lg !mt-6 !mb-2">Announcements</h1>
      <IonList lines="none">
        <IonItem button>
          <IonIcon
            :icon="megaphoneOutline"
            slot="start"
            class="!bg-gray-200 !p-2 !rounded-lg"
          />
          <div class="listinfo">
            <IonLabel class="!text-sm !text-gray-800">Latest News</IonLabel>
            <p class="!font-medium">Check for hub updates</p>
          </div>
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
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonButton,
} from "@ionic/vue";
import { Icon } from "ionicons/dist/types/components/icon/icon";

import {
  personOutline,
  callOutline,
  documentTextOutline,
  megaphoneOutline,
  settings,
} from "ionicons/icons";
import { useRouter } from "vue-router";
const route=useRouter();
const goto=(path:String)=>{
     
  route.push({name:`${path}`})
    

}
</script>

<style scoped>
ion-item {
  --padding-start: 0px;
  --padding-bottom: 15px;
  --padding-end: 0px;
  --inner-padding-end: 0px;
  --inner-padding-start: 0px;
}
.listinfo {
  padding-left: 12px;
}
p{
  color:var(--primary-color) ;
}
ion-label{
  font-weight: 700;
  
}
</style>
