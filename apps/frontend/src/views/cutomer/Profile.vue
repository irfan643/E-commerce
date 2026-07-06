<template>
  <!-- Main Page Container -->
  <IonPage>
    <!-- Page Header -->
    <IonHeader class="ion-no-border    shadow-none">
      <IonToolbar class="px-2 ion-no-border">
        <!-- Page Title -->
        <IonTitle class="ion-text-center ml-6 font-bold text_color capitalize">profile</IonTitle>
        <!-- Settings Button (Top-right) -->
        <ion-buttons slot="end" class="">
          <IonButton>
            <!-- Settings Icon -->
            <ion-icon aria-hidden="true" :icon="settings" slot="icon-only" class="size-6" />

          </IonButton>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <!-- Page Content -->
    <IonContent class="flex justify-center  items-center h-full">
      <!-- Profile Section -->
      <div class="  flex flex-col  justify-center
      items-center gap-3">
        <!-- Profile Avatar -->
        <IonAvatar class="size-26">
          <IonImg src='../../../public/image/store_avtar.png'></IonImg>
        </IonAvatar>
        <!-- Profile Name & Membership Label -->
        <IonLabel style="--padding-start: 60px;">
          <div class="text-center">
            <h1>Sophia Carter</h1>
            <p>premium Member</p>
          </div>

        </IonLabel>
      </div>
      <!-- Tabs / Options List -->
      <div class="grid  mt-6 w-full">
        <IonItem lines="none" button class="flex items-center justify-center  mt-4 " v-for="item in tab"
          :key="item.title"
           @click="handleClick(item.route)"
          >

          <IonAvatar slot="start" style="--border-radius: 20%"
            class="bg-[#EBE8F2] ion-align-content-center ion-text-center p-1">
          <IonIcon aria-hidden="true" :icon="item.img" class="size-6"></IonIcon>
          </IonAvatar>
          <IonLabel class="ml-2">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </IonLabel>
          <IonIcon aria-hidden="true" :icon="item.icon" class="size-6"></IonIcon>
        </IonItem>
      </div>
       <!-- Logout Button -->
      <div class="flex justify-center gap-4 mt-8 w-full">
        <ion-button class="btn font-bold capitalize  text_color"
          style="--background:#EBE8F2 ; --padding-start:3rem; --padding-end:3rem">
          logout
        </ion-button>
      </div>

    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,

  IonButtons,

  IonIcon,
  IonAvatar,
  IonImg,
  IonItem,
  IonButton
} from "@ionic/vue";
import { settings, } from "ionicons/icons";
import Forward_arrow from "@/assets/icon/Forward_arrow.svg";
import card from  "@/assets/icon/card.svg"
import person from  "@/assets/icon/person.svg"
import box from  "@/assets/icon/box.svg"
   
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const tab = [
  {
    title: "Orders",
    description: "View your order history",
    icon: Forward_arrow,
    img:box,
    route:"/active_order"
  },
  {
    title: "Payment Method",
    description: "Manage your payment method",
    icon: Forward_arrow,
    img: card,
    route:"/payment"
  },
  {
    title: "Profile Details",
    description: "Edit your profile details",
    icon: Forward_arrow,
     img:person, 
     route:"/edit_profile"
  }
]

function handleClick(path:string) {
     router.push(path);
      
}
</script>
<style></style>
