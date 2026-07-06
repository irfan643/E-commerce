<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/"></IonBackButton>
        </IonButtons>
        <IonTitle class="ion-text-center font-bold">Profile</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding">
      <!-- Profile Info -->
      <div class="flex flex-col items-center mt-4">
        <IonAvatar class="size-28">
          <IonImg src="../../../public/image/store_avtar.png" />
        </IonAvatar>
        <h2 class="mt-3 font-bold text-lg">Sophia Carter</h2>
        <p class="text-sm text-gray-500">Seller since 2021</p>
      </div>

      <!-- Store Information -->
      <div class="mt-8">
        <h3 class="font-bold ">Store Information</h3>
        <IonList lines="none"  >
          <IonItem button>
            <IonLabel>
              <h4 class="font-medium">Store Name</h4>
              <p class="text-sm text-gray-500">Boutique Fashion</p>
            </IonLabel>
            <IonIcon :icon="arrowForward" size=" 16" class="text_color"></IonIcon>
          </IonItem>
          <IonItem button>
            <IonLabel>
              <h4 class="font-medium">Store Address</h4>
              <p class="text-sm text-gray-500">123 Fashion Ave, Cityville</p>
            </IonLabel>
            <IonIcon :icon="arrowForward" size=" 16" class="text_color"></IonIcon>
          </IonItem>
        </IonList>
      </div>

      <!-- Account Settings -->
      <div class="mt-6">
        <h3 class="font-bold mb-2">Account Settings</h3>
        <IonList lines="none">
          <IonItem button >
            <IonLabel>
              <h4 class="font-medium">Payment Information</h4>
              <p class="text-sm text-gray-500">**** **** **** 1234</p>
            </IonLabel>
                            <IonIcon :icon="arrowForward" size=" 16" class="text_color"></IonIcon>

          </IonItem>
          <IonItem button >
            <IonLabel>
              <h4 class="font-medium">Contact Details</h4>
              <p class="text-sm text-gray-500">sophia.carter@email.com</p>
            </IonLabel>
                        <IonIcon :icon="arrowForward" size=" 16" class="text_color"></IonIcon>

          </IonItem>
        </IonList>
      </div>
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
  IonButtons,
  IonBackButton,
  IonAvatar,
  IonImg,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
} from "@ionic/vue";

import { person, list, cash, cube as box, arrowForward } from "ionicons/icons";
</script>

<style scoped>
h2 {
  font-size: 20px;
  font-weight: 300;
}

p {
  color: #634f96;
}

h4 {
  font-size: 15px;
  color: #120d1c;
}
ion-item{
  --inner-padding-bottom:15px;
}
</style>
